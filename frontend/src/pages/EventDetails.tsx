import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BookingForm from "../components/BookingForm";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  // ======== ЗА Энд хэрэгтэй api хаягуудыг бичлээ ==============================================
  const LOCAL_URL = "http://localhost:8080";
  const HOST_URL = "https://cloud-zupn.onrender.com";
  // ============================================================================================
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = React.useState<any>(null);

  const fetchEventDetails = async () => {
    const response = await fetch(`${LOCAL_URL}/shows/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch event details");
    }
    const data = await response.json();
    // console.log(data);
    setShow(data);
  };

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  return (
    <>
      <Header />
      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Jazz Night</h1>
        <p>Date: 2025-05-10</p>
        <p>Location: UB Theatre</p>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
