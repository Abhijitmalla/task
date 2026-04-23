import React from 'react';
import { Globe, Plus, Minus } from 'lucide-react';

const WorldMap = () => {
  return (
    <div className="bg-white rounded border border-gray-200 flex flex-col h-full">
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center text-gray-700 font-medium">
          <Globe size={18} className="mr-2 text-gray-500" />
          World Map
        </div>
      </div>
      <div className="p-4 flex-1 relative flex items-center justify-center bg-white min-h-[300px]">
        {/* Map controls */}
        <div className="absolute left-4 top-4 bg-white border border-gray-200 rounded shadow-sm flex flex-col">
          <button className="p-1.5 hover:bg-gray-100 border-b border-gray-200 text-gray-600">
            <Plus size={16} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 text-gray-600">
            <Minus size={16} />
          </button>
        </div>
        
        {/* Simple inline SVG mapping resembling the dashboard's light blue map */}
        <div className="w-full h-full max-w-lg opacity-80 text-blue-300 mx-auto">
          <svg viewBox="0 0 1000 500" fill="currentColor" stroke="white" strokeWidth="1" className="w-full h-full">
            {/* North America */}
            <path d="M150,150 Q100,80 180,60 Q250,50 280,100 Q300,150 250,200 Q200,220 180,250 Q160,250 150,200 Z" />
            <path d="M150,50 Q120,40 160,20 Q190,10 200,40 Z" />
            {/* South America */}
            <path d="M220,280 Q280,270 300,320 Q320,400 290,480 Q250,450 230,350 Z" />
            {/* Europe */}
            <path d="M450,150 Q480,80 550,100 Q550,150 500,180 Q450,180 430,160 Z" />
            {/* Africa */}
            <path d="M450,200 Q500,180 550,220 Q560,280 520,380 Q460,350 430,280 Z" />
            {/* Asia */}
            <path d="M550,100 Q650,20 800,80 Q850,150 750,200 Q680,250 600,200 Q550,180 540,140 Z" />
            {/* Australia */}
            <path d="M750,350 Q800,320 850,380 Q820,450 760,420 Z" />
            {/* Islands */}
            <circle cx="850" cy="250" r="15" />
            <circle cx="870" cy="280" r="10" />
            <circle cx="900" cy="300" r="8" />
            <circle cx="920" cy="350" r="12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
