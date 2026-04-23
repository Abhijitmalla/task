import React from 'react';
import { Plus, Copy, Trash2, Pencil, ChevronDown, Filter as FilterIcon } from 'lucide-react';

const Products = () => {
  const products = [
    { 
      id: 1,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=50&h=50&fit=crop',
      name: '4-Door French-Door Refrigerator',
      status: 'Enabled',
      model: 'Product 1',
      price: '$70,000.00',
      quantity: 938,
      quantityColor: 'bg-green-500'
    },
    { 
      id: 2,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=50&h=50&fit=crop',
      name: 'Automatic Espresso Machine + Frother',
      status: 'Enabled',
      model: 'Product 19',
      price: '$89,000.00',
      quantity: 1000,
      quantityColor: 'bg-green-500'
    },
    { 
      id: 3,
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb9f?w=50&h=50&fit=crop',
      name: 'Capacity Smart Front Load Electric Dryer',
      status: 'Enabled',
      model: 'Product 4',
      price: '$89,000.00',
      oldPrice: '$20.00',
      quantity: 999,
      quantityColor: 'bg-green-500'
    },
    { 
      id: 4,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=50&h=50&fit=crop',
      name: 'Counter-Depth French-Door',
      status: 'Enabled',
      model: 'Product 2',
      price: '$27,900.99',
      quantity: 999,
      quantityColor: 'bg-green-500'
    },
    { 
      id: 5,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=50&h=50&fit=crop',
      name: 'Counter-Depth French-Door Refrigerator',
      status: 'Enabled',
      model: 'Product 15',
      price: '$450,000.00',
      quantity: 978,
      quantityColor: 'bg-green-500'
    },
    { 
      id: 6,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=50&h=50&fit=crop',
      name: 'Depth French-Door Refrigerator',
      status: 'Enabled',
      model: 'Product 7',
      price: '$10,000.00',
      quantity: 999,
      quantityColor: 'bg-green-500'
    },
    { 
      id: 7,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=50&h=50&fit=crop',
      name: 'French-Door Refrigerator',
      status: 'Enabled',
      model: 'SAM1',
      price: '$19,900.99',
      quantity: 0,
      quantityColor: 'bg-orange-500'
    }
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-full">
      {/* Breadcrumbs & Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-800">Products</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Catalog</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Products</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1e91cf] text-white p-2 rounded hover:bg-[#197bb0] transition-colors shadow-sm" title="Add New">
            <Plus size={18} />
          </button>
          <button className="bg-[#5bc0de] text-white p-2 rounded hover:bg-[#31b0d5] transition-colors shadow-sm" title="Copy">
            <Copy size={18} />
          </button>
          <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors shadow-sm" title="Delete">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Product Table */}
        <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
            <span className="text-gray-600">☰</span>
            <h3 className="text-[15px] font-semibold text-gray-700 uppercase tracking-tight">Product List</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-[#555]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-left">
                  <th className="px-4 py-3 w-10">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Image</th>
                  <th className="px-4 py-3 font-bold text-gray-700 cursor-pointer hover:text-[#1e91cf] transition-colors">
                    Product Name <span className="inline-block translate-y-[-1px]">^</span>
                  </th>
                  <th className="px-4 py-3 font-bold text-gray-700">Model</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-right">Price</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Quantity</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <img src={p.image} alt={p.name} className="w-10 h-10 object-cover mx-auto border border-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-600">{p.name}</div>
                      <div className="text-[10px] text-green-500 font-bold uppercase">{p.status}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{p.model}</td>
                    <td className="px-4 py-3 text-right">
                      {p.oldPrice && <div className="text-[10px] text-red-500 line-through">{p.oldPrice}</div>}
                      <div className="text-gray-600">{p.price}</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`${p.quantityColor} text-white px-2 py-0.5 rounded text-[11px] font-bold`}>
                        {p.quantity}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end items-center gap-1">
                        <button className="bg-[#1e91cf] text-white p-1.5 rounded-l hover:bg-[#197bb0] transition-colors shadow-sm">
                          <Pencil size={14} />
                        </button>
                        <button className="bg-[#1e91cf] text-white p-1.5 rounded-r border-l border-white/20 hover:bg-[#197bb0] transition-colors shadow-sm">
                          <ChevronDown size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-right text-xs text-gray-400">
            Showing 1 to 7 of 7 (1 Pages)
          </div>
        </div>

        {/* Filter Sidebar */}
        <div className="lg:w-80 bg-white border border-gray-200 shadow-sm rounded-sm self-start">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
            <FilterIcon size={16} className="text-gray-600" />
            <h3 className="text-[15px] font-semibold text-gray-700 uppercase tracking-tight">Filter</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Product Name</label>
              <input 
                type="text" 
                placeholder="Product Name"
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Model</label>
              <input 
                type="text" 
                placeholder="Model"
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Price</label>
              <input 
                type="text" 
                placeholder="Price"
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Quantity</label>
              <input 
                type="text" 
                placeholder="Quantity"
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
              <select className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white">
                <option value=""></option>
                <option value="1">Enabled</option>
                <option value="0">Disabled</option>
              </select>
            </div>
            <div className="pt-2 text-right">
              <button className="bg-[#1e2836] text-white px-4 py-2 rounded text-sm hover:bg-[#2d3a4b] transition-colors flex items-center gap-2 ml-auto">
                <FilterIcon size={14} /> Filter
              </button>
            </div>
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

export default Products;
