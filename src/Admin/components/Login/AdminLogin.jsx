// src/components/LoginPage/LoginPage.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
let token=0;
const AdminLogin= () => {

  const cookies=new Cookies();
  {/**{
    "email": "admin@example.com",
    "password": "Admin@10.art",
    "rememberMe": true
} */}

  //const [token, setToken]=useState("");
  //const [activeTab, setActiveTab] = useState("email");
 
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const setAdminvalue=(e)=>{

    setInputValue({...inputValue,[e.target.name]:e.target.value});
  }

  const handleContinue = async() => {
    if (!inputValue) {
      alert("Please enter your details");
      return;
    }else{
            await axios.post("http://localhost:8080/api/admin/auth/login",inputValue).then((res)=>{
             token=res.data.token;
             cookies.set("adminToken",token);
             console.log("token",token);
                navigate("/Admin")
            }).catch((err)=>{
                alert("Please enter your details");
        ; });
    }
    // go to home page
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-center text-gray-800 text-lg font-medium mb-2">
          Admin Login
        </h1>
        <h2 className="text-center text-black text-2xl font-bold mb-6">
          Welcome to EXTREME CULTURE
        </h2>
        {/* Input */}
        <div className="mb-4">
          <input
            type="text"
            value={inputValue.email}
            placeholder="Enter your Email"
            name="email"
            onChange={(e) =>setAdminvalue(e) }
            className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
           
        </div>
       < div className="mb-4">
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={inputValue.password}
            onChange={(e) => setAdminvalue(e)}
            className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
           
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full px-4 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black mb-4"
        >
          Continue
        </button>

        {/* Terms */}
        
      </div>
    </div>
  );
};
export {token};
export default AdminLogin;
