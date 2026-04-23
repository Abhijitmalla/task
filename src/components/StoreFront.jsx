import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StoreFront = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col text-[#444]">
      {/* Navigation Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-3xl font-bold flex items-center gap-1 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className="text-[#23a1d1]">open</span>cart<span className="text-gray-500">..</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-wider text-gray-600">
          <a href="#" className="hover:text-[#23a1d1] transition-colors">Features</a>
          <a href="#" className="hover:text-[#23a1d1] transition-colors">Demo</a>
          <a href="#" className="hover:text-[#23a1d1] transition-colors">Marketplace</a>
          <a href="#" className="hover:text-[#23a1d1] transition-colors">Blog</a>
          <a href="#" className="hover:text-[#23a1d1] transition-colors">Download</a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); navigate('/store'); }}
            className="hover:text-[#23a1d1] transition-colors font-bold text-[#23a1d1]"
          >
            Mr Web
          </a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#23a1d1] transition-colors">
            Resources <ChevronDown size={14} />
          </div>
        </nav>

        {/* Auth Buttons / Profile */}
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => navigate('/register')}
                className="text-[13px] font-semibold uppercase tracking-wider text-[#23a1d1] hover:text-[#1f90bc] transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="text-[13px] font-semibold uppercase tracking-wider bg-[#23a1d1] text-white px-8 py-2.5 rounded-sm hover:bg-[#1f90bc] transition-all shadow-md"
              >
                Register
              </button>
            </>
          ) : (
            <div className="relative">
              <div 
                className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:text-[#23a1d1] transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-[#23a1d1] flex items-center justify-center text-white">
                  <span className="text-[10px]">JD</span>
                </div>
                <span className="hidden sm:block">John Doe</span>
                <ChevronDown size={14} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 shadow-xl rounded-sm py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button 
                    onClick={() => {
                      navigate('/dashboard');
                      setIsProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#23a1d1] transition-colors uppercase tracking-wider"
                  >
                    Dashboard
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button 
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[13px] font-semibold text-red-500 hover:bg-gray-50 transition-colors uppercase tracking-wider"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#23a1d1] text-white overflow-hidden py-16 lg:py-32">
        {/* Background Gradients/Patterns */}
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full -mr-40 -mt-40 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full -ml-40 -mb-40 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Hero Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              The best FREE and open-source eCommerce platform
            </h1>
            <p className="text-xl lg:text-2xl text-blue-50 max-w-2xl">
              Everything you need to create, scale and run your business
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex flex-col items-center">
                <button className="bg-[#8ecb20] text-white px-10 py-5 text-lg font-bold uppercase tracking-wider rounded-sm hover:bg-[#7db41c] transition-all shadow-lg w-full sm:w-auto">
                  7 Day Free Trial
                </button>
                <a href="#" className="mt-4 text-sm font-medium border-b border-white/50 hover:border-white transition-all">View Demo</a>
              </div>

              <div className="flex flex-col items-center">
                <button className="bg-transparent border-2 border-white/50 text-white px-10 py-5 text-lg font-bold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-all w-full sm:w-auto">
                  Free Download
                </button>
                <a href="#" className="mt-4 text-sm font-medium border-b border-white/50 hover:border-white transition-all">View Demo</a>
              </div>
            </div>
          </div>

          {/* Device Mockups */}
          <div className="flex-1 relative group">
            <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
              <img 
                src="/opencart_hero_mockup.png" 
                alt="OpenCart Dashboard Mockup" 
                className="w-full drop-shadow-2xl rounded-xl"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#1e2a33]/80 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-[#1e2a33] transition-all group/play">
                  <Play size={32} fill="white" className="ml-1" />
                </div>
              </div>
            </div>
            
            {/* Floating UI Elements (Decorative) */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/20 backdrop-blur-md rounded-lg -z-10 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8ecb20]/40 backdrop-blur-md rounded-lg -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Under-Hero text */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-semibold text-gray-600">
            Simple to start. Easy to run.
          </p>
        </div>
      </section>

      {/* Footer (Simplified for landing) */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <div className="flex justify-center gap-8 mb-8 text-gray-500 font-medium">
             <a href="#" className="hover:text-[#23a1d1]">Privacy Policy</a>
             <a href="#" className="hover:text-[#23a1d1]">Terms & Conditions</a>
             <a href="#" className="hover:text-[#23a1d1]">Contact Us</a>
          </div>
          <p>© 2025 OpenCart.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StoreFront;
