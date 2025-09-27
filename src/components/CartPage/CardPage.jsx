// src/pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../../Context/CardContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/Price";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // ✅ Total calculation
const total = cartItems.reduce(
  (acc, item) =>
    acc + Number(String(item.price).replace(/[^\d]/g, "")) * item.quantity,
  0
);


  // ✅ Razorpay integration (test mode)
  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890abcdef", // ⭐ use Razorpay Test Key
      amount: total * 100, // in paise (₹500 → 50000)
      currency: "INR",
      name: "Extreme Culture Store",
      description: "Test Transaction",
      image: "/logo.png", // optional
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Your Cart is Empty
        </h2>
        <Link
          to="/collection"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 bg-white shadow rounded-lg p-4">
        <h1 className="text-xl font-bold mb-4">Cart ({cartItems.length})</h1>
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-between border-b py-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-20 h-20 rounded"
              />
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-600">
                  Size: {item.size}, Color:
                  <span
                    className="inline-block w-4 h-4 rounded-full border ml-1"
                    style={{ backgroundColor: item.color }}
                  ></span>
                </p>
                <p className="text-sm font-semibold">{formatPrice(item.price)}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 border rounded"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 border rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 ml-3"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="font-semibold mb-4">Cart Summary</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Saved</span>
          <span>₹0</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>You Pay</span>
          <span>₹{total}</span>
        </div>

        {/* Razorpay Checkout Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-black text-white py-3 rounded mb-3"
        >
          Checkout Securely
        </button>

        <Link to="/collection" className="block text-center text-sm underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
