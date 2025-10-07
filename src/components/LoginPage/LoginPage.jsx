// src/components/LoginPage/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("email")
  const [inputValue, setInputValue] = useState("");
  const[checked,setChecked]=useState(false);

   const userCookies=new Cookies();
 const userdata = {
  "identifier": inputValue,
  "agreedToTerms":checked
};
   
        userCookies.set("inputValue",inputValue);
  const navigate = useNavigate();
  
  
  const handleContinue = async() => {
      
console.log(userdata)
    if (!inputValue) {
      alert("Please enter your details");
      return;
    }else{
      console.log("enter");
      console.log(userdata);
      await axios.post("http://localhost:8080/api/v1/auth/register",userdata).then((res)=>{

       userCookies.set("userToken",res.data.token);
     navigate("/otp"); // go to OTP page
    }).catch(()=>{
     alert("try again");
      return;
  });
    }}
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-center text-gray-800 text-lg font-medium mb-2">
          Login/Signup
        </h1>
        <h2 className="text-center text-black text-2xl font-bold mb-6">
          Welcome to EXTREME CULTURE
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setActiveTab("email")}
           
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "email"
                ? "bg-black text-white"
                : "bg-white text-black"
            } border border-black rounded-l-md focus:outline-none`}
          >
            E-mail
          </button>
          <button
          onClick={() => setActiveTab("phone")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "phone"
                ? "bg-black text-white"
                : "bg-white text-black"
            } border border-black border-l-0 rounded-r-md focus:outline-none`}
          >
            Phone no
          </button>
        </div>

        {/* Input */}
        <div className="mb-4">
          <input
            type={activeTab === "email" ? "email" : "tel"}
            placeholder={
              activeTab === "email" ? "Enter your E-mail" : "Enter your Phone no"
            }
            value={inputValue}
            
           onChange={(e) => setInputValue(e.target.value)}
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
        <div className="flex items-center justify-center">
          <input type="checkbox" id="terms" className="mr-2" onClick={()=>setChecked(true)}/>
          <label htmlFor="terms" className="text-sm text-gray-800">
            Agree to Terms & Condition and Privacy Policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
