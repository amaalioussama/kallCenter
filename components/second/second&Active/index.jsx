'use client'



import { useEffect } from "react";
import Image from "next/image";
import dixdirhams from "../../../public/10dh.png";
import { motion } from "framer-motion";


const Cardactive = () => {

  return (
    <div className="bg-white" id="all5" >

      <div id="all4" className="flex items-center justify-center mt-12 ml-36 max-w-5xl">
        <div id="all4" className="flex items-center justify-center mt-12 ml-36 max-w-5xl" >
          <motion.div
            id="rounded11"
            animate={{ x: 40 }}
            initial={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 3 }}
            whileInView={{ x: 0 }} className="text-firstbule font-arabic relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
            نمتلك فريق متمرس دو جودة عالية
          </motion.div>
          <motion.div
            id="rounded11"
            animate={{ x: 60 }}
            initial={{ x: 40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            whileInView={{ x: 0 }} className="text-firstbule relative font-arabic w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
            نسبة تأكيد <br />الطلبيات <br />مرتفعة
          </motion.div>
          <motion.div
            id="rounded11"
            animate={{ x: 20 }}
            initial={{ x: 40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            whileInView={{ x: 0 }} className="text-firstbule relative font-arabic  w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
            نظام تتبع <br />الطلبيات<br />محترف
          </motion.div>
          <motion.div
            id="rounded11"
            animate={{ x: 60 }}
            initial={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }} whileInView={{ x: 0 }}
            className="text-firstbule relative w-full md:w-44 h-44 font-arabic text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl mb-6 md:mb-0 md:mr-6">
            نظام إعادة <br />استهداف<br />الزبائن
          </motion.div>
        </div>

      </div>


      <div className="flex mt-12 items-center justify-center ">
        <motion.div
          id="rounded11"
          animate={{ x: 40 }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }} className="ml-12 font-arabic md:ml-0 text-firstbule relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl">
          نتوفر على مؤشر أداء دقيق
        </motion.div>
        <motion.div
          id="rounded11"
          animate={{ x: 50 }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }} className="md:ml-12 font-arabic text-firstbule relative w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl">
          خدماتنا ذات جودة و بثمن مناسب
        </motion.div>
        <motion.div
          id="rounded11"
          animate={{ x: 60 }}
          initial={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 1 }}
          whileInView={{ x: 0 }} className="md:ml-12 text-firstbule relative font-arabic w-full md:w-44 h-44 text-2xl bg-cardswhite rounded-full flex justify-center items-center text-center p-5 shadow-xl">
          تواصل مستمر مع شركات التوصيل
        </motion.div>
      </div>
      <motion.div
        id="solution1"
        animate={{ y: 100 }}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }} className="mt-14 flex justify-center items-center">
        <div className="flex items-center">
          <Image id="solution4" src={dixdirhams} className="h-32 w-32" alt="Startup" objectFit="contain" />
          <h1 id="solution2" className="text-5xl font-arabic text-firstbule">&nbsp;هادشي كاملو غي بــ</h1>
        </div>
      </motion.div>
      <div className="bg-white h-8"></div>
    </div>
  );
};

export default Cardactive;
