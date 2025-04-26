import React from 'react';

const LoginModal = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="text" placeholder="Username" className="border p-2 w-full mb-2" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
        <button className="bg-indigo-600 text-white px-4 py-2 w-full rounded">Login</button>
      </div>
    </div>
  );
};

export default LoginModal;
