import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BookingForm from "../components/BookingForm";
import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "../api/config";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = React.useState<any>(null);

  const fetchEventDetails = async () => {
    const response = await fetch(API_ENDPOINTS.getShowById(id));
    if (!response.ok) {
      throw new Error("Failed to fetch event details");
    }
    const data = await response.json();
    console.log(data);
    setShow(data);
    // Handle the event details data as needed
  };
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
