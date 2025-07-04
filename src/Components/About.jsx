import React from 'react';


function About() {
  return (
    <section id='about' className="min-h-screen py-16 px-4 font-inter">
      <div className="max-w-6xl mt-20 md:mt-40 mx-auto flex flex-col items-center gap-10 md:gap-16">
        {/* Title */}
        <div className="text-white text-3xl sm:text-4xl md:text-6xl font-medium text-center">
          <h1>About Gravity Team</h1>
        </div>

        {/* Description */}
        <div className="text-center text-[#E5E5E5] text-sm md:text-lg sm:text-lg font-normal max-w-2xl leading-relaxed">
          <p>
            At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.
          </p>
        </div>

        {/* Stats Table */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {/* Row 1 */}
            <div className="p-6 text-center text-white border-r-2 border-t-2 border-l-2 md:border-l-0 md:border-t-0 border-gray-700 transition-all duration-700  hover:bg-gradient-to-br hover:from-[#D2AB67] hover:via-[#5FA4E6] hover:to-[#665DCD]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">~$100 billion</h1>
              <p className="text-sm text-[#E5E5E5]">Cumulative trading <br />volume to date</p>
            </div>
            <div className="p-6 text-center text-white sm:border-r-2 border-t-2  border-l-2 border-r-2 md:border-l-0 md:border-t-0 border-gray-700 transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">0.8%</h1>
              <p className="text-sm text-white">of the global crypto<br /> spot trading volume</p>
            </div>
            <div className="p-6 text-center text-white border-l-2 border-b-2 border-r-2 border-t-2 md:border-t-0 md:border-l-0 md:border-b-0 border-gray-700 transition-all duration-700 ease-in-out hover:bg-gradient-to-br hover:from-[#D2AB67] hover:via-[#5FA4E6] hover:to-[#665DCD]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">~30</h1>
              <p className="text-sm text-[#E5E5E5]">Gravity Teammates<br />(& growing)</p>
            </div>
            <div className="p-6 text-center text-white transition-all sm:border-t-2 md:border-t-0 border-r-2 border-l-2 md:border-l-0  md:border-r-0  duration-700 border-gray-700 ease-in-out hover:bg-gradient-to-br hover:from-[#D2AB67] hover:via-[#5FA4E6] hover:to-[#665DCD]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">25+</h1>
              <p className="text-sm text-[#E5E5E5]">leading global and<br /> local crypto exchanges</p>
            </div>

            {/* Row 2 */}
            <div className="p-6 text-center text-white border-t-2 border-l-2 md:border-l-0 md:border-b-0 border-b-2 border-r-2 border-gray-700 transition-all duration-700 ease-in-out hover:bg-gradient-to-br hover:from-[#D2AB67] hover:via-[#5FA4E6] hover:to-[#665DCD]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">2017</h1>
              <p className="text-sm text-[#E5E5E5]">start, crypto-natives</p>
            </div>
            <div className="p-6 text-center text-white border-t-2 sm:border-r-2 border-l-2 border-r-2 md:border-r- md:border-l-0   border-gray-700 transition-all duration-700 ease-in-out hover:bg-gradient-to-br hover:from-[#D2AB67] hover:via-[#5FA4E6] hover:to-[#665DCD]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">1,200+</h1>
              <p className="text-sm text-[#E5E5E5]">crypto-assets pairs</p>
            </div>
            <div className="p-6 text-center text-white border-t-2 border-r-2 md:border-b-0 sm:border-b-2 border-l-2 md:border-l-0 border-gray-700 transition-all duration-700 ease-in-out hover:bg-gradient-to-br hover:from-[#D2AB67] hover:via-[#5FA4E6] hover:to-[#665DCD]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">24/7</h1>
              <p className="text-sm text-[#E5E5E5]">liquidity</p>
            </div>
            <div className="p-6 text-center text-white border-t-2 border-l-2 border-r-2 border-b-2 md:border-b-0 md:border-r-0 md:border-l-0     border-gray-700 transition-all duration-700 ease-in-out hover:bg-gradient-to-br hover:from-[#D2AB67] hover:via-[#5FA4E6] hover:to-[#665DCD]">
              <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-white">5 billion+</h1>
              <p className="text-sm text-[#E5E5E5]">trades done to date</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;