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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 w-[380px]">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Date:</span> {date}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Location:</span> {location}
        </p>
        <a
          href={`/event/${id}`}
          className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full text-sm transition"
        >
          Тасалбар авах
        </a>
      </div>
    </div>
  );
};

export default EventCard;
