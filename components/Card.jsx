"use client";
import Image from "next/image";
import React from "react";


const Card = ({shoe}) => {
  return (
    <div className={`${shoe.className} relative max-w-xl lg:w-120 cursor-pointer transform transition hover:scale-105 rounded-2xl `}>
      <div className="justify-center">
        <div className="p-8">
          <h1 className="text-2xl font-bold">{shoe.title}</h1>
          <div className="font-semibold underline underline-offset-4 mt-8">
            SHOP NOW +
          </div>
        </div>
        <div>
          <Image
            src={shoe.src}
            alt="Nike Shoe One"
            className="absolute w-56 h-40 top-5 left-[45%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
