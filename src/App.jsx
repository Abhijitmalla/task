import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import Installer from './components/Installer';
import ExtensionsList from './components/ExtensionsList';
import StoreFront from './components/StoreFront';
import Register from './components/Register';
import Store from './components/Store';
import Layouts from './components/Layouts';
import ThemeEditor from './components/ThemeEditor';
import Banners from './components/Banners';
import Stores from './components/Stores';
import Settings from './components/Settings';
import Categories from './components/Categories';
import Attributes from './components/Attributes';
import AttributeGroups from './components/AttributeGroups';
import Options from './components/Options';
import Manufacturers from './components/Manufacturers';
import Products from './components/Products';
import ComingSoon from './components/ComingSoon';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const AdminLayout = ({ children }) => (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans text-gray-800">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Navbar isSidebarOpen={isSidebarOpen} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-1 overflow-y-auto mt-16 pb-12 bg-opencart-bg">
          {children}
        </main>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<StoreFront isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/store" element={<Store />} />

        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/marketplace" element={<AdminLayout><Marketplace /></AdminLayout>} />
        <Route path="/installer" element={<AdminLayout><Installer /></AdminLayout>} />
        <Route path="/extensions" element={<AdminLayout><ExtensionsList /></AdminLayout>} />
        <Route path="/layouts" element={<AdminLayout><Layouts /></AdminLayout>} />
        <Route path="/theme-editor" element={<AdminLayout><ThemeEditor /></AdminLayout>} />
        <Route path="/banners" element={<AdminLayout><Banners /></AdminLayout>} />
        <Route path="/stores" element={<AdminLayout><Stores /></AdminLayout>} />
        <Route path="/setting" element={<AdminLayout><Settings /></AdminLayout>} />
        <Route path="/categories" element={<AdminLayout><Categories /></AdminLayout>} />
        <Route path="/attributes" element={<AdminLayout><Attributes /></AdminLayout>} />
        <Route path="/attribute-groups" element={<AdminLayout><AttributeGroups /></AdminLayout>} />
        <Route path="/options" element={<AdminLayout><Options /></AdminLayout>} />
        <Route path="/manufacturers" element={<AdminLayout><Manufacturers /></AdminLayout>} />
        <Route path="/products" element={<AdminLayout><Products /></AdminLayout>} />
        
        {/* Placeholder Routes */}
        <Route path="/subscription-plans" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/filters" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/downloads" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/reviews" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/information" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/startup" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/events" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/cron-jobs" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/language-editor" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/seo-url" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/sales" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/customers" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/system" element={<AdminLayout><ComingSoon /></AdminLayout>} />
        <Route path="/reports" element={<AdminLayout><ComingSoon /></AdminLayout>} />

        {/* Catch-all redirect to home or storefront */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
