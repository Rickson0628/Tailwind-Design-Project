import Image from "next/image";
import React from "react";
import Select from "./Select";
import { QTY, SIZES } from "@/components/constant";
import { CiTrash } from "react-icons/ci";




const CartItem = ({ item: {product, qty, size} }) => {
  return (
    <div className="cursor-pointer  bg-gray-100 transition transform hover:bg-blue-300 rounded-lg">
      <div className=" p-2 space-x-2">
      
        {/* Top Row */}
        <div className="flex">
         {/* Nike Image */}
            <Image
            className="flex items-center justify-center w-20 h-20 mr-2 mt-2"
            alt={`${product.title} Photo`}
            src={product.src}
          />
          {/* Nike Title and Descripion */}
          <div className="space-y-1.5">
            <div className="font-bold">{product.title}</div>
            <div className="text-gray-500 text-sm">{product.description}</div>
          </div>
          {/* Nike Price */}
          <div className="font-bold">${product.price}</div>
        </div>

        {/* Bottom Row */}

        <div className="flex justify-between">
          <div className="pl-22 flex space-x-3 ">
            {/* Select Buttons */}
          <div>
            <div className="font-bold">SIZE</div>
            <Select def={size} title="SIZE" items={SIZES} addClass={'p-1 w-16 text-sm'} />
          </div>

          <div>
            <div className="font-bold">QTY</div>
            <Select def={qty} title="QTY" items={QTY} addClass={'p-1 w-16 text-sm'} />
          </div>
          </div>
          {/* Trash Button */}
          <button>
            <CiTrash className="mt-4 hover:text-red-600" size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
