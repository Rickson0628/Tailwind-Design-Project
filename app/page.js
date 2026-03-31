import Card from "@/components/Card";
import Nav from "@/components/Nav";
import ShoeDetail from "@/components/ShoeDetail";
import { SHOE_LIST } from "@/components/constant";

export default function Home() {
  return (
   <div className="p-10 xl:px-24">  
      <Nav />
      <ShoeDetail /> 
      {SHOE_LIST.map((shoe)=>(
        <Card key={shoe.id} shoe={shoe} />
      ))}
  </div>
  );
}
