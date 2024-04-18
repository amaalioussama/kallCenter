"use client";
import Image from "next/image";
import casque from "../../public/casque.png";
import React from "react";
import { motion, useAnimation } from "framer-motion";

// import Video from 'next-video';

const Workmethode = () => {
 

  return (
    <div id="all2" className="bg-gradient-to-r from-firstbule via-secondule to-trithbule flex items-center justify-center text-white relative overflow-hidden shadow-2xl" style={{ height: "850px" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="absolute">
          <Image id="casque" src={casque} className="h-96 w-96 bg-cover bg-center" alt="Startup" objectFit="contain" />
        </div>
        <div
 className="absolute top-20 text-white text-center" >
<motion.div 
   animate={{ y: 80 }}
   initial={{ y: 50 }} 
   whileInView={{ y: 0 }}
   transition={{ ease: "easeOut",duration: 0.5 }}
>
  <h1 id="soufrance" className="text-5xl font-arabic">كيفاش كنخدم</h1>
</motion.div>
         
          <div id="contains" className="mt-12 flex justify-between max-w-4xl">
            <div className="flex flex-col items-center">
          <motion.div
           
 animate={{ y: 100 }}
 initial={{ y: 50 }} 
 whileInView={{ y: 0 }}
 transition={{ ease: "easeOut",duration: 0.5 }}
>
                <h1  id="soufrance1" className="text-8xl font-arabic mb-4">3</h1>
              </motion.div>
          <motion.div 
  animate={{ y: 100 }}
  initial={{ y: 30 }} 
  whileInView={{ y: 0 }}
  transition={{ ease: "easeOut",duration: 0.5 }}
><h2  id="tit1" className="text-5xl font-arabic mb-2" style={{ whiteSpace: 'nowrap' }}>المرحلة الثالثة</h2>

              </motion.div>
          <motion.div 
 animate={{ y: 100 }}
 initial={{ y: 50 }} 
 whileInView={{ y: 0 }}
 transition={{ ease: "easeOut",duration: 0.5 }}
>
<h3  id="par" className="text-xl mt-4">لك كيف ولدت كل هذه الفكرة الخاطئة المتمثلة في إدانة السرور ومدح الألم ، وسأقدم لك وصفًا</h3>
               </motion.div>
            </div>
            <div className="ml-10 flex flex-col items-center">
        <motion.div 
 animate={{ y: 100 }}
 initial={{ y: 50 }} 
 whileInView={{ y: 0 }}
 transition={{ ease: "easeOut",duration: 0.5 }}
>
                <h1     id="soufrance"  className="text-8xl mb-4">2</h1>
              </motion.div>
          <motion.div 
 animate={{ y: 100 }}
 initial={{ y: 30 }} 
 whileInView={{ y: 0 }}
 transition={{ ease: "easeOut",duration: 0.5 }}
>
                <h2     id="tit"  className="text-5xl font-arabic mb-2" style={{ whiteSpace: 'nowrap' }}>المرحلة التانية</h2>
              </motion.div>
          <motion.div 
 animate={{ y: 100 }}
 initial={{ y: 50 }} 
 whileInView={{ y: 0 }}
 transition={{ ease: "easeOut",duration: 0.5 }}
>
                <h3     id="par"  className="text-xl mt-4">لك كيف ولدت كل هذه الفكرة الخاطئة المتمثلة في إدانة السرور ومدح الألم ، وسأقدم لك وصفًا</h3>
              </motion.div>
            </div>
            <div className="ml-10 flex flex-col items-center">
        <motion.div 
 animate={{ y: 100 }}
 initial={{ y: 50 }} 
 whileInView={{ y: 0 }}
 transition={{ ease: "easeOut",duration: 0.5 }}
>
                <h1  id="soufrance" className="text-8xl mb-4">1</h1>
              </motion.div>
          <motion.div 
 animate={{ y: 100 }}
 initial={{ y: 30 }} 
 whileInView={{ y: 0 }}
 transition={{ ease: "easeOut",duration: 0.5 }}
>
                <h2 id="tit" className="text-5xl font-arabic " style={{ whiteSpace: 'nowrap' }}>المرحلة الأولى</h2>
              </motion.div>
              <br/> 
              <motion.div  
               animate={{ y: 100 }}
               initial={{ y: 50 }} 
               whileInView={{ y: 0 }}
               transition={{ ease: "easeOut",duration: 0.5 }}
               >
                <h3 id="par" className="text-xl ">لك كيف ولدت كل هذه الفكرة الخاطئة المتمثلة في إدانة السرور ومدح الألم ، وسأقدم لك وصفًا</h3>
              </motion.div>
            </div>
          </div>
          <div className="mt-28 w-full flex justify-between">
            {/* <motion.div 
               animate={{ y: 100 }}
               initial={{ y: 50 }} 
               whileInView={{ y: 0 }}
               transition={{ ease: "easeOut",duration: 0.5 }} className=" mb-7 h-36 mt-4 w-5/6 relative">
            <Video src={videot} />
   
            </motion.div> */}
            
            <motion.div  
           id="beftit"
               animate={{ y: 100 }}
               initial={{ y: 50 }} 
               whileInView={{ y: 0 }}
               transition={{ ease: "easeOut",duration: 0.5 }} className="text-4xl ml-9 mt-20 flex flex-col items-center" >
            <h1  id="tit" className="text-5xl mt-4 whitespace-nowrap font-arabic" style={{ direction: 'rtl' ,marginLeft : '' }}> تفرج فالفيديو باش <br/> <br/>تفهم مزيان</h1>
           
            </motion.div>
          </div>
        
        </div>
      </div>
 
    </div>
    
  );
};

export default Workmethode;
