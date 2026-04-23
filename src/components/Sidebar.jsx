import React, { useState } from 'react';
import { 
  Home, 
  Tags, 
  Puzzle, 
  Monitor, 
  ShoppingCart, 
  Users, 
  Share2, 
  Settings, 
  BarChart2,
  ChevronRight,
  Menu
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    { name: 'Dashboard', icon: Home, active: true },
    { 
      name: 'Catalog', 
      icon: Tags, 
      hasArrow: true, 
      subItems: [
        { name: 'Categories' },
        { name: 'Products' },
        { name: 'Subscription Plans' },
        { name: 'Filters' },
        { 
          name: 'Attributes', 
          hasArrow: true,
          subItems: [
            { name: 'Attributes' },
            { name: 'Attribute Groups' }
          ]
        },
        { name: 'Options' },
        { name: 'Manufacturers' },
        { name: 'Downloads' },
        { name: 'Reviews' },
        { name: 'Information' }
      ] 
    },
    { name: 'Extensions', icon: Puzzle, hasArrow: true, subItems: [{ name: 'Marketplace' }, { name: 'Installer' }, { name: 'Extensions' }, { name: 'Startup' }, { name: 'Events' }, { name: 'Cron Jobs' }] },
    { name: 'Design', icon: Monitor, hasArrow: true, subItems: [{ name: 'Layouts' }, { name: 'Theme Editor' }, { name: 'Language Editor' }, { name: 'Banners' }, { name: 'SEO URL' }] },
    { name: 'Sales', icon: ShoppingCart, hasArrow: true },
    { name: 'Customers', icon: Users, hasArrow: true },
    { name: 'Marketing', icon: Share2, hasArrow: true, subItems: [{ name: 'Stores' }, { name: 'Setting' }] },
    { name: 'System', icon: Settings, hasArrow: true },
    { name: 'Reports', icon: BarChart2, hasArrow: true },
  ];

  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleSubDropdown = (name) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
  };

  return (
    <div className={`flex flex-col bg-[#232f3e] text-[#bbbbbb] h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} overflow-hidden fixed left-0 top-0 z-20`}>
      {/* Logo Banner */}
      <div className="flex items-center justify-between px-4 py-4 bg-[#1e2836] border-b border-[#2d3a4b]">
        {isOpen && (
          <div 
            className="text-white text-xl font-bold flex items-center gap-1 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-[#1e91cf]">open</span>cart<span className="text-gray-500">..</span>
          </div>
        )}
        <button className="text-gray-400 hover:text-white" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
      </div>

      {/* Nav Menu */}
      <div className="flex-1 overflow-y-auto pt-2 pb-4">
        {isOpen && <div className="px-4 py-2 text-xs text-gray-500 uppercase font-semibold">Navigation</div>}
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (item.subItems) {
                    toggleDropdown(item.name);
                  } else if (item.name === 'Dashboard') {
                    navigate('/dashboard');
                  }
                }}
                className={`flex items-center px-4 py-3 hover:bg-[#2d3a4b] hover:text-white transition-colors
                  ${location.pathname === '/' + item.name.toLowerCase() ? 'bg-[#2d3a4b] text-white border-l-4 border-[#1e91cf]' : 'border-l-4 border-transparent'}`}
              >
                <item.icon size={20} className={location.pathname === '/' + item.name.toLowerCase() ? 'text-[#1e91cf]' : 'text-gray-400'} />
                {isOpen && (
                  <>
                    <span className="ml-3 flex-1 text-sm">{item.name}</span>
                    {item.hasArrow && <ChevronRight size={16} className={`text-gray-500 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-90' : ''}`} />}
                  </>
                )}
              </a>
              {isOpen && item.subItems && (
                <div className={`overflow-hidden transition-all duration-300 ${openDropdown === item.name ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <ul className="bg-[#1e2836] py-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            if (subItem.subItems) {
                              toggleSubDropdown(subItem.name);
                            } else {
                              const path = '/' + subItem.name.toLowerCase().replace(/\s+/g, '-');
                              navigate(path);
                            }
                          }}
                          className={`flex items-center px-12 py-2 text-sm transition-colors before:content-['-'] before:mr-2 before:text-gray-600
                            ${location.pathname === '/' + subItem.name.toLowerCase().replace(/\s+/g, '-') ? 'text-white bg-[#2d3a4b]' : 'text-gray-400 hover:text-white hover:bg-[#2d3a4b]'}`}
                        >
                          <span className="flex-1">{subItem.name}</span>
                          {subItem.hasArrow && <ChevronRight size={14} className={`text-gray-500 transition-transform duration-200 ${openSubDropdown === subItem.name ? 'rotate-90' : ''}`} />}
                        </a>
                        {subItem.subItems && (
                          <div className={`overflow-hidden transition-all duration-300 ${openSubDropdown === subItem.name ? 'max-h-32' : 'max-h-0'}`}>
                            <ul className="bg-[#161e29] py-1">
                              {subItem.subItems.map((ssItem, ssIndex) => (
                                <li key={ssIndex}>
                                  <a 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const path = '/' + ssItem.name.toLowerCase().replace(/\s+/g, '-');
                                      navigate(path);
                                    }}
                                    className={`block px-20 py-2 text-xs transition-colors before:content-['-'] before:mr-2 before:text-gray-700
                                      ${location.pathname === '/' + ssItem.name.toLowerCase().replace(/\s+/g, '-') ? 'text-white bg-[#2d3a4b]' : 'text-gray-400 hover:text-white hover:bg-[#2d3a4b]'}`}
                                  >
                                    {ssItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Progress Bars */}
      {isOpen && (
        <div className="p-4 border-t border-[#2d3a4b]">
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Orders Completed</span>
              <span>0%</span>
            </div>
            <div className="w-full bg-[#1e2836] rounded h-1.5">
              <div className="bg-[#1e91cf] h-1.5 rounded" style={{ width: '0%' }}></div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Orders Processing</span>
              <span>0%</span>
            </div>
            <div className="w-full bg-[#1e2836] rounded h-1.5">
              <div className="bg-yellow-500 h-1.5 rounded" style={{ width: '0%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Other Statuses</span>
              <span>0%</span>
            </div>
            <div className="w-full bg-[#1e2836] rounded h-1.5">
              <div className="bg-red-500 h-1.5 rounded" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
