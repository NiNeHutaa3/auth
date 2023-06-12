import React, { useState } from 'react';
import Logo from "@/Images/rename.png";
import Profile from "@/Images/org.png";
import Tabel from "@/Components/Tabel"
import ProfilePicture from "@/Images/head.png";
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { AiOutlineHome } from 'react-icons/ai'
import { GiLockers } from 'react-icons/gi'
import { MdOutlineFactory } from 'react-icons/md'
import { HiUser } from 'react-icons/hi'

const TalentIndex = (auth) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <div className="flex bg-gray-50 flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="text-gray-400 hover:text-gray-800 focus:outline-none lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            <img src={Logo} alt="Logo" className="h-8 ml-2" />
          </div>
          <div className="relative z-10">
            <button
              className="bg-transparent text-gray-400 hover:text-gray-800 focus:outline-none"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <FaUser size={20} />
            </button>
            <Transition
              show={isOpen1}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  ref={ref}
                  className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-20"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <Link
                    href={route("logout")}
                    method='post'
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </Transition>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar for Large Screens */}
        <aside className="hidden lg:flex w-64 bg-black text-white">
          <div className="p-4">
          <img src={Logo} alt="Logo" className="h-20 mx-auto mb-12" />
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <AiOutlineHome className="mr-2" />
                    Experience
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("vacancy")}
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <GiLockers className="mr-2" />
                    Achievement
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("company")}
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <MdOutlineFactory className="mr-2" />
                    About Me
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("talent")}
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <HiUser className="mr-2" />
                    Education
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href={route("talent")}
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <HiUser className="mr-2" />
                    Organization Experience
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Sidebar Transition for Small Screens */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 transform -translate-x-full"
          enterTo="opacity-100 transform translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 transform translate-x-0"
          leaveTo="opacity-0 transform -translate-x-full"
          className="fixed inset-y-0 left-0 z-30 w-64 bg-black text-white lg:hidden"
        >
          <div className="p-4">
            <div className="flex justify-end">
              <button
                className="text-gray-400 hover:text-gray-200 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>
            <img src={Logo} alt="Logo" className="h-20 mx-auto mb-12" />
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <AiOutlineHome className="mr-2" />
                    Experience
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <GiLockers className="mr-2" />
                    Achievement
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <MdOutlineFactory className="mr-2" />
                    About Me
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <HiUser className="mr-2" />
                    Education
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-200 transition-colors duration-300"
                >
                  <button className="flex items-center w-full bg-black text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-600 hover:text-white text-left">
                    <HiUser className="mr-2" />
                    Organization Experience
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </Transition>

        {/* Main Content */}
        <div className="w-full">
          {/* Dashboard */}
          <div className="p-4">
            {/* Dashboard content */}
          </div>

          {/* Cards */}
          <Tabel />
          <div className="flex flex-wrap justify-between p-4">
            <div className="w-full lg:w-1/2 bg-blue-100 h-full p-4 mb-4">
            <div className="p-4 flex flex-col">
                <h2 className="text-xl font-bold mb-2">Profile</h2>
                <hr className="border-t border-gray-400 mb-2" />
                <div className="flex">
                  <p className="w-1/4 text-lg">NIM</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">4342211025</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Name</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">Niko E Hutagalung</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Address</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">-</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Phone</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">-</p>
                </div>
                <div className="flex">
                  <p className="w-1/4 text-lg">Email</p>
                  <p className='w-3'>:</p>
                  <p className="w-2/3 text-lg">nikoedward@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-blue-100 h-full p-4 mb-4">
            <div className="relative">
                <div
                  className="absolute top-0 left-0 right-0 h-16 rounded-t-lg"
                  style={{
                    backgroundImage: `url(${ProfilePicture})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>
              </div>
              <img
                src={Profile}
                alt="Profile Picture"
                className="h-16 w-16 rounded-full bg-gray-200 mx-auto mt-7 relative z-10"
              />
              <div className="p-4">
                <h2 className="text-center text-xl mt-2">Niko Edward Hutagalung</h2>
                <h2 className="text-center text-base text-gray-400 mt-2">
                  Teknologi Rekayasa Perangkat Lunak
                </h2>
                <div className="flex justify-center">
                  <button className="bg-blue-500 w-11/12 py-1.5 hover:bg-blue-700 text-white font-bold mt-4  rounded">
                    Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-white h-full p-4 mb-4">
  <h2 className="text-xl font-bold mb-2">Potofolio</h2>
  <hr className="mb-2" />
  <div className="grid text-center grid-cols-3 gap-4">
    <div>
      <h3 className="text-lg ">Mark</h3>
      <a>-</a>
    </div>
    <div>
      <h3 className="text-lg ">Education</h3>
      <a>-</a>
    </div>
    <div>
      <h3 className="text-lg ">Address</h3>
      <a>-</a>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentIndex;
