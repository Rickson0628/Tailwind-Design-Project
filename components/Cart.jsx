import React from 'react';
import CartItem from './CartItem';

const Cart = ({cartList}) => {
  return (
    <div>
       <h2 className="font-bold text-3xl mb-4">Cart</h2>
       <ul className="space-y-5">
       {cartList.map((item)=>(
        <li  key={item.product.id}>
          <CartItem item ={item} />
        </li>
       ))}
       </ul>
    </div>
  );
};

export default Cart;