import React from 'react';
import { Save, RotateCcw } from 'lucide-react';

const Attributes = () => {
  return (
    <div className="p-6 bg-[#f5f5f5] min-h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-800">Attributes</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Attributes</span>
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

      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
          <span className="text-gray-600">✎</span>
          <h3 className="text-[15px] font-semibold text-gray-700 uppercase">Add Attribute</h3>
        </div>

        <div className="p-6 space-y-6 max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              <span className="text-red-500 mr-1">*</span>Attribute Name
            </label>
            <div className="flex-1 flex gap-1">
              <div className="bg-gray-100 border border-gray-300 px-2 py-2 flex items-center justify-center">
                <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-4" />
              </div>
              <input 
                type="text" 
                placeholder="Attribute Name"
                className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Attribute Group
            </label>
            <select className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white">
              <option value=""> --- Please Select --- </option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
              Sort Order
            </label>
            <input 
              type="number" 
              defaultValue="0"
              className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        <p>OpenCart © 2009-2025 All Rights Reserved.</p>
        <p>Version 4.0.1.1</p>
      </div>
    </div>
  );
};

export default Attributes;
