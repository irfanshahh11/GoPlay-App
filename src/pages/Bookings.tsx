import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const bookings = [
  {
    id: 1,
    sport: 'Tennis',
    date: '2024-03-20',
    time: '09:00 AM',
    location: '123 Sports Avenue',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=400&h=200',
  },
  {
    id: 2,
    sport: 'Basketball',
    date: '2024-03-22',
    time: '02:00 PM',
    location: '456 Sports Complex',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400&h=200',
  },
];

function Bookings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Bookings</h1>
      
      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-surface rounded-lg overflow-hidden flex"
          >
            <img
              src={booking.image}
              alt={booking.sport}
              className="w-48 h-32 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">{booking.sport}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-secondary">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Clock className="w-4 h-4" />
                  <span>{booking.time}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary col-span-2">
                  <MapPin className="w-4 h-4" />
                  <span>{booking.location}</span>
                </div>
              </div>
            </div>
            <div className="p-6 flex items-center">
              <button className="px-6 py-2 rounded-full bg-primary hover:bg-accent transition">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {bookings.length === 0 && (
        <div className="text-center py-12 text-secondary">
          <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No bookings found</p>
        </div>
      )}
    </div>
  );
}

export default Bookings;