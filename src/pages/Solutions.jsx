import React from 'react';
import sensorImage from '../assets/images/p3.png'; 
import { FaCogs, FaGlobe, FaChartLine } from 'react-icons/fa'; 

import { FaMapMarkerAlt, FaTools, FaLock, FaBell, FaUsers } from "react-icons/fa";


// HeroSection Component
const HeroSection = () => {
  return (
    <div className="bg-white ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1
            className="text-[40px] sm:text-[60px] lg:text-[80px] mt-8 sm:mt-16 lg:mt-24 mx-4 sm:mx-10 lg:ml-10 text-black font-bold"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Smart Water Solutions
          </h1>
          <h2
            className="text-[32px] sm:text-[48px] lg:text-[65px] mx-4 sm:mx-10 lg:ml-16 text-cyan-500 font-semibold italic"
            style={{ fontFamily: "'DM Serif', serif" }}
          >
            That Make a Real Impact
          </h2>
          <p
            className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mx-4 sm:mx-10 lg:ml-20 font-[400] leading-relaxed mt-4"
          >
            We build intelligent water monitoring systems to help<br/>
             you track water quality in real-time — whether it’s in<br/>
              tanks, lakes, and rivers.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-cyan-500 font-semibold text-white px-4 sm:px-6 lg:px-7 py-2 sm:py-3 mt-6 sm:mt-8 lg:mt-10 mx-4 sm:mx-10 lg:ml-28 rounded-full flex items-center gap-2"
            >
              Explore Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 w-4 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Image */}
        <img
          src={sensorImage}
          alt="Water quality illustration"
          className="w-[400px] h-[400px]  mt-8 sm:mt-12 lg:mt-28 mx-auto lg:ml-24"
        />
      </div>
    </div> 
  );
};

const SolutionsSection = () => {
  return (
    <section className="py-12 px-16">
      <div className="flex items-center justify-center text-center">
                    <h2
                        className="text-[40px] sm:text-[48px] lg:text-[56px] text-black  font-bold"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        Our
                    </h2>
                    <h2
                        className="text-[40px] sm:text-[48px] lg:text-[56px] mx-2  text-cyan-500 font-semibold italic"
                        style={{ fontFamily: "'DM Serif Text', serif" }}
                    >
                        Solutions
                    </h2>
                </div><br/><br/>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="border border-gray-200/50 p-6 shadow-[0_10px_10px_-2px_rgba(0,0,0,0.15),2px_0_6px_-2px_rgba(0,0,0,0.1),-5px_0_6px_-2px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.05)]">
          <h3 className="text-xl font-bold">Smart Sensor Devices</h3>
          <p className="text-gray-600 mt-2">
            Detects pH, TDS, turbidity, and more<br />
            Easy to install and weather-resistant<br />
            Works in both drinking and environmental water sources
          </p>
        </div>
        <div className="border border-gray-200/50 p-6 shadow-[0_8px_10px_-2px_rgba(0,0,0,0.15),4px_0_6px_-2px_rgba(0,0,0,0.1),-4px_0_6px_-2px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.05)]">
          <h3 className="text-xl font-bold">Cloud Dashboard & Alerts</h3>
          <p className="text-gray-600 mt-2">
            Real-time data tracking and visual analytics<br />
            Instant notifications for abnormal readings<br />
            Access anywhere via web or mobile
          </p>
        </div>
        <div className="border border-gray-200/50 p-6 shadow-[0_8px_10px_-2px_rgba(0,0,0,0.15),4px_0_6px_-2px_rgba(0,0,0,0.1),-4px_0_6px_-2px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.05)]">
          <h3 className="text-xl font-bold">Custom Deployment</h3>
          <p className="text-gray-600 mt-2">
            Tailored setup for communities, industries, or governments<br />
            Uses GPS and 4G to transmit data from remote areas<br />
            Integrate with other platforms through APIs
          </p>
        </div>
      </div>
    </section>
  );
};

// HowItWorksSection Component
const HowItWorksSection = () => {
  return (
    
      <div className="pt-10 pb-10 px-4 sm:px-6 lg:px-20 ">
                {/* Heading and Subheading */}
                <div className="flex items-center justify-center text-center">
                    <h2
                        className="text-[40px] sm:text-[48px] lg:text-[56px] text-black font-bold"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        How it 
                    </h2>
                    <h2
                        className="text-[40px] sm:text-[48px] lg:text-[56px] mx-2  text-cyan-500 font-semibold italic"
                        style={{ fontFamily: "'DM Serif Text', serif" }}
                    >
                        Works
                    </h2>
                </div>
                <p
                    className="text-[16px] sm:text-[18px] lg:text-[20px] text-center text-[#444444] mt-4 leading-relaxed"
                    style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                    Follow these simple steps to deploy smart water monitoring <br />
                    and protect your water sources with Jala Raksha's IoT-powered system.
                </p>

                {/* Steps */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Step 1: Install the Device */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <FaCogs className="text-cyan-500 text-4xl" />
                        </div>
                        <h3
                            className="text-[24px] sm:text-[28px] lg:text-[32px] text-cyan-500 font-semibold"
                            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                        >
                            1. Install the Device
                        </h3>
                        <p
                            className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mt-2 leading-relaxed"
                            style={{ fontFamily: "'Calibri', sans-serif" }}
                        >
                            Attach our smart sensor kit to any water source — tanks, lakes, rivers, or pipelines. The device is compact, easy to install, and built for outdoor use.
                        </p>
                    </div>

                    {/* Step 2: Track Data Remotely */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <FaGlobe className="text-cyan-500 text-4xl" />
                        </div>
                        <h3
                            className="text-[24px] sm:text-[28px] lg:text-[32px] text-cyan-500 font-semibold"
                            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                        >
                            2. Track Data Remotely
                        </h3>
                        <p
                            className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mt-2 leading-relaxed"
                            style={{ fontFamily: "'Calibri', sans-serif" }}
                        >
                            Our device measures pH, turbidity, TDS, and temperature. Data is sent automatically to the cloud using 4G and GPS, enabling remote monitoring anytime, anywhere.
                        </p>
                    </div>

                    {/* Step 3: Analyze */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <FaChartLine className="text-cyan-500 text-4xl" />
                        </div>
                        <h3
                            className="text-[24px] sm:text-[28px] lg:text-[32px] text-cyan-500 font-semibold"
                            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                        >
                            3. Analyze
                        </h3>
                        <p
                            className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mt-2 leading-relaxed"
                            style={{ fontFamily: "'Calibri', sans-serif" }}
                        >
                            View live data on a powerful dashboard. Get alerts when values exceed limits, track trends over time, and download reports to make informed, impactful decisions.
                        </p>
                    </div>
                </div>
            </div>
  );
};

// CallToActionSection Component
const CallToActionSection = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10 flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* Features Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center justify-center lg:justify-start text-center lg:text-left">
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[56px] text-black font-bold"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Key
          </h2>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[56px] mx-2 text-cyan-500 font-semibold italic"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Features
          </h2>
        </div>
        <ul className="space-y-3 text-gray-600 mt-6">
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-cyan-500" /> Works Anywhere (Urban or rural locations)
          </li>
          <li className="flex items-center gap-2">
            <FaTools className="text-cyan-500" /> Easy Setup (Plug-and-play system)
          </li>
          <li className="flex items-center gap-2">
            <FaLock className="text-cyan-500" /> Secure Data (Cloud storage & encryption)
          </li>
          <li className="flex items-center gap-2">
            <FaBell className="text-cyan-500" /> Live Alerts (Instant SMS/email notifications)
          </li>
          <li className="flex items-center gap-2">
            <FaChartLine className="text-cyan-500" /> Visual Analytics (Track trends over time)
          </li>
          <li className="flex items-center gap-2">
            <FaUsers className="text-cyan-500" /> Multi-user Access (For teams and authorities)
          </li>
        </ul>
      </div>

      {/* Call to Action Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <div className="flex items-center justify-center lg:justify-start text-center lg:text-left">
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[56px] text-black font-bold"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Call to
          </h2>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[56px] mx-2 text-cyan-500 font-semibold italic"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Action
          </h2>
        </div>
        <p className="text-gray-600 mt-6 mb-6 text-center lg:text-left">
          Ready to Monitor Your Water Quality?
          <br />
          Our team will help you set up the right solution for your needs.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 w-full">
          <button className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition">
            Contact Us
          </button>
          <button className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
};


// Main Solutions Component
const Solutions = () => {
  return (
    <div>
      <HeroSection />
      <SolutionsSection />
      <HowItWorksSection />
      <CallToActionSection />
    </div>
  );
};

export default Solutions;