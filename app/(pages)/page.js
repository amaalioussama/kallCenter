
'use client'
import Navbar from '../../modules/Global/Navbar/index.jsx';
import Active from '../../components/first/active/index.jsx';
import Inactive from '../../components/first/inactive/index.jsx';
import Cardactive from '../../components/second/second&Active/index.jsx'
import React, { useState } from 'react';
import Workmethode from "../../components/workway/index.jsx"
import InCardactive from '../../components/second/second&Inactive/index.jsx'
import Wrokwith from "../../components/workwith/index.jsx"
import Colab from'../../components/colaborations/index.jsx'
import Livraison from '../../components/laivraison/index.jsx'
import Sclivraison from '../../components/societeliv/index.jsx'
import Activation from '../../components/stats/acceptation/index.jsx'
import Livstat from '../../components/stats/livraison/index.jsx'
import Formulaire from '../../components/formulaire/index.jsx'
export default function Home() {
  const [isActive, setIsActive] = useState(false); 

  return (
    <main>
      <Navbar />

      {isActive ? <Active isActive={isActive} setIsActive={setIsActive} />   : <Inactive isActive={isActive} setIsActive={setIsActive} />}
      {isActive ? <Cardactive /> : <InCardactive />}
      <Workmethode />
      <Wrokwith/>
      <Colab />
     
      {isActive ? <Livstat isActive={isActive} setIsActive={setIsActive} />   : <Activation isActive={isActive} setIsActive={setIsActive} />}
      <Livraison/>
      <Sclivraison />
      <Formulaire />
    </main>
  );
}
