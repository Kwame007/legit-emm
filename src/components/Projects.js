import React from "react";
import img1 from "../images/balazs-ketyi-FeuEg-8XlA8-unsplash.jpg";
import img2 from "../images/john-jennings-fg7J6NnebBc-unsplash.jpg";
import img3 from "../images/krisztian-tabori-IyaNci0CyRk-unsplash.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="mt-20 p-5 ">
      <div className="grid grid-cols-1 gap-5 p-5  md:gap-20 md:max-w-7xl md:mx-auto">
        <header>
          <h2 className="font-extrabold text-4xl text-gray-800 md:text-7xl">
            Recent Projects
          </h2>
          <span className="pt-5 flex gap-2  md:pt-8 md:gap-5">
            <span>
              <div className="w-5 mt-2 border border-h-100 md:w-10"></div>
            </span>
            <p className="text-base font-medium leading-6 text-gray-400 md:max-w-xl ">
              💼 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores ad porro placeat commodi architecto magni?✨...ad porro
              placeat commodi architecto magni?
            </p>
          </span>
        </header>
        <aside className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 ">
          <motion.div
            className="bg-white-500 rounded-md max-h-max shadow-md cursor-pointer md:w-4/5 md:mx-auto "
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.89 }}
            whileHover={{ scale: 1.01 }}
          >
            <div>
              <img
                src={img1}
                alt="project"
                className=" w-full h-52 object-cover rounded-t-md"
              />
            </div>
            <div className="px-5">
              <span className="flex flex-wrap my-5 gap-2 text-gray-500 w-100">
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Adobe XD
                </small>
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Canva
                </small>
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Figma
                </small>
              </span>
              <span>
                <p className="pb-5 text-base font-medium leading-6 text-gray-400 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente veritatis ex quis esse, maxime cumque minus pariatur
                  architecto nam assumenda.
                </p>
                <button className="w-1/2 bg-bright text-white text-sm tracking-wider mb-3 py-2 rounded-md transition-all duration-500 hover:bg-gray-800">
                  View Project
                </button>
              </span>
            </div>
          </motion.div>
          <motion.div
            className="bg-white-500 rounded-md max-h-max shadow-md cursor-pointer md:w-4/5 md:mx-auto "
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.89 }}
            whileHover={{ scale: 1.01 }}
          >
            <div>
              <img
                src={img2}
                alt="project"
                className=" w-full h-52 object-cover rounded-t-md"
              />
            </div>
            <div className="px-5">
              <span className="flex flex-wrap my-5 gap-2 text-gray-500 w-100">
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Adobe XD
                </small>
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Canva
                </small>
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Figma
                </small>
              </span>
              <span>
                <p className="pb-5 text-base font-medium leading-6 text-gray-400 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente veritatis ex quis esse, maxime cumque minus pariatur
                  architecto nam assumenda.
                </p>
                <button className="w-1/2 bg-bright text-white text-sm tracking-wider mb-3 py-2 rounded-md transition-all duration-500 hover:bg-gray-800">
                  View Project
                </button>
              </span>
            </div>
          </motion.div>
          <motion.div
            className="bg-white-500 rounded-md max-h-max shadow-md cursor-pointer md:w-4/5 md:mx-auto "
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.89 }}
            whileHover={{ scale: 1.01 }}
          >
            <div>
              <img
                src={img3}
                alt="project"
                className=" w-full h-52 object-cover rounded-t-md"
              />
            </div>
            <div className="px-5">
              <span className="flex flex-wrap my-5 gap-2 text-gray-500 w-100">
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Adobe XD
                </small>
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Canva
                </small>
                <small className="border px-4 py-1 border-h-100 rounded-md">
                  Figma
                </small>
              </span>
              <span>
                <p className="pb-5 text-base font-medium leading-6 text-gray-400 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente veritatis ex quis esse, maxime cumque minus pariatur
                  architecto nam assumenda.
                </p>
                <button className="w-1/2 bg-bright text-white text-sm tracking-wider mb-3 py-2 rounded-md transition-all duration-500 hover:bg-gray-800">
                  View Project
                </button>
              </span>
            </div>
          </motion.div>
        </aside>
      </div>
    </section>
  );
};

export default Projects;
