import React from "react";
import appointments from "../../assets/Online Doctor-rafiki.png";
import Image from "next/image";

const appointment = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-green-200">
        <section className="w-10/12 mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
              <a href="#" className="text-gray-600 dark:text-gray-200">
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

      <div className="w-10/12 mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Appointment Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Doctor
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option value="">Choose a doctor</option>
                  <option value="dr1">Dr. John Smith</option>
                  <option value="dr2">Dr. Sarah Johnson</option>
                  <option value="dr3">Dr. Michael Brown</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Appointment Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Time
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option value="">Select time slot</option>
                  <option value="9am">9:00 AM</option>
                  <option value="10am">10:00 AM</option>
                  <option value="11am">11:00 AM</option>
                  <option value="2pm">2:00 PM</option>
                  <option value="3pm">3:00 PM</option>
                  <option value="4pm">4:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Reason for Visit
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  rows="3"
                  placeholder="Briefly describe your reason for the appointment"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Available Time Slots */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Available Time Slots
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Today's Available Slots</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-center">
                    9:00 AM
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-center">
                    10:00 AM
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-center">
                    11:00 AM
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-center">
                    2:00 PM
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-center">
                    3:00 PM
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-center">
                    4:00 PM
                  </span>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Available Doctors</h3>
                <div className="space-y-3 mt-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">Dr. John Smith</p>
                      <p className="text-sm text-gray-500">Cardiologist</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">Dr. Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Pediatrician</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">Dr. Michael Brown</p>
                      <p className="text-sm text-gray-500">Dermatologist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default appointment;
