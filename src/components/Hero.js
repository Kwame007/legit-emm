import React from "react";
import image from "../images/hero-image.png";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <header className="relative py-10 flex justify-center items-start bg-hero-bg h-hero-hm md:rounded-bl-hero-r md:items-center md:h-hero-h ">
        <aside className="px-5 md:max-w-7xl md:mx-auto md:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" z-10">
              <h1 className="text-base text-bright font-semibold leading-6 mb-5">
                Hi There 👋 I am
                <br />
                <span className="font-bold text-3xl mt-3 text-gray-800 leading-5 block">
                  Legit Emmanuel
                </span>
                {/* <motion.div
                  className="inline-block"
                  animate={{
                    translateY: [-10, 0],
                    transition: {
                      yoyo: Infinity,
                    },
                  }}
                >
                  
                </motion.div> */}
              </h1>
              <h2 className="leading-7 text-lg font-medium mb-5 text-gray-400">
                Professional{" "}
                <span className="text-gray-700">Graphic Designer & Writer</span>
              </h2>
              <span className=" block max-w-sm md:max-w-lg">
                <p className=" text-gray-500 font-medium leading-6 mb-11 text-base md:leading-7 md:font-muly md:text-lg  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas ducimus beatae dicta!
                </p>
              </span>

              <div className="grid grid-cols-2 justify-center items-center gap-5 text-center text-white ">
                <a
                  href=""
                  className="bg-bright px-8 py-3 font-semibold rounded-full md:w-4/5 "
                >
                  Contact Me
                </a>
                <a
                  href=""
                  className=" bg-gray-800 px-8 py-3 font-semibold rounded-full md:w-4/5"
                >
                  Learn More
                </a>
              </div>
              {/* <Button
                className="bg-red-200 text-gray-700 rounded-lg p-2 mr-0 my-5 w-full tracking-wider font-muly hover:bg-red-300 md:w-52 md:p-4 hover:font-black md:transition-all duration-1000"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                Hire me ✅
              </Button> */}
            </div>
            <div className="absolute bottom-0 right-10 z-10">
              <div className="">
                <img src={image} alt="hero-image" className="0" />
              </div>
            </div>
          </div>
        </aside>
        <aside>
          <span className="absolute top-0 left-0">
            <svg
              width="48"
              height="95"
              viewBox="0 0 48 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="0.5"
                cy="47.5"
                r="47.5"
                fill="url(#paint0_radial_6:121)"
              ></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_6:121"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0.5) rotate(90) scale(95)"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="0.569" stop-color="#F0F4FD"></stop>
                  <stop offset="0.993" stop-color="#D9E0F0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute bottom-0 right-0">
            <svg
              width="491"
              height="490"
              viewBox="0 0 491 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="356.5" cy="356.5" r="356.5" fill="#F05454"></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_6:37"
                  x1="356.5"
                  y1="0"
                  x2="356.5"
                  y2="713"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4A6CF7"></stop>
                  <stop offset="1" stop-color="#1E3BB3"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          {/* <div className="absolute bottom-0 right-10 z-10 md:-bottom-10">
            <img src={image} alt="" class="af a21" />
          </div>
          <div className=" absolute bottom-0 right-0"> */}
          {/* <img src={image} alt="" className="block pt-8" /> */}
          {/* <div>
              <svg
                width="491"
                height="490"
                viewBox="0 0 491 490"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="356.5"
                  cy="356.5"
                  r="356.5"
                  fill=" #3e3b6b"
                ></circle>
                <defs>
                  <linearGradient
                    id="paint0_linear_6:37"
                    x1="356.5"
                    y1="0"
                    x2="356.5"
                    y2="713"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4A6CF7"></stop>
                    <stop offset="1" stop-color="#1E3BB3"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div> */}
          {/* <div></div> */}
          {/* </div> */}
        </aside>
      </header>
    </>
  );
};

export default Hero;
