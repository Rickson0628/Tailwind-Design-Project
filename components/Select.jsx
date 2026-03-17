import { IoIosArrowDown } from "react-icons/io"; 
import React from 'react';

const Select = ({title, items}) => {
  return (
    <div className="relative">
      <select name={title} defaultValue={""} className='w-24 p-4  appearance-none border border-gray-300 bg-white'>
        <option value="" disabled hidden>{title}</option>
        {items.map((item)=>(
        <option key={item} value={item} className='justify-center'>{item}</option>
        ))
        }

      </select>
      <div>
        <IoIosArrowDown className="absolute right-3 top-5 flex-center" />
      </div>
    </div>
  );
};

export default Select;