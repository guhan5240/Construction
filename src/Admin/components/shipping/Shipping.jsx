import React from 'react';

const Shipping = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen md:ml-64">
      <h2 className="text-2xl font-bold mb-4">Shipping Methods</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="space-y-2">
          <li className="p-3 border rounded-lg">Standard Delivery - ₹50</li>
          <li className="p-3 border rounded-lg">Express Delivery - ₹150</li>
          <li className="p-3 border rounded-lg">Free Delivery (Orders above ₹1000)</li>
        </ul>
      </div>
    </div>
  );
};

export default Shipping;