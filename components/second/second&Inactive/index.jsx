'use client'
import { useEffect } from "react";
import Image from "next/image";
import dixdirhams from "../../../public/10dh.png";
import callcenter from "../../../public/kallcenter.png";
import { motion } from "framer-motion";
import '../../../styles/mobileStyle.css'

const InCardactive = () => {
  
  return (
    <div className="bg-white" data-aos="fade-up">
    
      <motion.div
       animate={{ y: -40 }}
       initial={{ y:40 }} 
       transition={{ ease: "easeOut",duration: 3 }}
       whileInView={{x:0 }} className="flex items-center justify-center mt-20">
        <h1 id="soufrance" className="md:text-5xl font-arabic text-firstbule">كتعاني من هاد المشاكل؟</h1>
      </motion.div>

      <div id="all1" className="md:flex flex-wrap md:justify-center mt-12 md:ml-40 max-w-5xl">
      
        <motion.div
        id="rounded1"
         animate={{ x: 40 }}
         initial={{ x: 100 }} 
       transition={{ ease: "easeOut",duration: 1 }}
       whileInView={{x:0 }}className="text-firstbule font-arabic relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
          بيانات مشتتة
        </motion.div>
        <motion.div
          id="rounded1"
   animate={{ x: 60 }}
   initial={{ x:40 }} 
   transition={{ ease: "easeOut",duration: 2 }}
   whileInView={{x:0 }} className="text-firstbule font-arabic relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
          ضعف في تتبع الطلبيات
        </motion.div>
        <motion.div
        id="rounded1"
  animate={{ x: 20 }}
  initial={{ x:40 }} 
  transition={{ ease: "easeOut",duration: 2 }}
  whileInView={{x:0 }} className=" ml-4 text-firstbule font-arabic relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
          نسبة تأكيد الطلبيات ضعيفة
        </motion.div>
        <motion.div
        id="rounded1"
  animate={{ x: 60 }}
  initial={{ x: 0 }} 
  transition={{ ease: "easeOut",duration: 1 }}
  whileInView={{x:0 }}  className=" text-firstbule font-arabic relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
          فريق غير محترف؟
        </motion.div>
        <div className="flex mt-12 items-center justify-center md:justify-start">
          <motion.div
          id="rounded1"
   animate={{ x: 40 }}
   initial={{ x:100 }} 
   whileInView={{x:0 }}
   transition={{ ease: "easeOut",duration: 2 }}className="ml-12 font-arabic md:ml-0 text-firstbule relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            غياب رؤية حول المشروع
          </motion.div>
          <motion.div
          id="rounded1"
  animate={{ x: 50 }}
  initial={{ x:100 }} 
  transition={{ ease: "easeOut",duration: 1 }}
  whileInView={{x:0 }} className=" md:ml-12 text-firstbule font-arabic relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            ضعف الإمكانيات
          </motion.div>
          <motion.div
          id="rounded1"
   animate={{ x: 60 }}
   initial={{ x:100 }} 
   transition={{ ease: "easeOut",duration: 1 }}
   whileInView={{x:0 }}  className="md:ml-12 text-firstbule font-arabic relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl">
            مشاكل في التوصيل
          </motion.div>
        </div>
      </div>

      <motion.div
      id="solution1"
  animate={{ y: 200 }}
  initial={{ y: 0 }} 
  whileInView={{ y: 0 }}
  transition={{ ease: "easeOut",duration: 0.25 }}className="flex  items-center justify-center mt-16">
        <Image id="solution3" src={callcenter} className="w-80" alt="Startup" objectFit="contain" />
        <h1 id="solution2" className="text-5xl font-arabic text-firstbule mt-4">&nbsp;الحل كاين عند</h1>
      </motion.div>
      <motion.div 
       id="solution1"
  animate={{ y: 100 }}
  initial={{ y: 50 }} 
  whileInView={{ y: 0 }}
  transition={{ ease: "easeOut",duration: 0.5   }} className="mt-14 flex justify-center items-center">
        <div  className="flex items-center">
          <Image id="solution4" src={dixdirhams} className="h-32 w-32" alt="Startup" objectFit="contain" />
          <h1 id="solution2" className="text-5xl font-arabic text-firstbule">&nbsp;هادشي كاملو غي بــ</h1>
        </div>
      </motion.div>
      <div className="bg-white h-8"></div>
    </div>
  );
};

export default InCardactive;
