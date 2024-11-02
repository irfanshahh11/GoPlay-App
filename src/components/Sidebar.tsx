import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Calendar, Search, Heart, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="w-64 bg-surface p-6">
      <nav className="space-y-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-4 text-secondary hover:text-white transition-colors',
              isActive && 'text-white'
            )
          }
        >
          <Home className="w-6 h-6" />
          <span>Discover</span>
        </NavLink>
        <NavLink
          to="/dashboard/search"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-4 text-secondary hover:text-white transition-colors',
              isActive && 'text-white'
            )
          }
        >
          <Search className="w-6 h-6" />
          <span>Search</span>
        </NavLink>
        <NavLink
          to="/dashboard/bookings"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-4 text-secondary hover:text-white transition-colors',
              isActive && 'text-white'
            )
          }
        >
          <Calendar className="w-6 h-6" />
          <span>My Bookings</span>
        </NavLink>
        <NavLink
          to="/dashboard/favorites"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-4 text-secondary hover:text-white transition-colors',
              isActive && 'text-white'
            )
          }
        >
          <Heart className="w-6 h-6" />
          <span>Favorites</span>
        </NavLink>
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 text-secondary hover:text-white transition-colors w-full mt-auto"
        >
          <LogOut className="w-6 h-6" />
          <span>Log Out</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;