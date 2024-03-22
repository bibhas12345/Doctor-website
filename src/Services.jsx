import React from 'react'
import plus1 from "./plus.jpg"
import amb1 from "./amb.jpg"
import blood1 from "./blood.jpg"



export default function Services() {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h1>

        <div className='flex w-full'>

          <div className="mb-12 w-1/3 m-4 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Emergency Services</h2>
            <img className='h-[200px] rounded-full' src={plus1} alt='/' />
            <p className="text-gray-700 leading-relaxed">
              In case of emergencies, our clinic is equipped to handle a wide range of medical emergencies.
              Our experienced medical team is available 24/7 to provide immediate care and support to patients
              in need. Please don't hesitate to contact us or visit our clinic if you require emergency medical attention.
            </p>

          </div>

          <div className="mb-12 w-1/3 m-4 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ambulance Services</h2>
            <img src={amb1} alt='/' />
            <p className="text-gray-700 leading-relaxed">
              We provide ambulance services for transporting patients safely and swiftly to our clinic or
              other medical facilities when necessary. Our ambulances are fully equipped with life-saving
              medical equipment and staffed by trained paramedics to ensure the highest level of care during
              transportation.
            </p>
            
          </div>

          <div className="mb-12 w-1/3 m-4 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Blood Bank</h2>
            <img src={blood1} alt='/' />
            <p className="text-gray-700 leading-relaxed">
              Our clinic operates a fully stocked blood bank to meet the needs of our patients. We maintain
              a supply of blood products for transfusions and other medical procedures. Donors are encouraged
              to contribute to our blood bank to help save lives in our community. Contact us for more information
              on blood donation and eligibility requirements.
            </p>
           
          </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Services</h2>
            <ul className=" text-gray-700 flex flex-wrap">
              <li className='bg-sky-200 p-3 px-8 rounded-full m-3 border-2 border-blue-300'>General Consultations</li>
              <li className='bg-sky-200 p-3 px-8 rounded-full m-3 border-2 border-blue-300' >Specialized Medical Treatments</li>
              <li className='bg-sky-200 p-3 px-8 rounded-full m-3 border-2 border-blue-300'>Health Screenings</li>
              <li className='bg-sky-200 p-3 px-8 rounded-full m-3 border-2 border-blue-300'>Vaccinations and Immunizations</li>
              <li className='bg-sky-200 p-3 px-8 rounded-full m-3 border-2 border-blue-300'>Health Education and Counseling</li>
              <li className='bg-sky-200 p-3 px-8 rounded-full m-3 border-2 border-blue-300'>And much more...</li>
            </ul>
          </div>
      </div>
    </div>
  )
}
