'use client'


import Image from 'next/image';
import React, { useState } from 'react';
import callcenter from '../../public/kallcenterblache.png';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../../styles/globals.css';

const Formulaire = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numtelephone, setNumtelephone] = useState('');
  const [nbcommands, setNbcommands] = useState('');

  const sendMail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone_number: numtelephone, numbercmd: nbcommands }),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setNumtelephone('');
        setNbcommands('');
        alert('Email sent successfully!');
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div id='all7' className="bg-gradient-to-r from-firstbule via-secondule to-trithbule flex flex-col items-center justify-start text-white overflow-hidden shadow-2xl">
      <div className="flex items-center justify-center mt-10">
        <Image id='ca' src={callcenter} className="w-80" alt="Startup" objectFit="contain" />
        <h1 id="tit11" className="text-5xl text-white font-arabic">&nbsp;بغيت نخدم مع</h1>
      </div>
      <form  id='form2' onSubmit={sendMail}>
        <div id='forms1' className="flex justify-center items-center mr-24 mt-10 ">
          <div id='into' className="relative">
            <input
            id='inp'
              type="text"
              className="ml-20 pl-10 pr-10 py-2 border text-black rounded-md font-arabic focus:border-gray-400"
              style={{ direction: 'rtl' }}
              placeholder="رقم الهاتف"
              value={numtelephone}
              onChange={(e) => {
                setNumtelephone(e.target.value);
              }}
            />
            <FaPhone id='into1' className="absolute top-1/2 transform -translate-y-1/2 right-4 text-black" />
          </div>
          <div className=" relative">
            <input
            id='inp1'
              type="text"
              className="ml-20 pl-10 pr-10 py-2 border text-black rounded-md font-arabic focus:border-gray-400"
              style={{ direction: 'rtl' }}
              placeholder="الإسم الكامل"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FaUser id='into1' className="absolute top-1/2 transform -translate-y-1/2 right-4 text-black" />
          </div>
        </div>
        <div id='forms1' className="mt-8 mr-24 flex">
          <div className=" relative">
          <input
                id='inp6'
              type="email"
              className="ml-20 pl-10 pr-10 py-2 border text-black rounded-md font-arabic focus:border-gray-400"
              style={{ direction: 'rtl' }}
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
                   <FaEnvelope id='into2' className="absolute top-1/2 transform -translate-y-1/2 right-4 text-black" />
          </div>
          <div className=" relative">
          <input
              id='inp2'
              type="number"
              className="ml-20 pl-10 pr-10 py-2 border text-black rounded-md font-arabic focus:border-gray-400"
              style={{ direction: 'rtl' }}
              placeholder="عدد الطلبيات اليومية"
              value={nbcommands}
              onChange={(e) => {
                setNbcommands(e.target.value);
              }}
            />

          </div>
        </div>
        <div>
          <button id='irsal' type="submit" className="flex-1 mt-9 ml-56 text-center w-80 py-2 rounded-lg bg-amber-600 font-arabic">
            إرسال
          </button>
        </div>
      </form>

      <div>
        <ul className="flex justify-center mt-20 space-x-5 ">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Formulaire;