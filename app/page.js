
import Nav from "@/components/Nav";
import ShoeDetail from "@/components/ShoeDetail";
import { SHOE_LIST } from "@/components/constant";
import NewArrival from "@/components/NewArrival";
import SideBar from "@/components/SideBar";


export default function Home() {
  return (
   <div className="p-10 xl:px-24">  
      <Nav />
      <ShoeDetail /> 
      <NewArrival items={SHOE_LIST} />
      <SideBar />
  </div>
  );
}
