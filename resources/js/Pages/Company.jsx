import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Logo from "@/Images/perta.png";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";
import Navbar from "@/Components/Navbar";

const Company = () => {
    const cardData = [
         { name: 'PT.PERTAMINA',Company: 'BUMN',address: 'Batam'},
         { name: 'PT.PERTAMINI',Company: 'BUMN',address: 'Batam'},
         { name: 'PT.PERTAMAX',Company: 'BUMN',address: 'Batam'},
         { name: 'PT.PERTALITE',Company: 'BUMN',address: 'Batam'},
         { name: 'PT.PERTAMINA',Company: 'BUMN',address: 'Batam'},
         { name: 'PT.PERTAMINA',Company: 'BUMN',address: 'Batam'},
        
          
        
      ];

    const [searchText, setSearchText] = useState("");
    const [filterOption, setFilterOption] = useState("");
    const [filterType, setFilterType] = useState("");
  
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
  
    const handleFilterOptionChange = (event) => {
      setFilterOption(event.target.value);
    };
  
    const handleFilterTypeChange = (event) => {
      const { value, checked } = event.target;
    
      if (checked) {
        setFilterType([...filterType, value]);
      } else {
        setFilterType(filterType.filter((type) => type !== value));
      }
    };
  
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
    <BrowserRouter basename="/company">
      <Navbar />
       <section className="section relative flex p-3 h-screen h-full" >
      <div className="w-1/4">
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
        className="flex flex-col mt-16 ml-3 items-start bg-white p-3 rounded-lg shadow-md " 
        >
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 1 } }}
        className="w-full mb-12 flex "
        >
          <input
            type="text"
            placeholder="Find Company"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full border  px-4 py-0 rounded shadow-md  focus:outline-none "
          />
        </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
          exit={{ opacity: 0, x: -100, transition: { duration: 1.2 } }}
          className="w-full mb-5"
          >
            <select
              value={filterOption}
              onChange={handleFilterOptionChange}
              className="w-full border  px-4 py-1 rounded-lg shadow-md  focus:outline-none transition duration-500 transform hover:scale-105"
              >
              <option value="">Field Of Company</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.3 } }}
          exit={{ opacity: 0, x: -100, transition: { duration: 1.3 } }}
          className="w-full mb-10"
          >
            <select
              value={filterOption}
              onChange={handleFilterOptionChange}
              className="w-full border  px-4 py-1 rounded-lg shadow-md  focus:outline-none transition duration-500 transform hover:scale-105"
              >
              <option value="">Type Of Company</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </motion.div>
            <div className="flex justify-center">
              <button href="#" className="inline-flex items-center px-5 py-0.5 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 md:px-12 md:py-3 lg:px-28 lg:py-0 mx-auto transition duration-500 transform hover:scale-105">Search</button>
            </div>
        </motion.div>  
      </div>
      <div className="flex flex-wrap justify-center mt-16">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
            className="p-1 bg-white rounded-xl border-2 shadow-xl ml-5 mb-5 relative flex justify-center items-center"
            style={{ width: "370px", height: "280px" }}
          >
            <div className="w-full max-w-md flex flex-col justify-center items-center">
              <div className="w-24 h-24 self-center mb-4">
                <img src={Logo} alt="" className="w-24 h-24 rounded-md" />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-500 mb-5">{card.name}</h2>
                <p className="mt-2 text-lg">{card.email}</p>
                <p className="text-lg">{card.Company}</p>
                {card.address && <p className="text-lg">{card.address}</p>}
              </div>
              <button  className="mt-3 text-center">
                <Link href={route("companyDescription")} className="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">VIEW MORE</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute flex bg-white rounded-lg justify-center bottom-5 lg:right-1/4 lg:left-1/3 left-28 lg:top-[1000px] top-[1900px] lg:ml-20">
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

export default Company
