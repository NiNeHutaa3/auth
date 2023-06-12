import { BrowserRouter } from 'react-router-dom';
import React, { useState } from "react";
import Logo from "@/Images/640px-Logo_Politeknik_Negeri_Batam.png";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import Navbar from "@/Components/Navbar";
// ...

function Vacancy() {
  const vacancies = [
    {
      id: 1,
      company: "Polibatam Software Team(PS Team)",
      tipe:"Full time",
      position: "Software engineer",
      salary: "5Jt-10Jt",
      requirements: "Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3",
      registrationEnd: "01 Maret 2023"
    },
    {
    id: 2,
    company: "Polibatam Software Team(PS Team)",
    tipe:"Full time",
    position: "Front-end Developer",
    salary: "5Jt-10Jt",
    requirements: "Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3",
    registrationEnd: "01 Maret 2023"
  },
  {
    id: 3,
    company: "Polibatam Software Team(PS Team)",
    tipe:"Full time",
    position: "Data Scientist",
    salary: "5Jt-10Jt",
    requirements: "Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3",
    registrationEnd: "01 Maret 2023"
  },
  {
    id: 4,
    company: "Polibatam Software Team(PS Team)",
    tipe:"Full time",
    position: "Back-end Developer",
    salary: "5Jt-10Jt",
    requirements: "Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3",
    registrationEnd: "01 Maret 2023"
  },
  {
    id: 5,
    company: "Polibatam Software Team(PS Team)",
    tipe:"Full time",
    position: "Full-stack Developer",
    salary: "5Jt-10Jt",
    requirements: "Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3",
    registrationEnd: "01 Maret 2023"
  },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const isLoggedIn = false; // contoh: user belum login

  function handleApplyButtonClick() {
    if (!isLoggedIn) {
      // Jika user belum login, redirect ke halaman login
      window.location.href = '/login';
    } else {
      // Jika user sudah login, tampilkan form pengajuan lamaran
      window.location.href = '/Vacancy/Vacancy1';
    }
  }
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
      <BrowserRouter basename="/">
        <Navbar />
        <section className="section absolute flex h-full">
          <div className="w-1/3 ">
            <motion.div
            name='awal'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
              className="flex flex-col mt-20 ml-5 sm:mt-16 items-start bg-white p-4 rounded-lg shadow-md "
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                exit={{ opacity: 0, x: -100, transition: { duration: 1 } }}
                className="w-full mb-12 flex"
              >
                <input
                  type="text"
                  placeholder="Find Vacancy"
                  value={searchText}
                  onChange={handleSearchChange}
                  className="w-full border  px-4 py-0 rounded-l-lg shadow-md  focus:outline-none"
                />
                <button className="bg-green-400 hover:bg-green-400 text-white shadow-md font-bold py-0 px-2 rounded-r">
                  Search
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
                exit={{ opacity: 0, x: -100, transition: { duration: 1.2 } }}
                className="w-full mb-16"
              >
                <select
                  value={filterOption}
                  onChange={handleFilterOptionChange}
                  className="w-full border  px-4 py-1 rounded-lg shadow-md  focus:outline-none transition duration-500 transform hover:scale-105"
                >
                  <option value="">Field To Work</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
                exit={{ opacity: 0, x: -100, transition: { duration: 1.5 } }}
                className="flex flex-col w-full mb-4"
              >
                <span className="mb-2 font-bold">Offer Tipe</span>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="filterType"
                    value="type1"
                    checked={filterType.includes("type1")}
                    onChange={handleFilterTypeChange}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Full time</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="filterType"
                    value="type2"
                    checked={filterType.includes("type2")}
                    onChange={handleFilterTypeChange}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 ">Contract employees</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="filterType"
                    value="type3"
                    checked={filterType.includes("type3")}
                    onChange={handleFilterTypeChange}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Part time</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="filterType"
                    value="type4"
                    checked={filterType.includes("type4")}
                    onChange={handleFilterTypeChange}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Intern</span>
                </label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.7 } }}
                exit={{ opacity: 0, x: -100, transition: { duration: 1.7 } }}
                className="flex flex-col w-full mb-4"
              >
                <span className="mb-2 font-bold">Experience level</span>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="filterType"
                    value="type5"
                    checked={filterType.includes("type5")}
                    onChange={handleFilterTypeChange}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Entry level</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="filterType"
                    value="type6"
                    checked={filterType.includes("type6")}
                    onChange={handleFilterTypeChange}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Midle level</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="filterType"
                    value="type7"
                    checked={filterType.includes("type7")}
                    onChange={handleFilterTypeChange}
                    className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Senior level</span>
                </label>
                <div className="mt-4 flex justify-center items-center">
                  <button href="#" className="px-8 py-0.5 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 md:px-12 sm:py-1 lg:px-20 lg:py-0 transition duration-500 transform hover:scale-105">SORT</button>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-wrap lg:mt-16 mt-20 ml-5 justify-center">
          {vacancies.map((vacancy) => (
            <motion.div
              key={vacancy.id}
              name='lowongan'
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
              className="p-3 h-64 border-2 rounded-xl shadow-xl ml-20 mb-20 relative"
            >
              <div className="absolute top-0 right-0 mt-3 mr-10">
                <p className="text-sm text-gray-500">{vacancy.tipe}</p>
                <p className="text-sm text-center text-gray-500">Batam</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="w-16 lg:ml-5 h-10 self-start">
                  <img src={Logo} alt="" className="w-20 h-16 rounded-md" />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div className="text-center lg:text-left">
                    <h2 className="text-base font-medium lg:mr-20">{vacancy.company}</h2>
                    <p className="mt-2 text-lg text-blue-700 font-bold mb-2 lg:mr-20">{vacancy.position}</p>
                    <p className="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 lg:mr-20">{vacancy.salary}</p>
                    <p className="mt-2 lg:mr-20">{vacancy.requirements}</p>
                    <p className="mt-2 text-base lg:mr-20">Registration end {vacancy.registrationEnd}</p>
                  </div>
                  <button onClick={handleApplyButtonClick} className="mt-3 lg:mr-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
          <div className="absolute flex bg-white rounded-lg justify-center lg:right-1/4 left-1/3 top-full bottom-0 mb-10 lg:mt-[1050px] mt-[2460px] lg:mr-20">
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
    );
    
}

export default Vacancy;
