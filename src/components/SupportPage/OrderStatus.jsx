import React from "react";
import { useLocation } from "react-router-dom";


const OrderStatus = () => {
  const location = useLocation();
  const { orderId, email } = location.state || {};

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-xl font-semibold mb-6">Order Status</h2>

      {orderId && email ? (
        <div className="space-y-4">
          <p><span className="font-medium">Order ID:</span> {orderId}</p>
          <p><span className="font-medium">Billing Email:</span> {email}</p>

          {/* Example order details */}
          <div className="mt-6 border p-4 rounded bg-gray-50">
            <p className="font-medium">Men Graphic Print T-shirt</p>
            <p>SIZE: L</p>
            <p>₹1,850</p>
            <div className="mt-4">
              <p className="text-green-600">Order Placed – 29 July 2024</p>
              <p>Accepted – 29 July 2024</p>
              <p>In Process – Expected 08/11/25</p>
              <p>Out for Delivery – Expected 17/11/25</p>
              <p>Delivered – Pending</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No order details found. Please go back and enter your details.</p>
      )}
    </div>
  );
};

export default OrderStatus;
