"use client";
import Nav from "@/components/Nav";
import ShoeDetail from "@/components/ShoeDetail";
import { SHOE_LIST } from "@/components/constant";
import NewArrival from "@/components/NewArrival";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import Cart from "@/components/Cart";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isSideBarOpen, setSideBar] = useState(false);
  const [clickedCard, setCard] = useState(SHOE_LIST[0]);

  const addCart = (shoe, qty, size) => {
    if (qty && size) {
      const existingItem = cart.find(
        (item) => item.product.id === shoe.id && item.size === size,
      );

      if (existingItem) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.product.id === shoe.id && item.size === size
              ? { ...item, qty: Number(item.qty) + Number(qty) }
              : item,
          ),
        );
      } else {
        const newItem = {
          product: shoe,
          qty: Number(qty),
          size: size,
        };

        setCart((prevCart) => [...prevCart, newItem]);
      }
    }
  };
 const removeItem = (id, size) => {
  setCart((prevCart) =>
    prevCart.filter(
      (item) => !(item.product.id === id && item.size === size)
    )
  );
};
  return (
    <div className="p-10 xl:px-24 dark:bg-night">
      <Nav shoppingClick={setSideBar} />
      <ShoeDetail clickCard={clickedCard} addCart={addCart} />
      <NewArrival items={SHOE_LIST} setCard={setCard} />
      <SideBar isOpen={isSideBarOpen} setSideBar={setSideBar}>
        <Cart cartList={cart} removeItem={removeItem} />
      </SideBar>
    </div>
  );
}
