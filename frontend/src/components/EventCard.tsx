import React from "react";

type Props = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
};

const EventCard = ({ id, title, date, location, image }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 w-[380px] group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          Шинэ
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">{title}</h2>
        
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            📅 {date}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            📍 {location}
          </span>
        </div>

        <a
          href={`/event/${id}`}
          className="inline-flex items-center gap-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-full transition-all"
        >
          Тасалбар авах
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
