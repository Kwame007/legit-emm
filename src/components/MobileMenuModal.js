import React, { useContext } from "react";
import { context } from "../context/ContextProvider";
import { motion } from "framer-motion";
import Button from "./Button";

const MobileMenuModal = () => {
  const { toggleIsShowing } = useContext(context);
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-5 z-20"></div>
      {/* mobile navigation */}
      <nav className="bg-gray-800 text-white h-screen w-full p-5 fixed top-0 z-50 font-muly  md:hidden">
        <div className="flex  justify-between items-center h-10">
          <h3 className="text-lg font-bold">Logo</h3>
          <button className="" onClick={toggleIsShowing}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-7 text-4xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 mt-10">
          <ul>
            <li className="mb-14">
              <motion.a
                href="https://www.google.com"
                className="text-2xl leading-7 tracking-wider block "
                initial={{ translateX: -200 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.5 }}
              >
                Home
              </motion.a>
            </li>
            <li className="mb-14">
              <motion.a
                href="https://www.google.com"
                className="text-2xl leading-7 tracking-wider block"
                initial={{ translateX: -200 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.6 }}
              >
                Biography
              </motion.a>
            </li>
            <li className="mb-14">
              <motion.a
                href="https://www.google.com"
                className="text-2xl leading-7 tracking-wider block"
                initial={{ translateX: -200 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.7 }}
              >
                Work
              </motion.a>
            </li>
            <li className="mb-14">
              <motion.a
                href="https://www.google.com"
                className="text-2xl leading-7 tracking-wider block"
                initial={{ translateX: -200 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 0.8 }}
              >
                Blog
              </motion.a>
            </li>
          </ul>
        </div>
        <div className="mt-5 mx-auto w-6/12">
          <Button
            className="bg-bright text-white rounded-lg p-2 w-full font-bold tracking-wider text-lg"
            initial={{ translateY: 200 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Me
          </Button>
        </div>
      </nav>
    </>
  );
};

export default MobileMenuModal;
