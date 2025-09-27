// // DashboardHome.jsx (e.g., ../Admin/components/DashboardHome.jsx)
// import React from 'react';

// const DashboardHome = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen md:ml-64">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="bg-white shadow rounded-lg p-6">
//         <p className="text-gray-600">Dashboard content will be added soon.</p>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;

import React from 'react';
import { ShoppingCart, Users, Package, DollarSign } from 'lucide-react';

const DashboardHome = () => {
  const stats = [
    {
      title: 'Total Orders',
      value: '0',
      icon: <ShoppingCart size={24} />,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Customers',
      value: '0',
      icon: <Users size={24} />,
      color: 'bg-green-500'
    },
    {
      title: 'Total Products',
      value: '0',
      icon: <Package size={24} />,
      color: 'bg-purple-500'
    },
    {
      title: 'Total Revenue',
      value: '₹0',
      icon: <DollarSign size={24} />,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="p-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color} text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
          <div className="space-y-3">
            <div className="text-center py-8 text-gray-500">
              <Package size={48} className="mx-auto mb-2 text-gray-300" />
              <p>No recent orders</p>
              <p className="text-sm">Orders will appear here once customers start purchasing</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Package size={18} />
              Add New Product
            </button>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Users size={18} />
              View Customers
            </button>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <DollarSign size={18} />
              View Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;