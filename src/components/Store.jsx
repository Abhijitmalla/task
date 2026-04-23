import React from 'react';
import { Search, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Top Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div 
            className="text-3xl font-bold flex items-center gap-1 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-[#23a1d1]">open</span>cart<span className="text-gray-500">..</span>
          </div>

          {/* Search */}
          <div className="flex w-full md:w-[400px]">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-400"
            />
            <button className="bg-gray-100 border border-l-0 border-gray-300 px-4 py-2 text-gray-500 hover:bg-gray-200">
              <Search size={18} />
            </button>
          </div>

          {/* Cart */}
          <button className="bg-[#222] text-white px-6 py-2.5 flex items-center gap-2 hover:bg-black w-full md:w-auto justify-center">
            <ShoppingCart size={18} />
            <span>0 item(s) - $0.00</span>
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#23a1d1] text-white mb-6">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap text-sm">
            {['Desktops', 'Laptops & Notebooks', 'Components', 'Tablets', 'Software', 'Phones & PDAs', 'Cameras', 'MP3 Players'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="block px-4 py-3 hover:bg-[#1f90bc] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area (Banner) */}
      <main className="container mx-auto px-4 flex-1">
        {/* Banner Carousel Placeholder */}
        <div className="relative bg-gray-100 aspect-[21/9] flex items-center justify-center mb-8 border border-gray-200 overflow-hidden group">
          <div className="absolute left-4 w-10 h-10 bg-black/20 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={24} />
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop" 
            alt="Banner" 
            className="w-full h-full object-cover"
          />

          <div className="absolute right-4 w-10 h-10 bg-black/20 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={24} />
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full cursor-pointer"></span>
          </div>
        </div>

        {/* Brand Carousel Placeholder */}
        <div className="border border-gray-200 py-8 px-4 mb-12 flex justify-between items-center overflow-x-auto relative group">
           <div className="absolute left-0 top-0 bottom-0 w-8 bg-white/80 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={20} className="text-gray-400" />
           </div>
           
           <div className="flex justify-between items-center w-full min-w-[800px] px-8">
             <div className="text-2xl font-bold text-gray-800">HARLEY-DAVIDSON</div>
             <div className="text-2xl font-bold text-blue-600">DELL</div>
             <div className="text-2xl font-bold text-black" style={{fontFamily: 'cursive'}}>Disney</div>
             <div className="text-2xl font-bold text-red-600 italic">Coca-Cola</div>
             <div className="text-xl font-bold text-red-600">BURGER KING</div>
           </div>

           <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/80 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={20} className="text-gray-400" />
           </div>

           <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#303030] text-[#e2e2e2] pt-12 pb-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold mb-4">Information</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Delivery Information</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Customer Service</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Site Map</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Extras</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Brands</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Certificates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specials</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">My Account</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order History</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wish List</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-sm text-gray-400">
            <p>Powered By OpenCart</p>
            <p>Mr Web &copy; 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Store;
