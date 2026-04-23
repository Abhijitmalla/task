import React from 'react';
import { Settings, ShoppingCart, CreditCard, Users, UsersRound } from 'lucide-react';
import KPICard from './KPICard';
import SalesChart from './SalesChart';
import WorldMap from './WorldMap';

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#e5e5e5] min-h-[calc(100vh-64px)]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-light text-gray-700 inline-block align-middle mr-4">Dashboard</h1>
          <div className="inline-block text-sm text-gray-500 align-middle">
            <span className="text-gray-400">Home</span> <span className="mx-1">&gt;</span> <span className="text-[#1e91cf]">Dashboard</span>
          </div>
        </div>
        <button className="bg-[#1e91cf] text-white p-2 rounded shadow-sm hover:bg-[#1978ab] transition-colors">
          <Settings size={20} />
        </button>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard 
          title="TOTAL ORDERS" 
          percentage="0%" 
          value="0" 
          icon={ShoppingCart} 
        />
        <KPICard 
          title="TOTAL SALES" 
          percentage="0%" 
          value="0" 
          icon={CreditCard} 
        />
        <KPICard 
          title="TOTAL CUSTOMERS" 
          percentage="0%" 
          value="0" 
          icon={Users} 
        />
        <KPICard 
          title="PEOPLE ONLINE" 
          percentage="0%" 
          value="0" 
          icon={UsersRound} 
        />
      </div>

      {/* Map and Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 xl:col-span-7">
          <WorldMap />
        </div>
        <div className="lg:col-span-6 xl:col-span-5">
          <SalesChart />
        </div>
      </div>
      
      {/* Recent Activity Table Placeholder (just matching the bottom edge of image) */}
      <div className="mt-6 bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center text-gray-700 font-medium">
             <ShoppingCart size={18} className="mr-2 text-gray-500" />
             Latest Orders
          </div>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm text-gray-600">
             <thead>
               <tr className="border-b border-gray-200 bg-gray-50">
                 <th className="p-3 font-medium text-gray-700">Order ID</th>
                 <th className="p-3 font-medium text-gray-700">Customer</th>
                 <th className="p-3 font-medium text-gray-700">Status</th>
                 <th className="p-3 font-medium text-gray-700">Date Added</th>
                 <th className="p-3 font-medium text-gray-700 text-right">Total</th>
                 <th className="p-3 font-medium text-gray-700 text-center">Action</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td colSpan="6" className="p-6 text-center text-gray-500 border-b border-gray-100">No results!</td>
               </tr>
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
