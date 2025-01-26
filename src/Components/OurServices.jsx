import React from 'react';
import doctor from '../assets/doctor-with-his-arms-crossed-white-background.jpg'
import img1 from '../assets/dental-hygiene-concept-with-tooth.jpg'
import img2 from '../assets/dentists-treat-patients-teeth.jpg'
import Image from 'next/image';
import dentis from '../assets/white-teeth.jpg'
const OurServices = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 ">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Our Services</h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Image className="w-20 h-20 object-cover rounded-full border-4 border-blue-500" src={img1} alt="Doctor" />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">Cavity Protection</h2>
            <p className="text-gray-600 text-center mb-4">
              Advanced care to keep your teeth healthy and protected from cavities.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
      
          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Image className="w-20 h-20 object-cover rounded-full border-4 border-blue-500" src={dentis} alt="Dentist" />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">Cosmetic Dentistry</h2>
            <p className="text-gray-600 text-center mb-4">
              Enhance your smile with cutting-edge cosmetic dental procedures.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
      
          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Image className="w-20 h-20 object-cover rounded-full border-4 border-blue-500" src={img2} alt="Surgery" />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">Oral Surgery</h2>
            <p className="text-gray-600 text-center mb-4">
              Expert surgical solutions for complex oral health needs.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      
        {/* Additional Service Section */}
        <div className="bg-blue-700 text-white mt-16 rounded-2xl shadow-lg p-8 lg:flex items-center">
          <div className="lg:w-2/3 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Electro Gastrology Therapy</h2>
            <p className="text-gray-100 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="lg:w-1/3 text-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold shadow-md hover:bg-gray-100 transition duration-300">
              More Details
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default OurServices;