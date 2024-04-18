import Image from "next/image";

import shema from "../../public/shemaworkwith.png";

const Wrokwith = () => {
  return (
    <div id="all3" className="bg-white  h-96  shadow-2xl ">
    <div className="flex items-center justify-center mt-12">
        <h1 id="tit" className="text-5xl font-arabic  text-firstbule">كنقدر نخدم مع</h1>
      </div>
      <div className="flex justify-center items-center mt-12">
        <Image src={shema} alt="Startup" objectFit="contain" />
      </div>
    </div>
  );
};

export default Wrokwith;


