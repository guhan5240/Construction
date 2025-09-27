// import React, { useState, useEffect } from 'react';
// import { useLocation, Outlet, useNavigate } from 'react-router-dom';
// import Sidebar from '../components/sidebar/Sidebar'; 

// const AdminDashboard1 = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const pathSegments = location.pathname.split('/').filter(Boolean);
//     const currentTab = pathSegments[pathSegments.length - 1] || 'dashboard'; 
//   }, [location.pathname]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     if (tab === 'dashboard') {
//       navigate('/Admin');
//     } else {
//       navigate(`/Admin/${tab}`);
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
//       <div className="flex-1">
//         <header className="bg-white shadow p-4 flex justify-between md:ml-64">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full md:w-64 border p-2 rounded-lg"
//             />
//             <button className="absolute right-2 top-2 text-gray-500">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117.65 5.65 7.5 7.5 0 0116.65 16.65z" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex items-center gap-2">
//             <img src="https://via.placeholder.com/40" alt="Admin" className="w-10 h-10 rounded-full" />
//             <div>
//               <p className="font-semibold">Admin</p>
//               <p className="text-xs">admin@example.com</p>
//             </div>
//           </div>
//         </header>
//         <main className="p-4 md:ml-64">
//           <Outlet /> 
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard1;

// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import DashboardHome from '../components/DashboardHome/DashboardHome';
// import Products from '../components/products/Products';
// import Customers from '../components/Customers/Customers';
// import Transactions from '../components/transactions/Transactions';
// import Shipping from '../components/shipping/Shipping';
// import Settings from '../components/settings/Settings';
// import Sidebar from '../components/sidebar/Sidebar';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   return (
//     <div className="flex">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <div className="flex-1">
//         <header className="bg-white shadow p-4 flex justify-between md:ml-64">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full md:w-64 border p-2 rounded-lg"
//             />
//             <button className="absolute right-2 top-2 text-gray-500">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117.65 5.65 7.5 7.5 0 0116.65 16.65z" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex items-center gap-2">
//             <img src="https://via.placeholder.com/40" alt="Admin" className="w-10 h-10 rounded-full" />
//             <div>
//               <p className="font-semibold">Admin</p>
//               <p className="text-xs">admin@example.com</p>
//             </div>
//           </div>
//         </header>
//         <Routes>
//           <Route path="/" element={<AdminDashboard/>} />
//           <Route path="/dashboard" element={<DashboardHome />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/customers" element={<Customers />} />
//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/shipping" element={<Shipping />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHome from '../components/DashboardHome/DashboardHome';
import Products from '../components/products/Products';
import Customers from '../components/Customers/Customers';
import Settings from '../components/settings/Settings';
import Shipping from '../components/shipping/Shipping';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentTab = pathSegments[pathSegments.length - 1] || 'dashboard';
    setActiveTab(currentTab === 'Admin' ? 'dashboard' : currentTab);
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'dashboard') {
      navigate('/Admin');
    } else {
      navigate(`/Admin/${tab}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      
      <div className="flex-1">
        <main className="md:ml-64">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shipping" element={<Shipping />} />
           {/** <Route path="/transactions" element={<div className="p-6"><h2 className="text-2xl font-bold">Transactions</h2><p>Transactions component coming soon...</p></div>} />*/} 
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;