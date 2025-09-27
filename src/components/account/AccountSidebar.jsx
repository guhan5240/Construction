import React from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "block w-full text-left px-3 py-2 border transition";
const linkInactive = "bg-gray-100 hover:bg-gray-50";
const linkActive = "bg-white border-black font-semibold";

const AccountSidebar = () => {
  return (
    <div className="w-[250px] h-[190px] bg-gray-200 pt-4 pr-7">
  <ul className="space-y-2">
    <li>
      <NavLink
        to="/account"
        end
        className={({ isActive }) =>
          `block w-full px-3 py-2 border no-underline text-black ${
            isActive
              ? "bg-white border-black font-semibold"
              : "bg-white hover:bg-gray-50"
          }`
        }
      >
        Account Details
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/account/orders"
        className={({ isActive }) =>
          `block w-full px-3 py-2 border no-underline text-black ${
            isActive
              ? "bg-white border-black font-semibold"
              : "bg-white hover:bg-gray-50"
          }`
        }
      >
        Orders
      </NavLink>
    </li>
  </ul>
</div>
  );
};

export default AccountSidebar;
