import React, { useContext } from "react";
import { context } from "../context/ContextProvider";
import { motion } from "framer-motion";
import Button from "./Button";
import useScrollPosition from "../hooks/useScrollPosition";

const Navigation = () => {
  const { isShowing, toggleIsShowing } = useContext(context);
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);

  // join all classes together
  const classes = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      <header
        className={classes(
          scrollPosition > 0 ? "shadow" : "shadow-none",
          scrollPosition > 0 ? "bg-fade" : "bg-white",
          "h-100 transition-all duration-500  sticky  md:top-0 md:z-50"
        )}
      >
        <nav className=" hidden    md:flex md:items-center md:font-monserat md:p-5 md:max-w-7xl md:mx-auto">
          <div className="w-2/12">
            <h4>Logo</h4>
          </div>
          <div className="w-8/12  text-lg text-gray-800 ">
            <ul className="flex justify-around font-semibold w-6/12 mx-auto">
              <li>
                <a href="https://www.google.com" className="hover:underline ">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.google.com" className="hover:underline ">
                  Biography
                </a>
              </li>
              <li>
                <a href="https://www.google.com" className="hover:underline ">
                  Skills
                </a>
              </li>
              <li>
                <a href="https://www.google.com" className="hover:underline ">
                  Work
                </a>
              </li>
              <li>
                <a href="https://www.google.com" className="hover:underline ">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="w-2/12 flex justify-center">
            <Button
              className="bg-gray-800 text-white rounded-full p-2 w-4/5 tracking-wider font-muly hover:bg-bright hover:font-black md:transition-all duration-500"
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Me
            </Button>
          </div>
        </nav>
      </header>
      {!isShowing && (
        <nav
          className={classes(
            scrollPosition > 0 ? "shadow" : "shadow-none",
            scrollPosition > 0 ? "bg-fade" : "bg-white",
            " h-20 w-full p-5 transition-all duration-500  sticky top-0 font-muly z-40 md:hidden "
          )}
        >
          <div className="flex  justify-between items-center h-10">
            <h3 className="text-lg font-bold">Logo</h3>
            <motion.div
              className="bg-gray-800 rounded-lg p-2"
              animate={{ scale: 1 }}
              whileTap={{ scale: 0.59 }}
              onClick={toggleIsShowing}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-7 text-4xl text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </motion.div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
