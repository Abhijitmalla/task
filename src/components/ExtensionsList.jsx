import React from 'react';
import { Puzzle, Filter } from 'lucide-react';

const ExtensionsList = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline">
          <h1 className="text-3xl font-light text-gray-600 mr-4">Extensions</h1>
          <div className="text-sm text-gray-500">
            <span className="hover:text-blue-500 cursor-pointer">Home</span> 
            <span className="mx-2">&gt;</span> 
            <span className="text-blue-500">Extensions</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm mb-12">
        {/* Panel Heading */}
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center">
          <Puzzle className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-gray-700 font-medium">Extension List</h2>
        </div>

        {/* Panel Body */}
        <div className="p-6">
          
          <h3 className="text-xl font-light text-gray-700 mb-4">Choose the extension type</h3>
          
          <fieldset className="border border-gray-200 p-4 mb-6 rounded-sm bg-gray-50 flex items-center gap-4">
            <select className="flex-1 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-sm focus:outline-none focus:border-blue-500">
              <option>Analytics (0)</option>
            </select>
            <button className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 px-4 py-2 rounded-sm flex items-center shadow-sm">
              <Filter size={16} className="mr-2" />
              Filter
            </button>
          </fieldset>

          <h3 className="text-2xl font-light text-gray-700 mb-4">Analytics</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 text-left border-b border-gray-200">
                  <th className="p-3 font-bold text-gray-800 border-r border-gray-200 w-1/2">Analytics Name</th>
                  <th className="p-3 font-bold text-gray-800 border-r border-gray-200">Status</th>
                  <th className="p-3 font-bold text-gray-800 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-white">
                  <td colSpan="3" className="p-4 text-center text-gray-500">
                    No results!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-8 pb-4">
        <a href="#" className="text-blue-500 hover:underline">OpenCart</a> &copy; 2009-2025 All Rights Reserved.<br />
        Version 4.0.2.3
      </div>
    </div>
  );
};

export default ExtensionsList;
