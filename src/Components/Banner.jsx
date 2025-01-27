import React from "react";
import bannerimg from "../assets/Doctors-rafiki.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-gray-100 py-16 mx-auto">
      <div className="container px-6 w-11/12 mx-auto ">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Your Best <span className="text-blue-500">Medical</span> <br />{" "}
                Help Center
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              All Service
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className="w-96 h-full lg:max-w-3xl"
              src={bannerimg}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
