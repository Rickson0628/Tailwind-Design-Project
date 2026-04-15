"use client"
import { BiSun } from "react-icons/bi"; 
import { MdOutlineDarkMode } from "react-icons/md"; 
import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import NikeLgo from "@/public/assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const routes = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = ({isOpen, shoppingClick}) => {
  const [click, setClick] = useState(false);
  const darkMode =()=>{
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between dark:fill-white">
      {/* Nike Logo */}
      <a href="#">
        <NikeLgo className="w-20 h-20" />
      </a>

      {/* Hamburger Three Line */}
      <button className="lg:hidden hover:bg-gray-100 p-2 rounded-lg focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-night-50"  onClick={() => setClick(!click)}>
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div className={`${click ? "" : "hidden"} w-full lg:w-auto lg:block`}>
        <ul className={`flex flex-col lg:flex-row lg:border-none lg:bg-transparent lg:space-x-8 bg-gray-100 text-lg border border-gray-50 rounded-lg p-4  mb-2 dark:border-gray-700
         ${click ? "dark:bg-night-500": " "}`}>
          {routes.map((route, i) => (
            <li
              className={` cursor-pointer rounded ${i == 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "lg:hover:bg-transparent hover:text-blue-500"} px-3 py-2 ${i >= 3 ? "lg:text-white" : ""} dark:text-white `}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* Shopping Bag */}
      <div className="fixed left-5 bottom-5 lg:static" onClick={()=> shoppingClick(true)}>
        <button className="flex-center rounded-full bg-gray-100 border-gray-50 h-13 w-13 shadow-md cursor-pointer lg:mr-8  ">
          <TbShoppingBag  />
        </button>
      </div>
      {/* Night Mode */}
      <div className="fixed right-5 bottom-5 lg:right-30">
        <button onClick={darkMode} className="rounded-full bg-night-50 border-gray-50 cursor-pointer shadow-md w-13 h-13 flex-center text-white dark:text-black dark:bg-gray-100 "> 

          <MdOutlineDarkMode className="block dark:hidden"/>
          <BiSun className="hidden dark:block"  />
          </button>
      </div>
    </nav>
  );
};

export default Nav;