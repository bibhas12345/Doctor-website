import React, { useState } from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'tailwindcss/tailwind.css';
import img3 from "./img3.jpg"

function Appointment() {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTimeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'];

  const handleDateChange = newDate => {
    setDate(newDate);
    setIsSubmitted(false); // Reset submission on date change
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    alert(`Your appointment is confirmed for ${format(date, 'PP')} at ${timeSlot}.`);
  };

  return (
    <div className='bg-gradient-to-r via-sky-900 from-blue-500 to-sky-900 flex h-[700px] p-8'>
      <div className='bg-sky-900 1/2 mt-[92px] ml-[120px]'>
        <img className='h-[430px] w-[1300px]' src={img3} alt='/' />
      </div>
      <div className="container mx-auto p-4 flex flex-col mr-10  justify-center items-center">
        <p className='mt-20 m-3 text-3xl font-bold text-white'>Choose Your Booking Slot</p>
        <Calendar onChange={handleDateChange} value={date} className="mb-4 w-2/3" />
        <div className="">
          <label htmlFor="timeSlot" className="block mb-2  font-medium text-2xl text-white">Select a time slot:</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={e => setTimeSlot(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option className='' value="">Select time</option>
            {availableTimeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 m-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled={!timeSlot}
        >
          Submit
        </button>
        {isSubmitted && <p className="mt-4 text-green-500">Appointment confirmed for {format(date, 'PP')} at {timeSlot}.</p>}
      </div>
    </div>
  );
}

export default Appointment;
