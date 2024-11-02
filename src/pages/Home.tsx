import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const sports = [
  {
    id: 1,
    name: 'Tennis',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800&h=400',
    price: 25,
  },
  {
    id: 2,
    name: 'Basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800&h=400',
    price: 20,
  },
  {
    id: 3,
    name: 'Swimming',
    image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80&w=800&h=400',
    price: 15,
  },
  {
    id: 4,
    name: 'Yoga',
    image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=800&h=400',
    price: 18,
  },
];

function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Sports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport) => (
            <Link
              key={sport.id}
              to={`/sport/${sport.id}`}
              className="group relative bg-surface rounded-lg overflow-hidden hover:bg-surface/80 transition"
            >
              <div className="aspect-video relative">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="absolute bottom-4 right-4 p-3 rounded-full bg-primary text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Play className="w-6 h-6 fill-current" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{sport.name}</h3>
                <p className="text-secondary text-sm">From ${sport.price}/hour</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((facility) => (
            <div
              key={facility}
              className="bg-surface rounded-lg p-6 hover:bg-surface/80 transition cursor-pointer"
            >
              <h3 className="font-semibold mb-2">Sports Complex {facility}</h3>
              <p className="text-secondary text-sm mb-4">
                Professional facilities with expert trainers
              </p>
              <button className="w-full py-2 rounded-full bg-primary hover:bg-accent transition text-sm">
                View Schedule
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;