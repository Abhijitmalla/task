import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar } from 'lucide-react';

const data = [
  { name: '01', orders: 0, customers: 0 },
  { name: '02', orders: 0, customers: 0 },
  { name: '03', orders: 0, customers: 0 },
  { name: '04', orders: 0, customers: 0 },
  { name: '05', orders: 0, customers: 0 },
  { name: '06', orders: 0, customers: 0 },
  { name: '07', orders: 0, customers: 0 },
  { name: '08', orders: 0, customers: 0 },
  { name: '09', orders: 0, customers: 0 },
  { name: '10', orders: 0, customers: 0 },
  { name: '11', orders: 0, customers: 0 },
  { name: '12', orders: 0, customers: 0 },
  { name: '13', orders: 0, customers: 0 },
  { name: '14', orders: 0, customers: 0 },
  { name: '15', orders: 0, customers: 0 },
  { name: '16', orders: 0, customers: 0 },
  { name: '17', orders: 0, customers: 0 },
  { name: '18', orders: 0, customers: 0 },
  { name: '19', orders: 0, customers: 0 },
  { name: '20', orders: 0, customers: 0 },
  { name: '21', orders: 0, customers: 0 },
  { name: '22', orders: 0, customers: 0 },
  { name: '23', orders: 0, customers: 0 },
  { name: '24', orders: 0, customers: 0 },
  { name: '25', orders: 0, customers: 0 },
  { name: '26', orders: 0, customers: 0 },
  { name: '27', orders: 0, customers: 0 },
  { name: '28', orders: 0, customers: 0 },
];

const SalesChart = () => {
  return (
    <div className="bg-white rounded border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <div className="flex items-center text-gray-700 font-medium">
          <Calendar size={18} className="mr-2 text-gray-500" />
          Sales Analytics
        </div>
        <button className="text-gray-500 border border-gray-200 bg-white px-2 py-1 rounded text-sm hover:bg-gray-50">
          <Calendar size={14} className="inline mr-1" />
          Month
        </button>
      </div>
      <div className="p-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{fontSize: 10}} tickMargin={10} axisLine={false} tickLine={false} />
            <YAxis tick={{fontSize: 10}} axisLine={false} tickLine={false} domain={[-1, 1]} tickCount={5} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} iconType="rect" />
            <Line type="monotone" dataKey="orders" name="Orders" stroke="#c0d6eb" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="customers" name="Customers" stroke="#1e91cf" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
