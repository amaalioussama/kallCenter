
import Image from "next/image";
import startup from "../../public/dzonexp.png"
import Marquee from "react-fast-marquee";
import calsscenter from "../../public/kallcenter.png"

const Livraison = () => {
  return (
    
 <div className="bg-white   items-center justify-center text-white relative overflow-hidden 
    shadow-2xl">  
    <div>
    <h1 id="tit" className="text-center text-5xl mt-14 text-firstbule font-arabic">مدن التوصيل</h1>
    </div>
    <div className=" bg-gradient-to-r h-28 from-firstbule via-secondule to-trithbule mt-9">
    <Marquee pauseOnClick>
     <h3 id="fontt" className="mt-4 text-lg">agadir</h3>
     <h3 id="fontt"className="mt-4 ml-64 text-lg">CasaBlanca</h3>
     <h3 id="fontt"className="mt-4 ml-64 text-lg">Tanger</h3>
     <h3 id="fontt"className="mt-4 ml-64 text-lg">Tetouan</h3>
       </Marquee>
       <hr className="mt-3" />
       <div className="mb-5">
       <Marquee pauseOnClick direction="right" >
     
          <h3 id="fontt"className="mt-4 text-lg">Fez</h3>
     <h3 id="fontt"className="mt-4 ml-64 text-lg">Meknes</h3>
     <h3 id="fontt"className="mt-4 ml-64 text-lg">Ouarzzazat</h3>
     <h3 id="fontt"className="mt-4 ml-64 text-lg">Guelmim</h3>
    
 
       </Marquee>
       </div>
    </div>
   
    </div>
  );
};

export default Livraison;
