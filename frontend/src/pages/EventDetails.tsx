import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BookingForm from '../components/BookingForm';
import { useParams } from 'react-router-dom';

interface DeadlineProgressBarProps {
  deadline: Date;
}

const DeadlineProgressBar: React.FC<DeadlineProgressBarProps> = ({ deadline }) => {
  const [percentage, setPercentage] = useState<number>(0);
  const [timeLeftText, setTimeLeftText] = useState<string>('');

  useEffect(() => {
    const start = new Date();
    const totalDuration = deadline.getTime() - start.getTime();

    const updateProgress = () => {
      const now = new Date().getTime();
      const remaining = deadline.getTime() - now;
      const elapsed = totalDuration - remaining;
      const percent = Math.min((elapsed / totalDuration) * 100, 100);
      setPercentage(percent);

      const secondsLeft = Math.max(0, Math.floor(remaining / 1000));
      const days = Math.floor(secondsLeft / (3600 * 24));
      const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeftText(`${days} өдөр ${hours} цаг ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

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

const EventDetails = () => {
  const LOCAL_URL = "http://localhost:8080";
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<any>(null);
  const deadline = new Date('2025-05-10T18:00:00');
  const [bZoneTickets, setBZoneTickets] = useState<number>(0);
  const [cZoneTickets, setCZoneTickets] = useState<number>(0);

  const handleTicketChange = (zone: 'B' | 'C', increment: number) => {
    if (zone === 'B') {
      setBZoneTickets(Math.max(0, bZoneTickets + increment));
    } else {
      setCZoneTickets(Math.max(0, cZoneTickets + increment));
    }
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`${LOCAL_URL}/shows/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventDetails();
  }, [id]);

  if (!show) {
    return <p className="text-center mt-20 text-gray-600">Тоглолтын мэдээлэл ачааллаж байна...</p>;
  }

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-4 sm:p-8 grid lg:grid-cols-2 gap-8 bg-gray-50 min-h-screen">
        {/* Event Details */}
        <section className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
          <img
            src={"/" + show.imageUrl}
            alt={show.name}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <div className="flex flex-wrap gap-3 mb-5 text-sm">
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-medium">👤 {show.name}</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-medium">📍 {show.place.name}</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-medium">🗓 {show.date}</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full font-medium">🕘 21:00</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{show.title}</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Үүд нээх: 18:00</li>
            <li>Тоглолт эхлэх: 21:00</li>
            <li>Дуусах: 23:30</li>
          </ul>
          <p className="text-base text-red-600 font-medium">A zone, VIP zone – зарагдаж дууссан.</p>
        </section>

        {/* Ticket and Countdown */}
        <section className="space-y-6">
          <DeadlineProgressBar deadline={deadline} />
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
            <p className="text-xl font-bold text-gray-900 mb-6">🎫 Тасалбар захиалах</p>
            <div className="space-y-6">
              {/* B Zone */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">B zone</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleTicketChange('B', -1)}
                    className="w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                  >−</button>
                  <span className="w-10 text-center">{bZoneTickets}</span>
                  <button
                    onClick={() => handleTicketChange('B', 1)}
                    className="w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                  >＋</button>
                </div>
                <span className="text-lg font-semibold text-gray-900">89,000 ₮</span>
              </div>

              {/* C Zone */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">C zone</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleTicketChange('C', -1)}
                    className="w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                  >−</button>
                  <span className="w-10 text-center">{cZoneTickets}</span>
                  <button
                    onClick={() => handleTicketChange('C', 1)}
                    className="w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                  >＋</button>
                </div>
                <span className="text-lg font-semibold text-gray-900">59,000 ₮</span>
              </div>
            </div>

            <button
              className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all"
            >
              Захиалах
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
