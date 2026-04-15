import { IoIosArrowDown } from "react-icons/io"; 
import React from 'react';

const Select = ({def, title, items, addClass}) => {
  return (
    <div className="relative">
      <select name={title} defaultValue={def || ""} className={`cursor-pointer appearance-none border border-gray-300 
      bg-white ${addClass}`}>
        <option value="" disabled hidden>{title}</option>
        {items.map((item)=>(
        <option key={item} value={item} className='justify-center'>{item}</option>
        ))
        }

      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3 dark:text-black">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;