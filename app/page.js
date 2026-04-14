"use client"
import Nav from "@/components/Nav";
import ShoeDetail from "@/components/ShoeDetail";
import { SHOE_LIST } from "@/components/constant";
import NewArrival from "@/components/NewArrival";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import CartItem from "@/components/CartItem";

export default function Home() {
  const [isSideBarOpen, setSideBar]= useState(false);

  return (
   <div className="p-10 xl:px-24">  
      <Nav shoppingClick={setSideBar}/>
      <ShoeDetail /> 
      <NewArrival items={SHOE_LIST} />
      <SideBar isOpen={isSideBarOpen} setSideBar={setSideBar}>
        <h2 className="font-bold text-2xl p-4">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
      </SideBar>
  </div>
  );
}
