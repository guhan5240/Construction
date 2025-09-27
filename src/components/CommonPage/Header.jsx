import { Heart, Search, User } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-black px-4 sm:px-6 lg:px-12 py-3 relative">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Left Nav */}
        <nav className="hidden lg:flex flex-1 justify-start gap-x-7">
          <Link to="/" className="text-global-2 underline-animate-2 text-sm">Home</Link>
          <Link to="/collection" className="text-global-2 underline-animate-2 text-sm">Collection</Link>
          <Link to="/sale" className="text-global-2 underline-animate-2 text-sm">Sale</Link>
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center text-white no-underline">
            <img src="/images/logo.png" alt="Company Logo" className="w-8 h-8 mr-2" />
            <span className="text-xl sm:text-2xl font-semibold uppercase tracking-wider">EXTREME</span>
            <span className="text-xl sm:text-2xl font-light uppercase tracking-wider ml-2">CULTURE</span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-end items-center gap-x-4">
          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-x-5">
            <Link to="/support" className="text-global-2 underline-animate-2 text-sm">Support</Link>
            <Search className="text-white cursor-pointer" />
            <Link to="/wishlist"><Heart className="text-white" size={22} /></Link>
            <button className="text-white"><i className="fi fi-rr-shopping-bag"></i></button>

            {/* Profile Icon */}
            <button
              className="relative text-white"
              onClick={() => navigate("/account")}
            >
              <User size={22} />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button className="block lg:hidden p-2 ml-2">
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
