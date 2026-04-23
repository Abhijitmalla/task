import React from 'react';
import { ChevronRight, Info } from 'lucide-react';

const ThemeEditor = () => {
  const templates = [
    'cart.twig', 'cart_list.twig', 'checkout.twig', 'confirm.twig', 'payment_address.twig', 'payment_method.twig', 'register.twig', 'shipping_address.twig', 'shipping_method.twig', 'voucher.twig'
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-full">
      {/* Breadcrumbs & Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium text-gray-800">Theme Editor</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Theme Editor</span>
          </div>
        </div>
      </div>

      {/* Info Alert */}
      <div className="bg-[#d9edf7] border border-[#bce8f1] text-[#31708f] p-4 rounded-sm flex items-start gap-3 mb-6 text-[13px]">
        <Info size={18} className="mt-0.5 shrink-0" />
        <p>The theme editor uses the template language Twig. You can read about <a href="#" className="underline font-bold">Twig syntax here</a>.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar: Selectors */}
        <div className="lg:col-span-3 space-y-6">
          {/* Choose Store */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm">
             <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
               <h3 className="text-sm font-semibold text-gray-700">Choose your store</h3>
             </div>
             <div className="p-4">
               <select className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e91cf] bg-white rounded-sm">
                 <option>Default</option>
               </select>
             </div>
          </div>

          {/* Choose Template */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
             <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
               <h3 className="text-sm font-semibold text-gray-700">Choose a template</h3>
             </div>
             <div className="divide-y divide-gray-100">
               {templates.map((tmpl, i) => (
                 <a key={i} href="#" className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 text-[13px] text-gray-600 group transition-colors">
                   <span>{tmpl}</span>
                   <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-600" />
                 </a>
               ))}
               <a href="#" className="flex items-center justify-between px-4 py-2.5 text-[13px] text-gray-400 font-medium">
                 Back
               </a>
             </div>
          </div>
        </div>

        {/* Right Content: Theme History */}
        <div className="lg:col-span-9">
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm">
             <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
               <span className="text-gray-600">☰</span>
               <h3 className="text-[15px] font-semibold text-gray-700 uppercase tracking-tight">Theme History</h3>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-sm">
                 <thead>
                   <tr className="bg-gray-50 border-b border-gray-200 text-left">
                     <th className="px-4 py-3 font-bold text-gray-700">Store</th>
                     <th className="px-4 py-3 font-bold text-gray-700">Route</th>
                     <th className="px-4 py-3 font-bold text-gray-700">Date Added</th>
                     <th className="px-4 py-3 font-bold text-gray-700 text-right">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td colSpan="4" className="px-4 py-8 text-center text-gray-500 italic">No results!</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-right text-xs text-gray-500">
               Showing 0 to 0 of 0 (0 Pages)
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeEditor;
