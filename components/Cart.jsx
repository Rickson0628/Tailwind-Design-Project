import React from 'react';
import CartItem from './CartItem';

const Cart = ({cartList, removeItem}) => {
  return (
    <div>
       <h2 className="font-bold text-3xl mb-4 dark:text-white">Cart</h2>
       <ul className="space-y-5">
        
       {cartList.length > 0 ? (cartList.map((item)=>(
        <li  key={item.product.id}>
          <CartItem item ={item} removeItem={removeItem} />
        </li>
       ))) : (`Add New Shoes to your Cart`)}
       </ul>
    </div>
  );
};

export default Cart;