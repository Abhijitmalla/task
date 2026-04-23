import React from 'react';
import { Plus, Trash2, Pencil, RotateCcw } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'All product', sortOrder: 3 },
    { name: 'Dishwashers', sortOrder: 2 },
    { name: 'Espresso Machines', sortOrder: 4 },
    { name: 'Refrigerators', sortOrder: 0 },
    { name: 'Smart Laundry', sortOrder: 5 }
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-full">
      {/* Breadcrumbs & Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-800">Categories</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Catalog</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Categories</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-gray-600 border border-gray-300 p-2 rounded hover:bg-gray-50 transition-colors shadow-sm" title="Rebuild">
            <RotateCcw size={18} />
          </button>
          <button className="bg-[#1e91cf] text-white p-2 rounded hover:bg-[#197bb0] transition-colors shadow-sm" title="Add New">
            <Plus size={18} />
          </button>
          <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors shadow-sm" title="Delete">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Main Panel */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
          <span className="text-gray-600">☰</span>
          <h3 className="text-[15px] font-semibold text-gray-700 uppercase tracking-tight">Category List</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-[#555]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-left">
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-4 py-3 font-bold text-gray-700 cursor-pointer hover:text-[#1e91cf] transition-colors">
                  Category Name <span className="inline-block translate-y-[-1px]">^</span>
                </th>
                <th className="px-4 py-3 font-bold text-gray-700 text-right">
                  Sort Order
                </th>
                <th className="px-4 py-3 font-bold text-gray-700 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-4 py-3 text-gray-600">{cat.name}</td>
                  <td className="px-4 py-3 text-right text-gray-500">{cat.sortOrder}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="bg-[#1e91cf] text-white p-1.5 rounded hover:bg-[#197bb0] transition-colors shadow-sm" title="Edit">
                      <Pencil size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-right text-xs text-gray-400">
          Showing 1 to 5 of 5 (1 Pages)
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        <p>OpenCart © 2009-2025 All Rights Reserved.</p>
        <p>Version 4.0.1.1</p>
      </div>
    </div>
  );
};

export default Categories;
