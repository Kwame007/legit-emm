import React from "react";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="pt-36 pb-32 bg-gray-800 relative">
      <div className="px-5 md:max-w-7xl md:mx-auto md:px-5">
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 border-b-2">
          <div className="px-4 mb-5">
            <h2 className="text-4xl font-bold text-white mb-5">
              Let's Talk ✋
            </h2>
            <h3 className="font-bold text-2xl text-white">Contact Info</h3>
            <p className="font-medium text-white mb-1">closerpage@email.com</p>
            <p className="font-medium text-white mb-1">
              12 Hilton St, Manchester M1 1JF
            </p>
            <p className="font-medium text-white mb-1">+44 012 34 5678</p>
          </div>
          <div className="px-4 mb-5">
            <h3 className="font-bold text-xl mb-8 text-white">What I Do? 🤔</h3>
            <p className="font-medium text-white mb-3">closerpage@email.com</p>
            <p className="font-medium text-white mb-3">
              12 Hilton St, Manchester M1 1JF
            </p>
            <p className="font-medium text-white mb-3">+44 012 34 5678</p>
          </div>
          <div className="px-4 mb-5">
            <h3 className="font-bold text-xl mb-8 text-white">News 📰</h3>
            <p className="font-medium text-white mb-3">closerpage@email.com</p>
            <p className="font-medium text-white mb-3">
              12 Hilton St, Manchester M1 1JF
            </p>
            <p className="font-medium text-white mb-3">+44 012 34 5678</p>
          </div>
        </div>
        <div>
          <div className="text-center block">
            <div className="flex gap-5 justify-center my-5">
              <a
                href=""
                className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-white hover:text-gray-800"
              >
                <IoLogoFacebook />
              </a>
              <a
                href=""
                className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-white hover:text-gray-800"
              >
                <IoLogoTwitter />
              </a>
              <a
                href=""
                className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-white hover:text-gray-800"
              >
                <IoLogoYoutube />
              </a>
              <a
                href=""
                className="w-10 h-10 flex justify-center items-center border rounded-full hover:bg-white hover:text-gray-800"
              >
                <IoLogoLinkedin />
              </a>
            </div>
            <small className="text-white block font-semibold">
              All rights reserved &copy; {`${today.getFullYear()}`}
            </small>
            <small className="text-white block my-3 font-medium">
              Built with ❤️ by{" "}
              <a href="" className="underline hover:text-blue-600">
                @kwame007
              </a>{" "}
            </small>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-2 right-1">
          <svg
            width="61"
            height="77"
            viewBox="0 0 61 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="45.0001"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 45.0001 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 16.0001 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 59.0001 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 30.6668 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="1.66667"
                r="1.66667"
                transform="rotate(90 1.66683 1.66667)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 45.0001 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 16.0001 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 59.0001 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 30.6668 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="16.3332"
                r="1.66667"
                transform="rotate(90 1.66683 16.3332)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 45.0001 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 45.0001 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 16.0001 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 16.0001 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 59.0001 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 59.0001 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 30.6668 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 30.6668 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="31.0002"
                r="1.66667"
                transform="rotate(90 1.66683 31.0002)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="74.6667"
                r="1.66667"
                transform="rotate(90 1.66683 74.6667)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 45.0001 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 16.0001 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 59.0001 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 30.6668 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="45.6667"
                r="1.66667"
                transform="rotate(90 1.66683 45.6667)"
                fill="white"
              ></circle>
              <circle
                cx="45.0001"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 45.0001 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="16.0001"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 16.0001 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="59.0001"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 59.0001 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="30.6668"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 30.6668 60.3332)"
                fill="white"
              ></circle>
              <circle
                cx="1.66683"
                cy="60.3332"
                r="1.66667"
                transform="rotate(90 1.66683 60.3332)"
                fill="white"
              ></circle>
            </g>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="white"
            ></path>
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="white"
            ></path>
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="white"
            ></path>
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 #F05454.575 186.165 281.856 215.481"
              stroke="white"
            ></path>
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            ></circle>
            <circle
              cx="220"
              cy="63"
              r="43"
              fill="url(#paint5_radial_25:218)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#4A6CF7"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop
                  offset="0.145833"
                  stop-color="white"
                  stop-opacity="0"
                ></stop>
                <stop offset="1" stop-color="white" stop-opacity="0.08"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
