import React from "react";
import blogImg from "../images/news-1.jpeg";
import blogImg1 from "../images/news-3.jpeg";
import blogImg2 from "../images/news-2.jpeg";

const Blog = () => {
  return (
    <section className="relative pt-36 pb-32 bg-hero-bg">
      <div>
        <div className="px-5 md:max-w-7xl md:mx-auto md:px-5">
          <div className="mb-8 text-center ">
            <span className="text-lg text-bright uppercase mb-3 font-bold leading-7">
              Recent Posts 📚
            </span>
            <h2 className="font-bold leading-8 mb-5 text-3xl text-gray-800 md:text-5xl md:mb-8">
              From the blog
            </h2>
            <p className="text-base font-medium leading-6 text-gray-400 mx-auto md:max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              alias possimus dolore veritatis blanditiis eum et eos eaque
              architecto maxime.
            </p>
          </div>

          <div className="  grid grid-cols-1 gap-5 py-12 md:grid-cols-3 cursor-pointer md:gap-5 md:text-left">
            <div className="bg-white h-max-content rounded-xl shadow-lg cursor-pointer  transition-all duration-500">
              <div>
                <a href="">
                  <img src={blogImg} alt="" className="w-full" />
                </a>
                <div className="py-8 px-6">
                  <a href="">
                    <h4 className="text-xl text-gray-800 leading-8 font-bold mb-3">
                      User Research
                    </h4>
                  </a>
                  <p className="text-gray-400 text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    dolore nisi recusandae!
                  </p>
                  <a href="" className="text-sm font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white h-max-content rounded-xl shadow-lg cursor-pointer  transition-all duration-500">
              <div>
                <a href="">
                  <img src={blogImg2} alt="" className="w-full" />
                </a>
                <div className="py-8 px-6">
                  <a href="">
                    <h4 className="text-xl text-gray-800 leading-8 font-bold mb-3">
                      User Research
                    </h4>
                  </a>
                  <p className="text-gray-400 text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    dolore nisi recusandae!
                  </p>
                  <a href="" className="text-sm font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white h-max-content rounded-xl shadow-lg cursor-pointer  transition-all duration-500">
              <div>
                <a href="">
                  <img src={blogImg1} alt="" className="w-full" />
                </a>
                <div className="py-8 px-6">
                  <a href="">
                    <h4 className="text-xl text-gray-800 leading-8 font-bold mb-3">
                      User Research
                    </h4>
                  </a>
                  <p className="text-gray-400 text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    dolore nisi recusandae!
                  </p>
                  <a href="" className="text-sm font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
