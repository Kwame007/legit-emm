import React from "react";
import { IoLogoFacebook, IoLogoLinkedin,IoLogoTwitter, IoLogoYoutube } from "react-icons/io";


const Biography = () => {
  return (
    <section className=" relative pt-36 pb-32">
      <div>
        <div className="px-5 md:max-w-7xl md:mx-auto md:px-5">
          <div className="flex flex-wrap justify-center items-center">
            <div className="mb-8 md:w-3/5">
              <span className="text-lg text-bright uppercase mb-3 font-bold leading-7">
                About Me
              </span>
              <h2 className="font-bold leading-8 mb-5 text-3xl text-gray-800 md:text-5xl md:mb-8">
                Better design,
                <span className="md:block">better experience</span>
              </h2>
              <p className="text-base font-medium leading-6 text-gray-400 md:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus alias possimus dolore veritatis blanditiis eum et eos
                eaque architecto maxime.
              </p>
            </div>
            <div className="w-full md:w-2/5">
              <h3 className="text-2xl text-gray-800 mb-6 leading-6 font-semibold">
                Let's get in touch 🤝
              </h3>
              <p className="text-gray-400 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                praesentium ipsa dicta, sequi ullam perspiciatis ad ea molestias
                voluptate eum! Officiis sint sunt repudiandae ipsam. Facere
                atque delectus consequatur consectetur.
              </p>
              <div className="flex gap-5">
                <a
                  href=""
                  className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-bright hover:text-white"
                >
                  <IoLogoFacebook />
                </a>
                <a
                  href=""
                  className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-bright hover:text-white"
                >
                  <IoLogoTwitter />
                </a>
                <a
                  href=""
                  className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-bright hover:text-white"
                >
                  <IoLogoYoutube />
                </a>
                <a
                  href=""
                  className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-bright hover:text-white"
                >
                  <IoLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-52 right-0 -z-10 md:bottom-0 md:right-0">
        <svg
          width="60"
          height="120"
          viewBox="0 0 60 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="60"
            fill="url(#paint0_radial_18:24)"
          ></circle>
          <defs>
            <radialGradient
              id="paint0_radial_18:24"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(60) rotate(90) scale(120)"
            >
              <stop stop-color="white"></stop>
              <stop offset="0.569" stop-color="#F0F4FD"></stop>
              <stop offset="0.993" stop-color="#D9E0F0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Biography;
