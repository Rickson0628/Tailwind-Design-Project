"use client";
import React from "react";
import Card from "./Card";


const NewArrival = ({items}) => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center font-extrabold text-4xl h-40 bg-cover bg-center">
        NEW ARRIVALS
        </div>
        <div className="lg:flex justify-center">
      <div className="grid grid-cols-1 gap-y-24 gap-x-14 md:grid-cols-2">
      {items.map((item)=>(<Card  key={item.id} shoe={item}/>))}
      </div>
      </div>
    </div>
  );
};

export default NewArrival;