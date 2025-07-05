import React from 'react';
// IMPORTANT: Update this path to your new image of the hand holding the glowing orb.
import techImage from '../assets/images/t1.png'; // Example path

const TechnologyPage = () => {
  // --- FIX: Define the reusable styles here, before the return statement ---
  const sensorCardStyles = "border border-gray-200 rounded-lg p-8 text-left h-full flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

  return (
    // Main container: sets a background, min-height, and consistent vertical padding.
    <div className="min-h-screen bg-white">
      {/* Content wrapper: centers content, sets max-width, and handles horizontal padding for all screen sizes. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

        {/* --- Header Section --- */}
        {/* Uses flexbox that stacks on mobile (flex-col-reverse) and becomes a row on larger screens (lg:flex-row). */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl text-black font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Technology
            </h1>
            <h2
              className="text-3xl sm:text-4xl lg:text-6xl text-cyan-500 font-semibold italic mt-1"
              style={{ fontFamily: "DM Serif" }}
            >
              Behind Jala Rakshak
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-lg mx-auto lg:mx-0">
              Learn how our innovative hardware and intelligent software work together to deliver real-time water quality insights — anytime, anywhere.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 lg:max-w-md">
            <img
              src={techImage}
              className="w-full h-auto rounded-lg shadow-2xl"
              alt="Hand holding a glowing orb representing Jala Raksha's technology"
            />
          </div>
        </div>

        {/* --- Hardware & Sensors Section --- */}
        <div className="mt-24 lg:mt-32">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl text-black font-bold"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Hardware & <span className="text-[#00AEEF] italic font-semibold" style={{ fontFamily: "'DM Serif Text', serif" }}>Sensors</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Our robust sensor suite forms the core of our data collection, built for accuracy and durability in diverse environments.
            </p>
          </div>

          {/* Sensor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: PH Sensor */}
            <div className={sensorCardStyles}>
              <div className="flex-grow">
                <div className="flex items-baseline mb-4">
                  <h4 className="text-2xl text-black font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>PH</h4>
                  <span className="text-xl text-[#00AEEF] ml-2 italic" style={{ fontFamily: "'DM Serif Text', serif" }}>sensor</span>
                </div>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Our pH sensor accurately measures the hydrogen ion concentration, helping determine if water is safe for drinking, farming, or environmental use.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-bold text-black mb-2">Used for</h5>
                <ul className="text-base text-gray-600 leading-relaxed list-disc list-inside">
                  <li>Drinking water testing</li>
                  <li>Aquaculture and farming</li>
                  <li>Industrial wastewater checks</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Turbidity Sensor */}
            <div className={sensorCardStyles}>
              <div className="flex-grow">
                <div className="flex items-baseline mb-4">
                  <h4 className="text-2xl text-black font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Turbidity</h4>
                  <span className="text-xl text-[#00AEEF] ml-2 italic" style={{ fontFamily: "'DM Serif Text', serif" }}>sensor</span>
                </div>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  This sensor detects cloudiness by measuring light scattered by particles. Higher turbidity often indicates contamination or pollution.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-bold text-black mb-2">Used for</h5>
                <ul className="text-base text-gray-600 leading-relaxed list-disc list-inside">
                  <li>Lakes and rivers</li>
                  <li>Construction runoff monitoring</li>
                  <li>Environmental research</li>
                </ul>
              </div>
            </div>

            {/* Card 3: TDS Sensor */}
            <div className={sensorCardStyles}>
              <div className="flex-grow">
                <div className="flex items-baseline mb-4">
                  <h4 className="text-2xl text-black font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>TDS</h4>
                  <span className="text-xl text-[#00AEEF] ml-2 italic" style={{ fontFamily: "'DM Serif Text', serif" }}>sensor</span>
                </div>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  The TDS (Total Dissolved Solids) sensor tracks mineral and impurity levels, helping determine overall water quality for human or agricultural use.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-bold text-black mb-2">Used for</h5>
                <ul className="text-base text-gray-600 leading-relaxed list-disc list-inside">
                  <li>Drinking water purity</li>
                  <li>Reverse osmosis systems</li>
                  <li>Agricultural water quality</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;