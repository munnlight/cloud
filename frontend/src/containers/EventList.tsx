import React, { useEffect } from "react";
import EventCard from "../components/EventCard";

const EventList = () => {
  const [shows, setShows] = React.useState<any[]>([]);

  const fetchShows = async () => {
    const response = await fetch("https://cloud-zupn.onrender.com/shows");
    const data = await response.json();
    console.log(data);
    setShows(data);
  };
  // console.log(shows);

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {shows.map((show: any) => (
          <EventCard
            key={show.id}
            id={show.showId}
            title={show.title}
            date={show.date}
            image={show.imageUrl}
            location={show.place.name}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
