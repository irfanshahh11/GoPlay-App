import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import SportDetails from './pages/SportDetails';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Dumbbell } from 'lucide-react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard/*"
          element={
            <div className="flex h-screen bg-background text-white">
              <Sidebar />
              <main className="flex-1 overflow-auto">
                <div className="px-8 py-6">
                  <header className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="w-8 h-8 text-primary" />
                      <h1 className="text-2xl font-bold">SportSpot</h1>
                    </div>
                  </header>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/sport/:id" element={<SportDetails />} />
                  </Routes>
                </div>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;