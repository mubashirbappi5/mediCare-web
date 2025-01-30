import React from "react";
import appointments from "../../assets/Online Doctor-rafiki.png";
import Image from "next/image";
const appointment = () => {
  return (
    <div className="min-h-screen ">
    <div className='bg-green-200'>
    <section className=" w-10/12  mx-auto flex items-center justify-between  ">
        <div>
          <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
            <a href="#" className="text-gray-600 dark:text-gray-200">
              {" "}
              Home
            </a>

            <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

            <a
              href="#"
              className="text-gray-600 dark:text-gray-200 hover:underline"
            >
           appointment
            </a>
          </div>

          <h1 className="text-4xl font-bold">Appointment</h1>
        </div>
        <div>
          <Image className="w-80" src={appointments} alt={"image"} />
        </div>
      </section>
    </div>
    </div>
  );
};

export default appointment;
