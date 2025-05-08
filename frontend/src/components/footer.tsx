import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* About section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Event Booking</h2>
          <p className="text-sm leading-relaxed">
            Тоглолт, арга хэмжээний тасалбарын захиалгыг хялбар, шуурхай, найдвартай аргаар!
          </p>
        </div>

        {/* Contact section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Холбоо барих</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm mb-2">
            <FaPhoneAlt /> +976 88112233
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaEnvelope /> info@eventbooking.mn
          </p>
        </div>

        {/* Social media section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Биднийг дагаарай</h3>
          <div className="flex justify-center md:justify-start space-x-5 text-xl">
            <a href="#" className="hover:text-white transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; 2025 Event Booking. Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </footer>
  );
};

export default Footer;
