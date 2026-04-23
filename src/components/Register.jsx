import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    country: 'Ireland',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header (Simplified) */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div 
            className="text-3xl font-bold flex items-center gap-1 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-[#23a1d1]">open</span>cart<span className="text-gray-500">..</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Left Side: Form */}
        <div className="flex-1 bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b pb-4">Register for OpenCart account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">
                <span className="text-red-500 mr-1">*</span>Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="mrwebopencart"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#23a1d1] transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">
                  <span className="text-red-500 mr-1">*</span>First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="David"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#23a1d1] transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700">
                  <span className="text-red-500 mr-1">*</span>Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Garray"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#23a1d1] transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">
                <span className="text-red-500 mr-1">*</span>E-Mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@mrweb.tv"
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#23a1d1] transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">
                <span className="text-red-500 mr-1">*</span>Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#23a1d1] transition-colors bg-white"
              >
                <option value="Ireland">Ireland</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">
                <span className="text-red-500 mr-1">*</span>Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#23a1d1] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#23a1d1] text-white px-8 py-3 font-semibold hover:bg-[#1f90bc] transition-colors shadow-sm"
            >
              REGISTER
            </button>
          </form>
        </div>

        {/* Right Side: Why join */}
        <div className="w-full md:w-[400px]">
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Why join OpenCart.com?</h3>
            <ul className="space-y-4">
              {[
                "You will be in good hands. More than 350,000+ live stores",
                "You will have access to 13,000+ Modules and themes in the OpenCart Marketplace.",
                "Post questions to the OpenCart Community forum where we have more than 110,000 registered members",
                "Get a free subscription to our newsletter",
                "You can apply for an OpenCart Developer account here."
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 OpenCart.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
