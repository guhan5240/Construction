// src/components/LoginPage/UserDetails.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const UserName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const inputValue=new Cookies().get("inputValue");
  const user={
    firstName:firstName,
    lastName:lastName
  }
  const handleSubmit = async(e) => {
  e.preventDefault();

  if (!firstName.trim()) {
    alert("First Name is required");
    return;
  }
  await axios.post(`http://localhost:8080/api/v1/auth/update-profile?identifier=${inputValue}`,user).then((res)=>{
     navigate("/");
  }).catch((err)=>{
      alert("Error updating profile, please try again.");
    console.log("User Data:", { firstName, lastName });
  });

  // 👉 Here you can send data to backend later
  

  // Go to Home Page
 
};

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Complete Your Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Last Name (Optional)
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Continue
          </button>

          {/* Back to Login */}
          <p
            onClick={() => navigate("/login")}
            className="text-center text-sm text-gray-600 cursor-pointer hover:underline"
          >
            ← Back to Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserName;
