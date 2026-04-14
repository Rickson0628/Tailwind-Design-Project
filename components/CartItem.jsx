import Image from "next/image";
import React from "react";
import Select from "./Select";
import { QTY, SIZES } from "@/components/constant";
import { CiTrash } from "react-icons/ci";

const CartItem = ({ item }) => {
  return (
    <div className="cursor-pointer  bg-gray-100 transition transform hover:bg-blue-300">
      <div className=" p-2 space-x-2">
        <div className="flex">
         {/* Nike Image */}
          <Image
            className="h-20 w-25 flex-center"
            alt={`${item.title} Photo`}
            src={item.src}
          />
          {/* Nike Title and Descripion */}
          <div className="space-y-1.5">
            <div className="font-bold">{item.title}</div>
            <div className="text-gray-500 text-sm">{item.description}</div>
          </div>
          {/* Nike Price */}
          <div className="font-bold">${item.price}</div>
        </div>

        <div className="flex justify-between">
          <div className="pl-24 flex space-x-3 ">
          <div>
            <div className="font-bold">SIZE</div>
            <Select title="SIZE" items={SIZES} addClass={'p-1 w-16 text-sm'} />
          </div>

          <div>
            <div className="font-bold">QTY</div>
            <Select title="QTY" items={QTY} addClass={'p-1 w-16 text-sm'} />
          </div>
          </div>
          <button>
            <CiTrash className="mt-4" size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
