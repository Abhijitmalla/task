import React from 'react';
import { Save, RotateCcw } from 'lucide-react';

const Banners = () => {
  return (
    <div className="p-6 bg-[#f5f5f5] min-h-full">
      {/* Breadcrumbs & Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-800">Banner</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Extensions</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Banner</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1e91cf] text-white p-2 rounded hover:bg-[#197bb0] transition-colors shadow-sm" title="Save">
            <Save size={18} />
          </button>
          <button className="bg-white text-gray-600 border border-gray-300 p-2 rounded hover:bg-gray-50 transition-colors shadow-sm" title="Cancel">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Main Panel */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
          <span className="text-gray-600">✎</span>
          <h3 className="text-[15px] font-semibold text-gray-700 uppercase">Edit Banner Module</h3>
        </div>

        <div className="p-6 space-y-6 max-w-4xl">
          {/* Module Name */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              <span className="text-red-500 mr-1">*</span>Module Name
            </label>
            <input 
              type="text" 
              defaultValue="Slideshow"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
            />
          </div>

          {/* Banner Dropdown */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Banner
            </label>
            <select className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white">
              <option>Home Page Slideshow</option>
              <option>Manufacturers</option>
            </select>
          </div>

          {/* Effect Dropdown */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Effect
            </label>
            <select className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white">
              <option>Slide</option>
              <option>Fade</option>
            </select>
          </div>

          {/* Items per Slide */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Items per Slide
            </label>
            <div className="flex-1">
              <input 
                type="number" 
                defaultValue="1"
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
              />
              <p className="text-xs text-gray-400 mt-1 italic">The number of items to show per slide.</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Controls
            </label>
            <select className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Indicators */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Indicators
            </label>
            <select className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Interval */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Interval
            </label>
            <input 
              type="number" 
              defaultValue="5000"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
            />
          </div>

          {/* Width */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              <span className="text-red-500 mr-1">*</span>Width
            </label>
            <input 
              type="number" 
              defaultValue="1140"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
            />
          </div>

          {/* Height */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              <span className="text-red-500 mr-1">*</span>Height
            </label>
            <input 
              type="number" 
              defaultValue="380"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Status
            </label>
            <select className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
