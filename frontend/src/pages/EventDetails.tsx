import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BookingForm from '../components/BookingForm';

const EventDetails = () => {
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