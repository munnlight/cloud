import React from 'react';

const BookingForm = () => {
  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-5 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Book Your Seat</h2>
      
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Name</label>
        <input 
          type="text" 
          placeholder="Your name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 font-medium">Seats</label>
        <input 
          type="number" 
          placeholder="Number of seats"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
