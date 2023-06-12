import React, { useState } from "react";
import Logo from "@/Images/640px-Logo_Politeknik_Negeri_Batam.png";
import { Link } from "@inertiajs/react";

export default function Navbar({ auth, user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center">
              <img
                src={Logo}
                className="mr-3 h-12 sm:h-10"
                alt="Poltek"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">
                TalentHub
              </span>
            </a>

            {auth ? (
              <Link
                href={route("home")}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <div className="flex items-center lg:order-2">
                  <a
                    href={route("login")}
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Log in
                  </a>
                  <a
                    href={route("register")}
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Register
                  </a>
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2"
                    aria-expanded={isMenuOpen}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Menu icon */}
                    </svg>
                    <svg
                      className={`w-6 h-6 ${isMenuOpen ? "" : "hidden"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Close icon */}
                    </svg>
                  </button>
                </div>
              </>
            )}
            <div
              className={`${
                isMenuOpen ? "" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="/"
                    className={`block py-2 pr-4 pl-3 ${
                      window.location.pathname === "/" ? "text-primary-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href={route("company")}
                    className={`block py-2 pr-4 pl-3 ${
                      window.location.pathname === "/company" ? "text-primary-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href={route("talent")}
                    className={`block py-2 pr-4 pl-3 ${
                      window.location.pathname === "/talent" ? "text-primary-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Talent
                  </a>
                </li>
                <li>
                  <a
                    href={route("vacancy")}
                    className={`block py-2 pr-4 pl-3 ${
                      window.location.pathname === "/vacancy" ? "text-primary-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Vacancy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
