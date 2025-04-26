import React from 'react';
import EventCard from '../components/EventCard';

const EventList = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <EventCard
          title="Jazz Night"
          date="2025-05-10"
          location="UB Theatre"
          image="jimmy.jpg"
        />

        <EventCard
          title="Jazz Night"
          date="2025-05-10"
          location="UB Theatre"
          image="https://unsplash.com/photos/a-crowd-of-people-standing-outside-of-a-theater-g879RZ9eeYE"
        />

        <EventCard
          title="Jazz Night"
          date="2025-05-10"
          location="UB Theatre"
          image="https://unsplash.com/photos/a-crowd-of-people-standing-outside-of-a-theater-g879RZ9eeYE"
        />
         <EventCard
          title="Jazz Night"
          date="2025-05-10"
          location="UB Theatre"
          image="https://unsplash.com/photos/a-crowd-of-people-standing-outside-of-a-theater-g879RZ9eeYE"
        />

      </div>
    </div>
  );
};

export default EventList;
