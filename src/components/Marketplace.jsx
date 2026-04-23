import React from 'react';
import { 
  Puzzle, 
  Search, 
  Filter,
  ChevronDown,
  Star,
  StarHalf
} from 'lucide-react';

const Marketplace = () => {
  const extensions = [
    { id: 1, title: 'PayPal Checkout Integration', image: '/images/paypal_checkout_1776907759488.png', price: 'FREE', rating: 5, reviews: 35 },
    { id: 2, title: 'Google Shopping for OpenCart', image: '/images/google_shopping_1776907868045.png', price: 'FREE', rating: 3.5, reviews: 14 },
    { id: 3, title: 'Opayo UK & Ireland (formerly Sage Pay)', image: '/images/opayo_uk_1776907947100.png', price: 'FREE', rating: 0, reviews: 3 },
    { id: 4, title: 'Multivendor Multi Seller/supplier Marketplace', image: '/images/paypal_checkout_1776907759488.png', price: '$38.99', rating: 4, reviews: 26 },
    { id: 5, title: 'SEO PRO SEO URL FIX', image: '/images/google_shopping_1776907868045.png', price: 'FREE', rating: 5, reviews: 112 },
    { id: 6, title: 'Free Shipping Plus', image: '/images/opayo_uk_1776907947100.png', price: 'FREE', rating: 4.5, reviews: 89 },
    { id: 7, title: 'Facebook Login Integration', image: '/images/paypal_checkout_1776907759488.png', price: '$15.00', rating: 4, reviews: 42 },
    { id: 8, title: 'WhatsApp Chat & Share', image: '/images/google_shopping_1776907868045.png', price: '$10.00', rating: 5, reviews: 28 },
    { id: 9, title: 'Stripe Payment Gateway', image: '/images/opayo_uk_1776907947100.png', price: 'FREE', rating: 4.5, reviews: 156 },
    { id: 10, title: 'Mailchimp Integration', image: '/images/paypal_checkout_1776907759488.png', price: 'FREE', rating: 4, reviews: 78 },
    { id: 11, title: 'Live Chat Support', image: '/images/google_shopping_1776907868045.png', price: '$25.00', rating: 5, reviews: 15 },
    { id: 12, title: 'Abandoned Cart Recovery', image: '/images/opayo_uk_1776907947100.png', price: '$49.99', rating: 4.5, reviews: 64 }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="w-4 h-4 fill-current text-gray-800" />);
      } else if (i - 0.5 === rating) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-current text-gray-800" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline">
          <h1 className="text-3xl font-light text-gray-600 mr-4">Extension Marketplace</h1>
          <div className="text-sm text-gray-500">
            <span className="hover:text-blue-500 cursor-pointer">Home</span> 
            <span className="mx-2">&gt;</span> 
            <span className="text-blue-500">Extension Marketplace</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm">
        {/* Panel Heading */}
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center">
          <Puzzle className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-gray-700 font-medium">Extension List</h2>
        </div>

        {/* Panel Body */}
        <div className="p-4">
          
          {/* Top Controls */}
          <div className="mb-6 space-y-4">
            {/* Search Bar */}
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search for extensions and themes" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
                <Filter className="w-5 h-5" />
              </button>
            </div>

            {/* Filters and Sort */}
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">All</button>
                <button className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">Recommended</button>
                <button className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">Free</button>
                <button className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">Paid</button>
                <button className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">Purchased</button>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-1.5 pl-4 pr-10 rounded text-sm focus:outline-none focus:border-blue-500">
                    <option>Date Modified</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-light text-gray-700 mb-4">Featured</h3>

          {/* Extensions Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12 px-2 pb-6">
              {extensions.map((ext) => (
              <div key={ext.id} className="block">
                <div className="border border-gray-200 p-1 mb-3">
                  <a href="#" className="block">
                    <img src={ext.image} alt={ext.title} className="w-full h-auto object-cover aspect-[16/10]" />
                  </a>
                </div>
                <div className="mb-2">
                  <a href="#" className="text-[#1e91cf] hover:text-[#23a1d1] text-[15px]">{ext.title}</a>
                </div>
                <div className="text-gray-800 text-[13px] font-bold mb-2">{ext.price}</div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex space-x-0.5">
                    {renderStars(ext.rating)}
                  </div>
                  <div className="text-[13px] text-gray-600">{ext.reviews} reviews</div>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Marketplace;
