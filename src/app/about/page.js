import React from "react";
import Image from "next/image";
import aboutImage from "@/assets/Doctors-rafiki.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-blue-500">MediCare</span>
              </h1>
              <p className="text-gray-600 mb-8">
                We are dedicated to providing exceptional healthcare services
                with a focus on patient well-being and medical excellence.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src={aboutImage}
                alt="Medical Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Mission
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg">
              At MediCare, our mission is to provide accessible, high-quality
              healthcare services to our community. We strive to create a
              welcoming environment where patients feel valued and cared for.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                Compassion
              </h3>
              <p className="text-gray-600">
                We treat every patient with empathy and understanding, ensuring
                they feel heard and supported.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards of medical care through
                continuous learning and improvement.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new technologies and treatment methods to provide the
                best possible care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Sarah Johnson
              </h3>
              <p className="text-gray-600">Chief Medical Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Michael Chen
              </h3>
              <p className="text-gray-600">Head of Research</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. Emily Rodriguez
              </h3>
              <p className="text-gray-600">Clinical Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
