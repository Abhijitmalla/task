import React, { useState, useRef, useEffect } from 'react';
import { Bell, LogOut, User, ChevronDown, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isSidebarOpen, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 fixed top-0 right-0 z-10 transition-all duration-300 ${isSidebarOpen ? 'left-64' : 'left-16'}`}>
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="text-gray-500 hover:text-gray-700 relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#1e91cf] flex items-center justify-center text-white font-bold text-xs">
              JD
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-bold text-gray-700 leading-none">John Doe</p>
              <p className="text-[10px] text-gray-500">Administrator</p>
            </div>
            <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-xl rounded py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-gray-100 mb-2">
                <p className="text-sm font-bold text-gray-800">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
              
              <button 
                onClick={() => {
                  navigate('/store');
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1e91cf] transition-colors"
              >
                <User size={16} />
                Mr Web
              </button>
              
              <button 
                onClick={() => {
                  navigate('/dashboard');
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1e91cf] transition-colors"
              >
                <LayoutDashboard size={16} />
                Your Dashboard
              </button>
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  navigate('/');
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Quick Logout Button */}
        <button 
          onClick={() => {
            setIsLoggedIn(false);
            navigate('/');
          }}
          className="p-2 text-gray-500 hover:text-red-500 transition-colors border-l border-gray-200 pl-4" title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
