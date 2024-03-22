import React from 'react';
import { FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import img4 from "./img4.png"

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center mt-5">About Our Practice</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mb-6 bg-sky-900">
            <img src={img4} alt="Doctor" className="rounded-lg w-full h-auto shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Practice</h2>
            <p className="text-gray-700 leading-relaxed">
              At our practice, we are dedicated to providing high-quality healthcare with a personalized touch.
              Our team of experienced doctors and staff are committed to your well-being and strive to create
              a comfortable and welcoming environment for all our patients.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Whether you're in need of routine check-ups, preventive care, or specialized treatments,
              we are here to address your healthcare needs. We believe in fostering strong doctor-patient
              relationships built on trust, respect, and open communication.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please feel free to explore our website to learn more about our services and how we can
              assist you in achieving optimal health and wellness. We look forward to serving you
              and your family for years to come.
            </p>
            <div className='flex justify-center items-center mr-[66px]'>
                        <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><FaTwitter /></p>
                        <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><IoMail /></p>
                        <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><IoIosCall /></p>
                    </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default About;
