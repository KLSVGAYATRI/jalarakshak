import React from 'react';
import p1 from '../assets/images/p1.png';
import smartDevice from '../assets/images/s1.png'; 
import connectedSystems from '../assets/images/s2.png'; 
import innovationResearch from '../assets/images/s3.png'; 
import { FaCogs, FaGlobe, FaChartLine } from 'react-icons/fa'; 


const Home = () => {
    return (
        <div className="bg-white"> 
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                
                
                <div className="text-center lg:text-left">
                    <h1
                        className="text-[40px] sm:text-[60px] lg:text-[80px] mt-8 sm:mt-16 lg:mt-24 mx-4 sm:mx-10 lg:ml-10 text-black font-bold"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        Innovating Water Safety
                    </h1>
                    <h2
                        className="text-[32px] sm:text-[48px] lg:text-[65px] mx-4 sm:mx-10 lg:ml-18 text-cyan-500 font-semibold italic"
                        style={{ fontFamily: "DM Serif" }}
                    >
                        Through Smart Technology
                    </h2>
                    <p
                        className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mx-4 sm:mx-10 lg:ml-20 font-[400] leading-relaxed mt-4"
                    >
                        Jala Raksha builds smart IoT systems to monitor water <br />
                        quality in real time — helping cities, communities, and <br />
                        industries ensure access to safe and clean water
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button
                            className="bg-cyan-500 font-semibold text-white px-4 sm:px-6 lg:px-7 py-2 sm:py-3 mt-6 sm:mt-8 lg:mt-10 mx-4 sm:mx-10 lg:ml-28 rounded-4xl flex items-center gap-2"
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
                
                <img
                    src={p1}
                    alt="Water quality illustration"
                    className="w-[200px] sm:w-[300px] lg:w-[384px] h-[240px] sm:h-[360px] lg:h-[455px] mt-8 sm:mt-12 lg:mt-18 mx-auto lg:ml-24"
                />
            </div>

            
            <div className="pt-16 pb-10 px-4 sm:px-6 lg:px-20 ">
                
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
                </div>
                <p
                    className="text-[16px] sm:text-[18px] lg:text-[20px] text-center text-[#444444] mt-4 leading-relaxed"
                    style={{ fontFamily: "'Calibri', sans-serif" }}
                >
                    Explore our core offerings and discover how Jala Raksha <br />
                    empowers the water-tech ecosystem.
                </p>

                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <img
                                src={smartDevice}
                                alt="Smart Devices"
                                className="w-[380px] h-[200px] object-cover mx-auto rounded-none"
                            />
                        </div>
                        <div className="p-6 pt-0">
                            <h3
                                className="text-[24px] sm:text-[28px] lg:text-[32px] text-black font-semibold"
                                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                            >
                                Smart Devices
                            </h3>
                            <p
                                className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mt-2 leading-relaxed"
                                style={{ fontFamily: "'Calibri', sans-serif" }}
                            >
                                We build smart devices that test water quality (like pH, turbidity, and TDS). These tools are strong, easy to use and made for lakes, rivers, and tanks.
                            </p>
                            <button
                                className="bg-cyan-500 text-white px-6 py-2 mt-4 rounded-full flex items-center gap-2 font-semibold"
                                style={{ fontFamily: "'Calibri', sans-serif" }}
                            >
                                Explore
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                  
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <img
                                src={connectedSystems}
                                alt="Connected Systems"
                                className="w-[380px] h-[200px] object-cover mx-auto rounded-none"
                            />
                        </div>
                        <div className="p-6 pt-0">
                            <h3
                                className="text-[24px] sm:text-[28px] lg:text-[32px] text-black font-semibold"
                                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                            >
                                Connected Systems
                            </h3>
                            <p
                                className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mt-2 leading-relaxed"
                                style={{ fontFamily: "'Calibri', sans-serif" }}
                            >
                                Our devices send water data to the cloud using GPS and 4G. You can track everything in real-time using our dashboard or connect it with your own system.
                            </p>
                            <button
                                className="bg-cyan-500 text-white px-6 py-2 mt-4 rounded-full flex items-center gap-2 font-semibold"
                                style={{ fontFamily: "'Calibri', sans-serif" }}
                            >
                                Explore
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                   
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <img
                                src={innovationResearch}
                                alt="Innovation & Research"
                                className="w-[380px] h-[200px] object-cover mx-auto rounded-none"
                            />
                        </div>
                        <div className="p-6 pt-0">
                            <h3
                                className="text-[24px] sm:text-[28px] lg:text-[32px] text-black font-semibold"
                                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                            >
                                Innovation & Research
                            </h3>
                            <p
                                className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#444444] mt-2 leading-relaxed"
                                style={{ fontFamily: "'Calibri', sans-serif" }}
                            >
                                We are always improving. Our team researches new ways to make water monitoring better, faster, and more helpful for the environment.
                            </p>
                            <button
                                className="bg-cyan-500 text-white px-6 py-2 mt-4 rounded-full flex items-center gap-2 font-semibold"
                                style={{ fontFamily: "'Calibri', sans-serif" }}
                            >
                                Explore
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="pt-16 pb-24 px-4 sm:px-6 lg:px-20 ">
                
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

               
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    
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
        </div>
    );
};

export default Home;