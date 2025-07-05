import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import C from './Contactform';

const Contact = () => {
  return (

    <div className='w-full px-4 sm:px-6 lg:px-8'>

      <div className='bg-cyan-500/15 w-full py-16 md:py-24 rounded-lg mt-8'>
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl text-center text-black font-bold"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          Get in touch with Jala Rakshak
        </h1>
        <div className='mt-6 flex justify-center'>

          <p className='text-center text-lg md:text-xl max-w-4xl text-[#444444]'>
            Have questions, need assistance, or want to provide feedback? We're here to help! Reach
            out to us, and our team will respond promptly to address your concerns.
          </p>
        </div>


        <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16'>
          <div className='flex items-center gap-3'>
            <FaPhoneAlt className='text-xl md:text-2xl' />
            <p className='text-lg md:text-xl text-black'>+91 8978859246</p>
          </div>
          <div className='flex items-center gap-3'>
            <IoMdMail className='text-xl md:text-2xl' />
            <p className='text-lg md:text-xl text-black'>info.skjipl@gmail.com</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:gap-20 my-20 md:my-28'>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

          <div className="flex flex-wrap justify-center lg:justify-start">
            <h2
              className="text-4xl sm:text-5xl text-black font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              How Can We
            </h2>
            <h2
              className="text-4xl sm:text-5xl mx-2 text-cyan-500 font-semibold italic"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Assist
            </h2>
            <h2
              className="text-4xl sm:text-5xl text-black font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              You Today?
            </h2>
          </div>


          <div className='mt-10'>
            <div className='flex items-center gap-3 mt-6'>
              <FaPhoneAlt className='text-3xl md:text-4xl text-cyan-500' />
              <p className='text-xl md:text-2xl text-black'>+91 8978859246</p>
            </div>
            <div className='flex items-center gap-3 mt-6'>
              <IoMdMail className='text-3xl md:text-4xl text-cyan-500' />
              <p className='text-xl md:text-2xl text-black'>info.skjipl@gmail.com</p>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-1/2">

          <p className='text-lg md:text-xl max-w-xl text-black text-center lg:text-left'>
            Our team of experts is ready to answer your questions, give you more info and help you.
          </p>
          <div className='mt-8'>
            <C />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;