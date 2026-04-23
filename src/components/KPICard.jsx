import React from 'react';

const KPICard = ({ title, percentage, value, icon: Icon, colorClass = "bg-[#279cd8]" }) => {
  // Using a darker tone for the footer
  const footerColorClass = "bg-[#1978ab]";
  
  return (
    <div className={`rounded text-white overflow-hidden shadow-sm flex flex-col ${colorClass}`}>
      <div className="p-4 flex-1">
        <div className="flex justify-between items-center mb-4 text-xs font-semibold uppercase tracking-wider text-blue-100">
          <span>{title}</span>
          <span>{percentage}</span>
        </div>
        <div className="flex justify-between items-center">
          <Icon size={48} className="text-white opacity-90" />
          <span className="text-4xl font-light">{value}</span>
        </div>
      </div>
      <a 
        href="#" 
        className={`px-4 py-2 text-sm font-medium hover:bg-opacity-80 transition-colors flex justify-between items-center ${footerColorClass}`}
      >
        <span className="text-blue-100">View more...</span>
      </a>
    </div>
  );
};

export default KPICard;
