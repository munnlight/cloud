import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const AdminPanel = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <p>Manage events here.</p>
      </main>
      <Footer />
    </>
  );
};

export default AdminPanel;