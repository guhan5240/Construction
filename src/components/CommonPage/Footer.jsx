import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="w-full font-['Arial']">
      {/* Newsletter + Social */}
      <section className="w-full bg-black text-white py-16">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter */}
          <div className="flex flex-col justify-center -mt-6 sm:-mt-8">
            <h2 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[74px] font-bold leading-tight tracking-wide mb-8 sm:mb-12">
              Become Part of <br /> The Extreme Culture
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="px-4 py-3 border border-gray-400 bg-white text-black text-[14px] w-full sm:w-[280px] md:w-[300px] h-[48px] focus:outline-none"
              />
              <button className="bg-gray-600 hover:bg-gray-500 transition px-6 py-3 h-[48px] font-mono text-[14px] tracking-wider w-full sm:w-[280px] md:w-[300px]">
                JOIN OUR NEWSLETTER
              </button>
            </div>
          </div>

          {/* Social Posts */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
            {/* Divider line (hidden on mobile, shows on large screens) */}
            <div className="hidden lg:block w-[2px] h-[400px] sm:h-[500px] lg:h-[550px] bg-white"></div>

            {/* Social Posts */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <h3 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-7xl mb-6 text-center lg:text-left tracking-wide">
                Our Social Post
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start">
                <div className="w-full sm:w-[260px] md:w-[300px] lg:w-[320px] h-[280px] sm:h-[340px] md:h-[370px] lg:h-[390px] bg-gray-300"></div>
                <div className="w-full sm:w-[260px] md:w-[300px] lg:w-[320px] h-[280px] sm:h-[340px] md:h-[370px] lg:h-[390px] bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-black text-white text-center border-t border-gray-700 py-3 text-[12px] sm:text-[14px] tracking-wide px-4">
        5+ Years of Experience &nbsp;&nbsp; 600+ Happy Customers &nbsp;&nbsp; 300+ Premium
        Collections
      </div>

      {/* Links */}
      <footer className="bg-black text-white border-t border-gray-700">
        <div className="max-w-[1634px] mx-auto px-4 sm:px-6 lg:px-12 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12 text-xs sm:text-sm">
          {/* Shop Now */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">SHOP NOW</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Men</li>
              <li className="hover:text-white cursor-pointer">Tracks</li>
              <li className="hover:text-white cursor-pointer">T-Shirt</li>
              <li className="hover:text-white cursor-pointer">Shorts</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Track My Order</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">SOCIAL</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">YouTube</li>
              <li className="hover:text-white cursor-pointer">X</li>
              <li className="hover:text-white cursor-pointer">Facebook</li>
            </ul>
          </div>

          {/* Legal */}

          <div className="md:mt-0 mt-6 md:col-span-1  col-span-2">
            <ul className="flex flex-wrap justify-center  md:justify-start gap-2 sm:gap-6 text-gray-300 text-xs sm:text-sm">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white text-gray-300 cursor-pointer no-underline decoration-none"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white text-gray-300 cursor-pointer no-underline decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-white text-gray-300 cursor-pointer no-underline decoration-none"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-4 text-center text-xs sm:text-sm px-4">
          <p className="text-gray-400">
            &copy; 2025 All rights reserved. Developed by{' '}
            <a
              href="https://www.arrowthought.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400  cursor-pointer no-underline decoration-none"
            >
              Arrow Thought
            </a>
          </p>
        </div>
      </footer>

      {/* Big Branding */}
      <div className="bg-black py-2 px-4 sm:px-5 border-t border-gray-700 py-1 ">
        {/* Desktop / Large Screens → One Line */}
        <h1 className="hidden lg:block text-[186px] font-bold text-gray-400 tracking-wide text-center whitespace-nowrap">
          EXTREME CULTURE
        </h1>

        {/* Mobile / Tablet → Two Lines */}
        <h1 className="block lg:hidden text-[48px] sm:text-[80px] md:text-[120px] font-bold text-gray-400 tracking-wide text-center leading-none">
          EXTREME <br /> CULTURE
        </h1>
      </div>
    </div>
  );
};

export default Footer;
