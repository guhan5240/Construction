// import React from 'react';
// import { ShoppingCart, Users, CreditCard, Settings, Home, User } from 'lucide-react';

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   const menus = [
//     { key: "dashboard", label: "Dashboard", icon: <Home size={18} /> },
//     { key: "products", label: "Add Products", icon: <ShoppingCart size={18} /> },
//     { key: "customers", label: "Customers", icon: <Users size={18} /> },
//     { key: "transactions", label: "Transactions", icon: <CreditCard size={18} /> },
//     { key: "settings", label: "Settings", icon: <Settings size={18} /> },
//   ];

//   return (
//     <aside className="w-64 bg-black text-white shadow-lg hidden md:block fixed h-screen">
//       <div className="p-4 text-2xl font-bold border-b border-gray-700">Admin Panel</div>
//       <nav className="p-4 space-y-2">
//         {menus.map((menu) => (
//           <button
//             key={menu.key}
//             onClick={() => setActiveTab(menu.key)}
//             className={`w-full flex items-center gap-2 p-2 rounded-lg text-left hover:bg-gray-800 ${activeTab === menu.key ? 'bg-gray-800 font-semibold' : ''}`}
//           >
//             {menu.icon} {menu.label}
//           </button>
//         ))}
//       </nav>
//       <div className="absolute bottom-4 w-full p-4">
//         <div className="flex items-center gap-2">
//           <User size={24} />
//           <div>
//             <p className="font-semibold">Admin</p>
//             <p className="text-xs">admin@example.com</p>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React from 'react';
import { ShoppingCart, Users, CreditCard, Settings, Home, User, Truck, Package } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menus = [
    { key: "dashboard", label: "Dashboard", icon: <Home size={18} /> },
    { key: "products", label: "Add Products", icon: <ShoppingCart size={18} /> },
    { key: "customers", label: "Customers", icon: <Users size={18} /> },
    { key: "shipping", label: "Shipping", icon: <Truck size={18} /> },
    { key: "settings", label: "Settings", icon: <Settings size={18} /> },
    { key: "stock", label: "Stock", icon: <Package size={18} /> }
  ];

  return (
    <aside className="w-64 bg-black text-white shadow-lg hidden md:block fixed h-screen z-50">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">Admin Panel</div>
      <nav className="p-4 space-y-2">
        {menus.map((menu) => (
          <button
            key={menu.key}
            onClick={() => setActiveTab(menu.key)}
            className={`w-full flex items-center gap-2 p-3 rounded-lg text-left hover:bg-gray-800 transition-colors ${
              activeTab === menu.key ? 'bg-gray-800 font-semibold border-l-4 border-blue-500' : ''
            }`}
          >
            {menu.icon} {menu.label}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-4 w-full p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-xs text-gray-400">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
