"use client";
import Image from "next/image";
import React, { useState } from "react";
import Select from './Select';
import { SIZES, QTY } from "./constant";

const ShoeDetail = ({clickCard, addCart}) => {
  const [qty, setQty] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] =useState("");
   
  const handleCart = ()=>{
    console.log("qty:", qty, "size:", size);
    if (!qty || !size){
      setError("Please select both quantity and size")
      return;
    }

    addCart(clickCard,qty,size)
  }
  return (
    // Flexbox
    <div className="flex flex-col lg:flex-row-reverse dark:text-white">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center h-full bg-linear-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]  ">
        <Image src={clickCard.src} alt="Nike Shoe One" className="animate-float" />
        </div>
      </div>

      <div className="flex-1 space-y-6  mt-4">
        {/* Nike Title */}
        <h1 className="text-5xl font-bold lg:text-8xl">{clickCard.title}</h1>

        {/* Nike Description */}
        <p className="lg:text-2xl">
          {clickCard.description}</p>

        {/* Nike Price */}
        <div className="flex flex-row space-x-10 items-center">
        <div className="text-3xl font-extrabold lg:text-5xl">${clickCard.price}</div> 
        <Select change={setQty} title="QTY" items={QTY} addClass={`w-24 p-4 dark:text-black`} />
        <Select change={setSize} title="SIZE" items={SIZES} addClass={`w-24 p-4 dark:text-black`}/>
        </div>
        {/* Nike Button */}
        <div className="space-x-6">
          <button onClick={handleCart}className="text-white bg-black h-15 w-40 dark:bg-white dark:text-black ">Add to Bag</button>
          <a href="#" className="underline underline-offset-4">
            View Details
          </a>
          
        </div>
        {error && (<div className="text-red-600">{error}</div>)}
      </div>
    </div>
  );
};

export default ShoeDetail;
