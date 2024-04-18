
"use client";

import React, { useState } from 'react';
import diagram from '../../../public/graphelivraison.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import CountUp from 'react-countup';

const Activation = ({ isActive, setIsActive }) => {
  const [counters, setCounters] = useState({
    commande: 0,
    confirmation: 0,
    clients: 0,
    satisfaction: 0,
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView) {
    if (counters.commande === 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        commande: 50,
      }));
    }
    if (counters.confirmation === 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        confirmation: 25,
      }));
    }
    if (counters.clients === 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        clients: 88,
      }));
    }
    if (counters.satisfaction === 0) {
      setCounters((prevCounters) => ({
        ...prevCounters,
        satisfaction: 94,
      }));
    }
  }

  return (
    <div className="bg-white shadow-2xl">
      <div className='felx justify-center items-center'>
      <div className="flex items-center justify-center mt-20">
        <h1 id="tit" className="text-5xl text-firstbule font-arabic">إحصائيات</h1>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center w-48 h-48">
          <div className="flex justify-center items-center rounded-lg border-solid border-2 border-firstbule">
            <button
            id='tit'
              onClick={() => setIsActive(true)}
              className={`flex-1 text-center py-2 font-arabic rounded-none ${
                isActive ? 'bg-firstbule text-white font-arabic' : 'text-firstbule font-arabic bg-white'
              }`}
            >
              التوصيل
            </button>
            <button
            id='tit'
              onClick={() => setIsActive(false)}
              className={`flex-1 text-center w-48 py-2 font-arabic rounded-none ${
                !isActive ? 'bg-firstbule font-arabic text-white' : 'text-firstbule font-arabic bg-white'
              }`}
            >
              التأكيد
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center" id="countersContainer">
  <div  className="" id="commandeCounter">

    <h2 id="tit2" className="text-firstbule text-3xl">Nombres des vehicules</h2>
    <br />
    <div id='rem'>
    <h1 id='par1' className="flex text-firstbule text-7xl ml-9">
      + <CountUp start={0} end={counters.commande} duration={2.75} />
    </h1>
    </div>
   
    <br />
    <br />
    <br />
    <h2 id="tit3"className="text-firstbule text-3xl">Agents de confirmation</h2>
    <br />
    <div id='rem2'>
    <h1 id='par2' className="flex text-firstbule text-7xl ml-9">
      + <CountUp start={0} end={counters.confirmation} duration={2.75} />
    </h1>
    </div>
   
  </div>
  <div className="mt-12 ml-12 flex" id="diagramContainer">
    <Image id="stat1" src={diagram} className="h-96 w-80" alt="Startup" objectFit="contain" />
  </div>
  <div className="ml-20 flex flex-col" id="clientsCounter">
    <h2 id="tit4" className="text-firstbule text-3xl">Nombres des villes</h2>
    <br />
    <h1 id='par6' className="flex text-firstbule text-7xl ml-9">
      + <CountUp start={0} end={counters.clients} duration={2.75} />
    </h1>
    <br />
    <br />
    <br />
    <h2  id="tit5" className="text-firstbule text-3xl">Taux de satisfaction</h2>
    <br />
    <h1 id='par4' className="flex text-firstbule text-7xl ml-9">
      <CountUp start={0} end={counters.satisfaction} duration={2.75} />%
    </h1>
  </div>
</div>

      <div ref={ref}></div>
      </div>
    </div>
  );
};

export default Activation;
