import React from 'react';
import p1 from '../assets/images/a1.jpg'; // Make sure the path is correct
import p2 from '../assets/images/a2.jpg';
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";

const About = () => {
  return (
    // Add overall padding for content spacing, especially on mobile
    <div className='py-12 px-4 sm:px-6 lg:px-8'>

      {/* Main "About Us" Heading */}
      <div className="text-center mb-16 md:mb-20">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl text-black font-bold"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          About Us
        </h1>
      </div>

      {/* Section 1: Our Journey (Image + Text) */}
      {/* 
        - Stacks vertically on mobile (flex-col) and goes side-by-side on large screens (lg:flex-row).
        - Uses gap for consistent spacing.
        - `items-center` ensures vertical alignment is clean in both layouts.
      */}
      <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
        {/* Image Column */}
        <div className='w-full lg:w-1/2'>
          {/* `w-full` and `h-auto` make the image responsive and maintain its aspect ratio */}
          <img src={p1} alt="Jala Raksha Journey" className='w-[626px] h-[359px] rounded-lg shadow-md' />
        </div>
        
        {/* Text Column */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          {/* Heading container: centers on mobile, aligns left on desktop */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start">
            <h2
              className="text-4xl sm:text-5xl text-black font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Our
            </h2>
            <h2
              className="text-4xl sm:text-5xl mx-2 text-cyan-500 font-semibold italic"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Journey
            </h2>
          </div>
          {/* Paragraph: Removed fixed width, using responsive text size. Corrected color typo. */}
          <p className='text-lg md:text-xl text-gray-700 mt-6 max-w-prose mx-auto lg:mx-0'>
            Jala Raksha was started to protect one of the most important things on Earth — clean water. Our team of engineers came together with one goal: to create smart, low-cost, and easy-to-use systems that check water quality using IoT technology. Whether it’s a lake or a water tank, our sensors help people, communities, and governments make better decisions to keep water safe.
          </p>
        </div>
      </div>

      {/* Section 2: Mission & Vision */}
      {/* 
        - Stacks on mobile, side-by-side on medium screens and up (md:flex-row).
        - `items-start` aligns content to the top.
      */}
      <div className='mt-20 md:mt-28 flex flex-col md:flex-row items-start gap-12 lg:gap-16'>
        {/* Mission Column */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
          <div className='flex items-center gap-4'>
            <TbTargetArrow className='text-5xl md:text-6xl text-cyan-500' />
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Our Mission
            </h1>
          </div>
          <p className='text-lg text-gray-700 mt-6 max-w-prose'>
            To safeguard water sources through innovative IoT technology, ensuring real-time water quality monitoring that protects public health, supports sustainability, and empowers communities with access to clean, safe water.
          </p>
        </div>
        
        {/* Vision Column */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
          <div className='flex items-center gap-4'>
            <FaRegEye className='text-5xl md:text-6xl text-cyan-500' />
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Our Vision
            </h1>
          </div>
          <p className='text-lg text-gray-700 mt-6 max-w-prose'>
            To create a future where every community has the tools and knowledge to manage their water resources effectively, ensuring a sustainable and healthy planet for generations to come.
          </p>
        </div>
      </div>

      {/* Section 3: Empowering Solutions (Text + Image) */}
      {/* `flex-col-reverse` puts the image on top on mobile, which often looks better */}
      <div className='mt-20 md:mt-28 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16'>
        {/* Text Column */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h2
            className="text-4xl sm:text-5xl text-black font-bold"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Empowering Solutions
          </h2>
          <h3
            className="text-3xl sm:text-4xl mt-1 text-cyan-500 font-semibold italic"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            for a brighter future
          </h3>
          <p className='text-lg text-black italic font-bold mt-6 max-w-prose mx-auto lg:mx-0' style={{ fontFamily: "'DM Serif Text', serif" }}>
            At Jal Rakshak, we empower Solutions by unlocking their potential through quality devices. We harness smart technology to protect water sources, support communities, and create a healthier environment.
          </p>
        </div>
        
        {/* Image Column */}
        <div className='w-full lg:w-1/2'>
          <img src={p2} alt="Empowering Solutions" className='w-[488px] h-[371px] rounded-lg shadow-md'/>
        </div>
      </div>

      {/* Section 4: Unique Approach Banner */}
      <div className='bg-cyan-500/15 w-full py-16 md:py-24 rounded-lg mt-20 md:mt-28'>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl text-center text-black font-bold"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          Our Unique Approach
        </h2>
        <h3
            className="text-3xl sm:text-4xl text-center text-black font-semibold italic mt-2"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
             to Smart Water Monitoring
        </h3>
        <div className='mt-8 flex justify-center px-4'>
          {/* max-w- controls readability on large screens, and padding handles mobile */}
          <p className='text-center text-lg md:text-xl max-w-5xl text-gray-700'>
           At Jala Raksha, we believe technology should go beyond theory — it should create real-world impact. That’s why our solutions are designed not just to collect data, but to actively protect water and empower communities. Our unique approach combines intelligent IoT systems, practical insights, and live environmental tracking to ensure water quality is monitored with precision, speed, and purpose.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;