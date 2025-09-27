import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackForm = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!orderId || !email) {
      alert("Please fill all fields");
      return;
    }

    // Navigate to order status page and pass data
    navigate("/order-status", {
      state: { orderId, email },
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm mb-1">
          <p>
            To Track your order please enter your order ID in the text box below
            and press the “TRACK ORDER” button. This was given to you on your
            receipt and in the confirmation email you should have received.
          </p>
        </label>
      </div>

      <div>
        <label className="block text-sm mb-1">
          Order ID<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full border p-2 text-sm"
          placeholder="Enter your order ID"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">
          Billing Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 text-sm"
          placeholder="Enter billing email"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 text-sm hover:bg-gray-800"
      >
        Track Order
      </button>
    </form>
  );
};

export default TrackForm;
