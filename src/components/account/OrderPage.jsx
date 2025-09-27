import React from "react";
import { products } from "../../products/data"; // adjust path if needed
import AccountSidebar from "../account/AccountSidebar";

const OrderPage = () => {
  // your app likely stores order items with productId + qty
  const orders = [
    { id: 1, productId: 17, size: "L", qty: 1 },
    { id: 2, productId: 18, size: "L", qty: 2 },
  ];

  const getProduct = (id) => products.find((p) => p.id === id);

  return (
    <div className="w-full min-h-screen p-6 sm:p-12 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-8">
        Orders
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Keep sidebar consistent and clickable */}
        <AccountSidebar />

        {/* Main orders table */}
        <div className="lg:col-span-3">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Product</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Size</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const product = getProduct(order.productId);
                  if (!product) return null;
                  const price = Number(String(product.price).replace(/[^\d]/g, ""));
                  const total = price * order.qty;
                  return (
                    <tr key={order.id} className="border-t">
                      <td className="p-3">{product.title}</td>
                      <td className="p-3">
                        <img
                          src={product.images?.[0]}
                          alt={product.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="p-3">{order.size}</td>
                      <td className="p-3">₹{price}</td>
                      <td className="p-3">{order.qty}</td>
                      <td className="p-3">₹{total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
