// src/components/LoginPage/OtpPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(240); // 4 mins countdown
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Countdown timer
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Handle OTP change
  const handleChange = (val, idx) => {
    if (/^[0-9]?$/.test(val)) {
      const newOtp = [...otp];
      newOtp[idx] = val;
      setOtp(newOtp);

      if (val && idx < 5) {
        inputRefs.current[idx + 1].focus();
      }
    }
  };

  // Handle Submit
  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      alert("⚠️ Please enter full 6-digit OTP");
      return;
    }

    // ✅ Example check - you can replace with API validation
    if (otpValue === "123456") {
      navigate("/user-details"); // move to your next page
    } else {
      alert("❌ Invalid OTP, try again!");
    }
  };

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-gray-800 text-lg font-semibold mb-2">Login/Signup</h1>
        <p className="text-gray-600 mb-6">
          Enter the 6-digit verification code sent to your Phone No
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-12 h-12 text-center text-lg border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          ))}
        </div>

        {/* Timer */}
        <p className="text-gray-600 mb-2">
          Code expires in {minutes}:{seconds}
        </p>

        {/* Links */}
        <p className="text-gray-600 text-sm">
          Entered the wrong email?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-black font-medium cursor-pointer hover:underline"
          >
            Change
          </span>
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Didn’t receive code?{" "}
          <span
            onClick={() => setTimer(240)}
            className="text-black font-medium cursor-pointer hover:underline"
          >
            Resend
          </span>
        </p>

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Verification;
