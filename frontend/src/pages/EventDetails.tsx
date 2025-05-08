import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";

interface DeadlineProgressBarProps {
  startDate: Date;
  deadline: Date;
}

const DeadlineProgressBar: React.FC<DeadlineProgressBarProps> = ({ startDate, deadline }) => {
  const [percentage, setPercentage] = useState<number>(0);
  const [timeLeftText, setTimeLeftText] = useState<string>("");

  useEffect(() => {
    const totalDuration = deadline.getTime() - startDate.getTime();

    const updateProgress = () => {
      const now = new Date().getTime();
      const remaining = deadline.getTime() - now;
      const elapsed = now - startDate.getTime();
      const percent = Math.min((elapsed / totalDuration) * 100, 100);
      setPercentage(percent);

      const secondsLeft = Math.max(0, Math.floor(remaining / 1000));
      const days = Math.floor(secondsLeft / (3600 * 24));
      const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeftText(
        `${days} өдөр ${hours} цаг ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`
      );
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [startDate, deadline]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <p className="text-lg font-semibold text-gray-900 mb-2">⏳ Үлдсэн хугацаа</p>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-700">{timeLeftText}</p>
    </div>
  );
};

interface Show {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  place: { name: string };
  date: string;
  time: string;
  price: number;
  description: string;
}

const EventDetails: React.FC = () => {
  const LOCAL_URL = "http://localhost:8080";
  const HOST_URL = "https://cloud-zupn.onrender.com";
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);
  const [startDate] = useState<Date>(new Date("2025-03-01T00:00:00"));
  const [deadline, setDeadline] = useState<Date>(new Date());
  const [ticketCount, setTicketCount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [numberOfTickets, setNumberOfTickets] = useState<number>(0);

  const totalPrice = ticketCount * (show?.price || 0);

  const handleTicketChange = (increment: number) => {
    setTicketCount((prev) => Math.max(0, prev + increment));
  };

  const handleConfirmPurchase = (phoneNumber: string) => {
    console.log(
      `Purchase confirmed! Phone: ${phoneNumber}, Tickets: ${ticketCount}, Total: ${totalPrice} ₮`
    );
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`${HOST_URL}/shows/${id}`);
        if (!response.ok) throw new Error("Failed to fetch event details");
        const data = await response.json();
        setShow(data);

        const deadlineDate = new Date(`${data.date}T${data.time || "18:00:00"}`);
        setDeadline(deadlineDate);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventDetails();
  }, [id]);

  if (!show) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }

  const [hours, minutes, seconds] = show.time.split(":").map(Number);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-4 sm:p-8 grid lg:grid-cols-2 gap-8 bg-gray-50 min-h-screen">
        <section className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
          <img
            src={"/" + show.imageUrl}
            alt={show.name}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <div className="flex flex-wrap gap-5 mb-5 text-sm">
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-medium">
              👤 {show.name}
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-medium">
              📍 {show.place.name}
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-medium">
              🗓 {show.date}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{show.title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl shadow-sm">
              <p className="text-gray-500">⏰ Үүд нээх</p>
              <p className="text-lg font-semibold text-gray-900">
                {(hours - 1 + 24) % 24}:{show.time.slice(3, 5)}
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl shadow-sm">
              <p className="text-gray-500">🎵 Тоглолт эхлэх</p>
              <p className="text-lg font-semibold text-gray-900">
                {hours}:{show.time.slice(3, 5)}
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl shadow-sm">
              <p className="text-gray-500">🕛 Дуусах</p>
              <p className="text-lg font-semibold text-gray-900">
                {(hours + 4 + 24) % 24 < 10 ? "0" : ""}
                {(hours + 4 + 24) % 24}:{show.time.slice(3, 5)}
              </p>
            </div>
          </div>
          <h3 className="mt-5 text-3xl font-semibold text-purple-600 mb-4">Дэлгэрэнгүй мэдээлэл</h3>
          <p className="mt-8 text-base text-gray-700 leading-relaxed mb-6">{show.description}</p>
        </section>

        <section className="space-y-6">
          <DeadlineProgressBar startDate={startDate} deadline={deadline} />
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
            <p className="text-xl font-bold text-gray-900 mb-6">🎫 Тасалбар захиалах</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-800">Ердийн тасалбар</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    handleTicketChange(-1);
                    ticketCount > 0 ? setTicketCount(ticketCount - 1) : setTicketCount(0);
                  }}
                  className="w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                >
                  −
                </button>
                <span className="w-10 text-center">{ticketCount}</span>
                <button
                  onClick={() => {
                    handleTicketChange(1);
                    setTicketCount(ticketCount + 1);
                  }}
                  className="w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                >
                  ＋
                </button>
              </div>
              <span className="text-lg font-semibold text-gray-900">{show.price} ₮</span>
            </div>

            <div className="flex justify-between items-center text-lg font-semibold mt-4 border-t pt-4 text-gray-800">
              <span>Нийт үнэ:</span>
              <span>{totalPrice.toLocaleString()} ₮</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all"
            >
              Захиалах
            </button>
          </div>
        </section>
      </main>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Захиалга баталгаажуулах"
        description={`Та ${ticketCount} ширхэг тасалбар захиалж байна. Нийт үнэ: ${totalPrice.toLocaleString()} ₮`}
        showConfirm={true}
        confirmText="Баталгаажуулах"
        onConfirm={handleConfirmPurchase}
        numberOfTickets={numberOfTickets}
        price={show.price * ticketCount}
      />
    </>
  );
};

export default EventDetails;
