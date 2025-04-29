import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import MyTickets from "./pages/MyTickets";
import AdminPanel from "./pages/AdminPanel";
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../src/components/header";
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import MyTickets from './pages/MyTickets';
import AdminPanel from './pages/AdminPanel';
>>>>>>> d79983d1f2f96d6298cf6d0a3f853de7904a52e2

function App() {
  // ======== ЗА Энд хэрэгтэй api хаягуудыг бичлээ ==============================================
  const LOCAL_URL = "http://localhost:8080";
  const HOST_URL = "https://cloud-zupn.onrender.com";
  const user = "/users";
  const place = "/places";
  const show = "/shows";
  const ticket = "/tickets";
  // ============================================================================================

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const handleGet = async () => {
      const response = await fetch(HOST_URL + user);
      const data = await response.json();
      console.log(data);
      setData(data);
    };

    handleGet();
  }, []);

  return (
    <Router>
      <div className="text-3xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
