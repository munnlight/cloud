import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

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
    <div className="my-8 bg-white p-6 rounded-2xl shadow-lg">
      <p className="text-gray-900 font-bold text-xl mb-3">⏳ Үлдсэн хугацаа</p>
      <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-1000 ease-linear"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-3 text-base text-gray-700 font-medium">{timeLeftText}</p>
    </div>
  );
};

const EventDetails: React.FC = () => {
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

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-4 sm:p-8 grid lg:grid-cols-2 gap-8 bg-gray-100 min-h-screen">
        {/* Left Section: Event Image and Details */}
        <section className="bg-white rounded-2xl shadow-xl p-6">
          <img
            src="/boldbaatar.png"
            alt="Jazz Night"
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">🎶 Music</span>
            <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">👤 MONADD</span>
            <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">📍 AIC Steppe Arena</span>
            <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">🗓 2025-05-17</span>
            <span className="bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full font-medium">🕘 21:00</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Mxrn1ngstar Live at AIC Steppe Arena</h2>
          <ul className="text-base text-gray-700 list-disc list-inside space-y-2 mb-4">
            <li>Үүд нээх: 18:00</li>
            <li>Тоглолт эхлэх: 21:00</li>
            <li>Дуусах: 23:30</li>
          </ul>
          <p className="text-base text-red-600 font-semibold">A zone, VIP zone – зарагдаж дууссан.</p>
        </section>

        {/* Right Section: Countdown and Ticket Booking */}
        <section className="space-y-6">
          <DeadlineProgressBar deadline={deadline} />
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <p className="text-2xl font-bold text-gray-900 mb-6">🎫 Тасалбар захиалах</p>
            <div className="space-y-6">
              {/* B Zone */}
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-800 font-semibold">B zone</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleTicketChange('B', -1)}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-lg font-medium">{bZoneTickets}</span>
                  <button
                    onClick={() => handleTicketChange('B', 1)}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    ＋
                  </button>
                </div>
                <span className="text-lg text-gray-900 font-semibold">89,000 ₮</span>
              </div>

              {/* C Zone */}
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-800 font-semibold">C zone</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleTicketChange('C', -1)}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-lg font-medium">{cZoneTickets}</span>
                  <button
                    onClick={() => handleTicketChange('C', 1)}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    ＋
                  </button>
                </div>
                <span className="text-lg text-gray-900 font-semibold">59,000 ₮</span>
              </div>
            </div>
            <button className="w-full py-3 mt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-lg font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all">
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