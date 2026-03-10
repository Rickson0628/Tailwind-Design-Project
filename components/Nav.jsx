"use client"
import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import NikeLgo from "@/public/assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const routes = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between">
      {/* Nike Logo */}
      <a href="#">
        <NikeLgo className="w-20 h-20" />
      </a>

      {/* Hamburger Three Line */}
      <button className="lg:hidden hover:bg-gray-100 p-2 rounded-lg focus:ring-2 focus:ring-gray-200"  onClick={() => setClick(!click)}>
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div className={`${click ? "" : "hidden"} w-full lg:w-auto lg:block`}>
        <ul className="flex flex-col lg:flex-row lg:border-none lg:bg-transparent lg:space-x-8 bg-gray-50 text-lg border border-gray-50 rounded-lg p-4">
          {routes.map((route, i) => (
            <li
              className={` cursor-pointer rounded ${i == 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "lg:hover:bg-transparent hover:text-blue-500"} px-3 py-2 ${i >= 3 ? "lg:text-white" : ""} `}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* Shopping Bag */}
      <div className="fixed left-5 bottom-5 lg:static">
        <div className="flex-center rounded-full bg-gray-100 border-gray-50 h-13 w-13 shadow-md cursor-pointer lg:mr-8">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
