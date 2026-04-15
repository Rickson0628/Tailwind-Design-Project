"use client";
import Image from "next/image";
import shoe1 from "../public/assets/n1-min.png";
import React from "react";
import Select from './Select';
import { SIZES, QTY } from "./constant";

const ShoeDetail = () => {
  return (
    // Flexbox
    <div className="flex flex-col lg:flex-row-reverse dark:text-white">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center h-full bg-linear-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]  ">
        <Image src={shoe1} alt="Nike Shoe One" className="animate-float" />
        </div>
      </div>

      <div className="flex-1 space-y-6  mt-4">
        {/* Nike Title */}
        <h1 className="text-5xl font-bold lg:text-8xl">Nike Air Max 270</h1>

        {/* Nike Description */}
        <p className="lg:text-2xl">
          {"The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient "}</p>

        {/* Nike Price */}
        <div className="flex flex-row space-x-10 items-center">
        <div className="text-3xl font-extrabold lg:text-5xl">$100</div> 
        <Select title="QTY" items={QTY} addClass={`w-24 p-4 dark:text-black`} />
        <Select title="SIZE" items={SIZES} addClass={`w-24 p-4 dark:text-black`}/>
        </div>
        {/* Nike Button */}
        <div className="space-x-6">
          <button className="text-white bg-black h-15 w-40 dark:bg-white dark:text-black ">Add to Bag</button>
          <a href="#" className="underline underline-offset-4">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
