import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, CreditCard, MapPin } from 'lucide-react';

function SportDetails() {
  const { id } = useParams();
  const [selectedTime, setSelectedTime] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const times = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative h-80 rounded-xl overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=1200&h=400"
          alt="Sport facility"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tennis Court Booking</h1>
            <p className="text-secondary">Professional indoor tennis court with equipment rental available</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <MapPin className="w-5 h-5" />
              <span>123 Sports Avenue, City</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <Clock className="w-5 h-5" />
              <span>60 minutes per session</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Select Time</h3>
            <div className="grid grid-cols-3 gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg text-sm ${
                    selectedTime === time
                      ? 'bg-primary text-white'
                      : 'bg-surface hover:bg-surface/80'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-secondary">Date</span>
              <span>Today</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Time</span>
              <span>{selectedTime || 'Not selected'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Duration</span>
              <span>1 hour</span>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$25.00</span>
              </div>
            </div>
          </div>

          {!showPayment ? (
            <button
              onClick={() => setShowPayment(true)}
              disabled={!selectedTime}
              className="w-full py-3 rounded-full bg-primary hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Payment
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-background/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-semibold">Payment Details</span>
                </div>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full bg-background p-2 rounded mb-2 text-white placeholder-secondary"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="bg-background p-2 rounded text-white placeholder-secondary"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="bg-background p-2 rounded text-white placeholder-secondary"
                  />
                </div>
              </div>
              <button className="w-full py-3 rounded-full bg-primary hover:bg-accent transition">
                Pay Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SportDetails;