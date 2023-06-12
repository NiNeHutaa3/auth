import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "@/Images/Bank.png";
import Image2 from "@/Images/Faq.png";
import Image3 from "@/Images/org.png";

const Number = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
  
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    React.useEffect(() => {
      let interval1, interval2, interval3;
      if (inView) {
        interval1 = setInterval(() => {
          setCount1((prevCount) =>
            prevCount >= 411 ? prevCount : prevCount + 1
          );
        }, 50);
  
        interval2 = setInterval(() => {
          setCount2((prevCount) =>
            prevCount >= 12 ? prevCount : prevCount + 1
          );
        }, 500);
  
        interval3 = setInterval(() => {
          setCount3((prevCount) =>
            prevCount >= 644 ? prevCount : prevCount + 1
          );
        }, 0.01);
      }
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }, [inView]);
  
    
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32" ref={ref}>
      <motion.div
        className="flex items-center bg-white shadow-md rounded-lg p-4 flex-1"
        whileHover={{ scale: 1.05 }}
        animate={
          inView
            ? {
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5 },
              }
            : { y: 20, opacity: 0 }
        }
      >
        <img className="h-12 w-12 mr-2" src={Image1} alt="gambar" />
        <motion.div className="flex flex-col">
          <span className="text-xl text-blue-600 font-bold mb-0">{count1}</span>
          <span className="text-2xl text-blue-500 font-medium">Industry</span>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex items-center bg-white shadow-md rounded-lg p-4 flex-1"
        whileHover={{ scale: 1.05 }}
        animate={
          inView
            ? {
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5 },
              }
            : { y: 20, opacity: 0 }
        }
        >
        <img className="h-12 w-12 mr-2" src={Image2} alt="gambar" />
        <motion.div 
          className="flex flex-col">
          <span className="text-xl text-blue-600 font-bold mb-0">{count2}</span>
          <span className="text-2xl text-blue-500 font-medium">Job Vacancy</span>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex items-center bg-white shadow-md rounded-lg p-4 flex-1"
        whileHover={{ scale: 1.05 }}
        animate={
          inView
            ? {
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5 },
              }
            : { y: 20, opacity: 0 }
        }
        >
        <img className="h-12 w-12 mr-2" src={Image3} alt="gambar" />
        <motion.div 
          className="flex flex-col">
          <span className="text-xl text-blue-600 font-bold mb-0">{count3}</span>
          <span className="text-2xl text-blue-500 ">Student</span>
        </motion.div>
      </motion.div>
    </div>
    </div>
  )
}

export default Number
