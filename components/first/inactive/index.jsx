 
  import Image from "next/image";
  import sadperson from "../../../public/sadperson.png";
  import React from 'react';
  import { motion } from "framer-motion";
  import callcenter from '../../../public/butimage.png'
  const Active = ({ isActive, setIsActive }) => 
  {
    const words = [
      "الإكوميرس", "ساهلة", "مع", "كال", "سونتر", <br key="br1" />, <br key="br2" />,
      "سهولة،", "احترافية،", "اقتصادية", "…", <br key="br1" />, <br key="br2" />,
      "هاديك","هي","كال","سونتر"
    ];
    return (
      <div id="all8" className="bg-gradient-to-r from-firstbule via-secondule to-trithbule h-screen flex items-center justify-center text-white relative overflow-hidden 
      shadow-2xl">
        
        <motion.div 
        id="persondiv"
     initial={{ x: 150 , opacity : 0}} 
     animate={{ x: -10 ,opacity : 40 }}
         transition={{ duration: 0.5}}
        className="absolute top-0 -ml-32 lg:left-2">
    <Image id="happperson" src={sadperson} alt="Happy Person"  objectFit="cover" className=" ml-10 h-3/5 w-full lg:w-10/12" />
  </motion.div>
  
  
      <div className="z-10 p-4 max-w-2xl relative text-center ml-72"> 
      <div id="divh1" className="ml-72" style={{ marginLeft : '800px'}}>
    <h1 id="h1txt" className="text-5xl mt-4 whitespace-nowrap font-arabic" style={{ direction: 'rtl' }}>
    
  
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: index * 0.1 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>
  
      </div>
  <div id="buttdiv" >

  <div id="btns" className="inline-flex rounded-lg border-solid border-2 h-10 ml-60 border-amber-600 mt-20">
    <button
      id="btn"
      onClick={() => setIsActive(true)}
      className={`flex items-center justify-center w-56 font-arabic rounded-none ${isActive ? 'bg-amber-600 text-white' : 'text-white bg-transparent'}`}
    >
      <Image id="im" src={callcenter} alt="Happy Person" objectFit="cover" className="w-28 mr-2" />
    خدام مع
    </button>
    
    <button
      id="btn1"
      onClick={() => setIsActive(false)}
      className={`flex items-center justify-center w-56 font-arabic rounded-none ${!isActive ? 'bg-amber-600 text-white' : 'text-white bg-transparent'}`}
    >
      <Image id="im" src={callcenter} alt="Happy Person" objectFit="cover" className="w-28 mr-2" />
      مخدامش مع
    </button>
  </div>
  </div>
     
  
      </div>
      </div>
    );
  };
  
  export default Active;
  