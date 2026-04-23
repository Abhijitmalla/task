import React from 'react';
import { Puzzle, Upload, Plus, Trash2 } from 'lucide-react';

const Installer = () => {
  const installedExtensions = [
    {
      id: 1,
      name: 'OpenCart Default Extensions',
      version: '1.0',
      dateAdded: '29/08/2020',
      actionType: 'warning' // yellow button
    },
    {
      id: 2,
      name: 'OpenCart Language Example',
      version: '1.0',
      dateAdded: '19/02/2025',
      actionType: 'success' // green button
    },
    {
      id: 3,
      name: 'OpenCart Payment Example',
      version: '1.0',
      dateAdded: '19/02/2025',
      actionType: 'success'
    },
    {
      id: 4,
      name: 'OpenCart Theme Example',
      version: '1.0',
      dateAdded: '19/02/2025',
      actionType: 'success'
    }
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline">
          <h1 className="text-3xl font-light text-gray-600 mr-4">Extension Installer</h1>
          <div className="text-sm text-gray-500">
            <span className="hover:text-blue-500 cursor-pointer">Home</span> 
            <span className="mx-2">&gt;</span> 
            <span className="text-blue-500">Extension Installer</span>
          </div>
        </div>
        <div>
          <button className="bg-[#1e91cf] hover:bg-[#1678b0] text-white p-2 rounded shadow-sm" title="Upload">
            <Upload size={16} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm">
        {/* Panel Heading */}
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center">
          <Puzzle className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-gray-700 font-medium">Extension Installer</h2>
        </div>

        {/* Panel Body */}
        <div className="p-6">
          
          {/* Install Progress */}
          <fieldset className="border border-gray-200 p-4 mb-6 rounded-sm">
            <legend className="text-xl font-light text-gray-700 px-2">Install Progress</legend>
            <div className="flex items-center mt-2 mb-4">
              <label className="w-1/4 text-right pr-4 font-bold text-gray-700 text-sm">Progress</label>
              <div className="w-3/4">
                <div className="w-full bg-gray-200 h-6 rounded-sm"></div>
              </div>
            </div>
          </fieldset>

          {/* Installed Extensions */}
          <fieldset className="border border-gray-200 p-4 rounded-sm">
            <legend className="text-xl font-light text-gray-700 px-2">Installed Extensions</legend>
            
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left border-b border-gray-200">
                    <th className="p-3 font-bold text-[#1e91cf] border-r border-gray-200 w-1/2">Extension Name <span className="text-xs ml-1">^</span></th>
                    <th className="p-3 font-bold text-[#1e91cf] border-r border-gray-200">Version</th>
                    <th className="p-3 font-bold text-[#1e91cf] border-r border-gray-200">Date Added</th>
                    <th className="p-3 font-bold text-gray-800 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {installedExtensions.map((ext, idx) => (
                    <tr key={ext.id} className={`border-b border-gray-200 ${idx % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="p-3 text-[#1e91cf] border-r border-gray-200">{ext.name}</td>
                      <td className="p-3 text-gray-700 border-r border-gray-200">{ext.version}</td>
                      <td className="p-3 text-gray-700 border-r border-gray-200">{ext.dateAdded}</td>
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-1">
                          {ext.actionType === 'warning' ? (
                            <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white p-1.5 rounded shadow-sm">
                              <Plus size={14} />
                            </button>
                          ) : (
                            <button className="bg-[#8fbb6c] hover:bg-[#7a9e5c] text-white p-1.5 rounded shadow-sm">
                              <Plus size={14} />
                            </button>
                          )}
                          <button className="bg-[#f56b6b] hover:bg-[#e25353] text-white p-1.5 rounded shadow-sm">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Footer */}
            <div className="mt-4 text-right text-gray-500 text-sm">
              Showing 1 to 4 of 4 (1 Pages)
            </div>
          </fieldset>

        </div>
      </div>
    </div>
  );
};

export default Installer;
