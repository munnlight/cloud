import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const MyTickets = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">My Booked Tickets</h1>
        <p>You have not booked any tickets yet.</p>
      </main>
      <Footer />
    </>
  );
};

export default MyTickets;
