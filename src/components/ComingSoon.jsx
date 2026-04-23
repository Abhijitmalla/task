import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'lucide-react';

const ComingSoon = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace(/-/g, ' ');
  const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-800">{capitalizedPageName}</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{capitalizedPageName}</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden p-12 flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <Layout size={40} className="text-gray-300" />
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{capitalizedPageName}</h2>
        <p className="text-gray-500 text-center max-w-md">
          This module is currently under development. Please check back later for full administrative controls and configuration options.
        </p>
        <div className="mt-8 flex gap-3">
          <div className="h-2 w-2 bg-[#1e91cf] rounded-full animate-bounce"></div>
          <div className="h-2 w-2 bg-[#1e91cf] rounded-full animate-bounce delay-75"></div>
          <div className="h-2 w-2 bg-[#1e91cf] rounded-full animate-bounce delay-150"></div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        <p>OpenCart © 2009-2025 All Rights Reserved.</p>
        <p>Version 4.0.1.1</p>
      </div>
    </div>
  );
};

export default ComingSoon;
