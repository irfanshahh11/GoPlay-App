import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight, Shield, Calendar, Users } from 'lucide-react';

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="px-8 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-white">GoPlay</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-full bg-primary hover:bg-accent transition text-white"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl font-bold text-white leading-tight">
                  Book Your Next{' '}
                  <span className="text-primary">Sports Adventure</span> With
                  Ease
                </h1>
                <p className="text-xl text-secondary">
                  Access premium sports facilities, schedule games, and connect
                  with fellow sports enthusiasts—all in one place.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/signup"
                    className="px-8 py-3 rounded-full bg-primary hover:bg-accent transition text-white font-semibold inline-flex items-center gap-2"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Sports Facility"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose GoPlay?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-background">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Easy Scheduling
                </h3>
                <p className="text-secondary">
                  Book your favorite sports facilities with just a few clicks
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Secure Payments
                </h3>
                <p className="text-secondary">
                  Safe and secure payment processing for all bookings
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Community
                </h3>
                <p className="text-secondary">
                  Connect with other sports enthusiasts in your area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-white">
              Ready to Start Your Sports Journey?
            </h2>
            <p className="text-xl text-secondary">
              Join thousands of sports enthusiasts who have already discovered
              the easiest way to book sports facilities.
            </p>
            <Link
              to="/signup"
              className="px-8 py-3 rounded-full bg-primary hover:bg-accent transition text-white font-semibold inline-flex items-center gap-2"
            >
              Sign Up Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-primary" />
              <span className="text-white font-semibold">GoPlay</span>
            </div>
            <p className="text-secondary">
              © 2024 GoPlay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
