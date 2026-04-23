import React, { useState } from 'react';
import { Save, RotateCcw } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const tabs = ['General', 'Store', 'Local', 'Option', 'Image', 'Mail', 'Server'];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-full">
      {/* Breadcrumbs & Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-800">Settings</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Stores</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Settings</span>
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
          <h3 className="text-[15px] font-semibold text-gray-700 uppercase tracking-tight">Edit Setting</h3>
        </div>

        <div className="p-0">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50/50">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab 
                  ? 'bg-white border-x border-t border-gray-200 -mb-[1px] text-[#23a1d1]' 
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-8 max-w-5xl">
            {/* Meta Title */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
                <span className="text-red-500 mr-1">*</span>Meta Title
              </label>
              <input 
                type="text" 
                defaultValue="Housewares"
                className="flex-1 border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#23a1d1] transition-all bg-gray-50/30"
              />
            </div>

            {/* Meta Tag Description */}
            <div className="flex flex-col md:flex-row gap-6">
              <label className="md:w-64 text-sm font-bold text-gray-700 text-right pt-2">
                Meta Tag Description
              </label>
              <textarea 
                rows="4"
                defaultValue="Product Store"
                className="flex-1 border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#23a1d1] transition-all bg-gray-50/30 resize-none"
              />
            </div>

            {/* Meta Tag Keywords */}
            <div className="flex flex-col md:flex-row gap-6">
              <label className="md:w-64 text-sm font-bold text-gray-700 text-right pt-2">
                Meta Tag Keywords
              </label>
              <textarea 
                rows="4"
                defaultValue="Meta Tag Keywords"
                className="flex-1 border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#23a1d1] transition-all bg-gray-50/30 resize-none"
              />
            </div>

            {/* Store Logo Placeholder */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
               <label className="md:w-64 text-sm font-bold text-gray-700 text-right">
                 Store Logo
               </label>
               <div className="flex-1 flex flex-col items-start gap-3">
                 <div className="text-4xl font-black text-[#00c4a0] italic tracking-tighter" style={{fontFamily: 'sans-serif'}}>
                   Household
                 </div>
                 <div className="flex gap-2">
                   <button className="bg-[#1e91cf] text-white px-3 py-1.5 text-xs rounded hover:bg-[#197bb0] transition-colors flex items-center gap-1">
                     ✎ Edit
                   </button>
                   <button className="bg-[#e3503e] text-white px-3 py-1.5 text-xs rounded hover:bg-[#d43f3a] transition-colors flex items-center gap-1">
                     🗑 Clear
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
