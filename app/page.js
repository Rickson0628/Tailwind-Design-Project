"use client"
import Nav from "@/components/Nav";
import ShoeDetail from "@/components/ShoeDetail";
import { SHOE_LIST } from "@/components/constant";
import NewArrival from "@/components/NewArrival";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import Cart from "@/components/Cart";


const FakeList = SHOE_LIST.map((shoe)=>{
  return {
   product: shoe,
   qty: 1,
   size: 40
  }
})

export default function Home() {
  const [isSideBarOpen, setSideBar]= useState(false);

  return (
   <div className="p-10 xl:px-24">  
      <Nav shoppingClick={setSideBar}/>
      <ShoeDetail /> 
      <NewArrival items={SHOE_LIST} />
      <SideBar isOpen={isSideBarOpen} setSideBar={setSideBar}>
       <Cart cartList = {FakeList}/>
        
      </SideBar>
  </div>
  );
}
