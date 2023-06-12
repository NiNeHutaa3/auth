import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Logo from "@/Images/talent.png";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";
import Navbar from "@/Components/Navbar";

const Talent = () => {
    const cardData = [
        { name: 'Tiyo Saputra', email: 'tiyospt@gmail.com', address: 'Tiban', linkedin: 'Linkedin' },
        { name: 'John Doe', email: 'johndoe@gmail.com', address: 'New York', linkedin: 'Linkedin' },
    { name: 'Jane Smith', email: 'janesmith@gmail.com', address: 'London', linkedin: 'Linkedin' },
    { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', address: 'Los Angeles', linkedin: 'Linkedin' },
    { name: 'Emily Davis', email: 'emilydavis@gmail.com', address: 'Paris', linkedin: 'Linkedin' },
    { name: 'Robert Wilson', email: 'robertwilson@gmail.com', address: 'Sydney', linkedin: 'Linkedin' },
    { name: 'Emma Brown', email: 'emmabrown@gmail.com', address: 'Toronto', linkedin: 'Linkedin' },
    { name: 'William Taylor', email: 'williamtaylor@gmail.com', address: 'Berlin', linkedin: 'Linkedin' },
    { name: 'Olivia Anderson', email: 'oliviaanderson@gmail.com', address: 'Tokyo', linkedin: 'Linkedin' },
      ];

    let [num,setNum] = useState(1)
    let [cur,setCur] = useState(1)
  
      const pages = [
        {page: num},
        {page: num + 1},
        {page: num + 2},
        {page: num + 3},
      ]
      function Next ()
      {
        setNum(++num)
      }
      function Back ()
      {
        num > 1 &&  setNum(--num)
      }
  
      const paginationVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
      }
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <section className="section relative flex p-1  h-full" >
      <motion.div
       initial={{ opacity: 0, y: -100 }}
       animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
       exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
      className="flex flex-wrap justify-center mt-5 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-1 border-2 rounded-xl shadow-xl mx-2 mb-4 flex justify-center items-center"
            style={{ width: "350px", height: "300px" }}
          >
            <div className="w-full max-w-md flex flex-col justify-center items-center">
              <div className="w-24 h-20 self-center mb-4">
                <img src={Logo} alt="" className="w-24 h-24 rounded-md" />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-500 mb-2">{card.name}</h2>
                <p className="mt-2 text-lg">{card.email}</p>
                <p className="text-lg">{card.address}</p>
                <p className="text-lg">{card.linkedin}</p>
              </div>
              <button className="mt-6 text-center">
                <Link href={route("talentDescription")} className="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">VIEW MORE</Link>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="absolute flex bg-white rounded-lg justify-center lg:right-1/4 lg:left-1/3 left-24 top-full lg:mr-20">
            <button onClick={Back} className="h-12 border-2 border-r-0 border-blue-600 px-4 rounded-l-lg hover:bg-blue-600 hover:text-white">
              <AiOutlineLeft />
            </button>
            {
              pages.map((pg, i) => (
                <button key={i} onClick={() => setCur(pg.page)} className={`h-12 border-2 border-r-0 border-blue-600 w-12 ${cur === pg.page && 'bg-blue-600 text-white'}`}>{pg.page}</button>
              ))
            }
            <button onClick={Next} className="h-12 border-2  border-blue-600 px-4 rounded-r-lg hover:bg-blue-600 hover:text-white">
              <AiOutlineRight />
            </button>
          </div>
    </section>
    </BrowserRouter>
  )
}

export default Talent
