import React from "react";

const ContactMe = () => {
  return (
    <section className="relative pt-36 pb-32">
      <div>
        <div className="px-5 md:max-w-7xl md:mx-auto md:px-5">
          <div className="mb-8 text-center ">
            <span className="text-lg text-bright uppercase mb-3 font-bold leading-7">
              Connect with me 📫
            </span>
            <h2 className="font-bold leading-8 mb-5 text-3xl text-gray-800 md:text-5xl md:mb-8">
              Have a project in mind?
            </h2>
            <p className="text-base font-medium leading-6 text-gray-400 mx-auto md:max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              alias possimus dolore veritatis blanditiis eum et eos eaque
              architecto maxime.
            </p>
          </div>

          <div className="mx-auto md:max-w-5xl">
            <div className="md:px-4">
              <form>
                <div className="flex flex-wrap">
                  <div className=" w-full md:px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="fullname"></label>
                      <input
                        type="text"
                        className="bg-gray-100 w-full py-5 px-8 rounded-sm outline-none focus:border-b-2 focus:border-red-400 placeholder:text-base placeholder:font-medium"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className=" w-full md:px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="company"></label>
                      <input
                        type="text"
                        className="bg-gray-100 w-full py-5 px-8 rounded-sm outline-none focus:border-b-2 focus:border-red-400 placeholder:text-base placeholder:font-medium"
                        placeholder="Company ( optional )"
                      />
                    </div>
                  </div>
                  <div className=" w-full md:px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="email"></label>
                      <input
                        type="email"
                        className="bg-gray-100 w-full py-5 px-8 rounded-sm outline-none focus:border-b-2 focus:border-red-400 placeholder:text-base placeholder:font-medium"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className=" w-full md:px-4 md:w-1/2">
                    <div className="mb-6">
                      <label htmlFor="number"></label>
                      <input
                        type="number"
                        className="bg-gray-100 w-full py-5 px-8 rounded-sm outline-none focus:border-b-2 focus:border-red-400 placeholder:text-base placeholder:font-medium"
                        placeholder="Phone number "
                      />
                    </div>
                  </div>
                  <div className=" w-full md:px-4">
                    <div className="mb-6">
                      <label htmlFor="message"></label>
                      <textarea
                        rows={4}
                        type="text"
                        className="bg-gray-100 w-full py-5 px-8 rounded-sm outline-none focus:border-b-2 focus:border-red-400 placeholder:text-base placeholder:font-medium"
                        placeholder="Tell me about your project"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-4 px-4 text-center">
                  <button className="font-bold px-9 py-4 bg-bright rounded-full text-white">
                    Contact Me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
