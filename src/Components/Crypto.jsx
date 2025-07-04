import React from 'react';
import arrowr from '../assets/images/arrowr.png';
import token from '../assets/images/token.png';
import exchange from '../assets/images/exchange.png';
import bg from '../assets/images/bg.png';
import bgg from '../assets/images/bgg.png'; // Assuming this is for the partners section background
import near from '../assets/images/near.png';
import sol from '../assets/images/sol.png';
import mena from '../assets/images/mena.png';
import bithumb from '../assets/images/bithumb.png';
import bitbank from '../assets/images/bitbank.png';
import binance from '../assets/images/binance.png';
import bitstamp from '../assets/images/bitstamp.png';
import coinbase from '../assets/images/coinbase.png';
import bitfinex from '../assets/images/bitfinex.png';
import Marquee from 'react-fast-marquee';

function Crypto() {
  return (
    <section id='our' className="relative overflow-hidden text-white">
      {/* Main Background for the top sections */}
      <div
        className="absolute inset-0 top-0 left-0 animate-pulse  w-full xl:w-420 h-[calc(100%-300px)] lg:h-[calc(100%-100px)] xl:h-[calc(100%-100px)] bg-no-repeat bg-right-top"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '2307px', // Exact size from design inspection
        }}
      >
        <div className="absolute inset-0 opacity-30"></div> {/* Darker overlay for text contrast */}
      </div>

      {/* Crypto Market Making Header */}
      <div className="relative z-10 text-center pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
          Crypto Market Making
        </h1>
        <p className="text-[#E5E5E5] text-base sm:text-lg md:text-xl font-normal mt-6 md:mt-8 leading-relaxed max-w-3xl mx-auto">
          We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.
        </p>
      </div>

      {/* Market Making Sections Container - Reduced bottom padding to connect sections */}
      <div className="relative z-10 flex flex-col gap-20 md:gap-32 lg:gap-10 pb-0"> {/* Changed pb-* to pb-0 */}
        {/* Market Making for Crypto Projects */}
        <div id='tokens' className="flex  flex-col md:flex-row justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center md:text-left md:w-1/2 order-2 md:order-1 pt-12 md:pt-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal mb-4 md:mb-6 leading-tight">
              Market Making for<br className="hidden sm:block"/> Crypto Projects
            </h2>
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 leading-normal">
              Accelerate your token’s journey by<br className="hidden sm:block" /> boosting its liquidity
            </p>
            <p className="text-[#E5E5E5] text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              We invest in building long-term,<br className="hidden sm:block"/> sustainable relationships and support our <br className="hidden sm:block"/> projects in their growth journey with our<br className="hidden sm:block"/> services, industry expertise, and network.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-3">
              <p className="text-base sm:text-lg md:text-xl text-white border-b-2 border-b-[#cab38a] pb-1">
                Learn More
              </p>
              <img src={arrowr} alt="Arrow Right" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          {/* Token Image - Right Side */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end order-1 md:order-2 px-4 mr-17 lg:mr-0 md:px-0 lg:ml-30">
            <img
              src={token}
              alt="Token"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto animate-float" // Added animate-float for subtle movement
            />
          </div>
        </div>

        {/* Market Making for Crypto Exchanges */}
        <div id='exchanges' className="flex flex-col md:flex-row justify-center md:gap-0 items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Exchange Image - Left Side */}
          <div className="md:w-3xl w-full flex justify-center md:justify-start px-4 md:px-0 lg:pl-20 mb-8 md:mb-0">
            <img
              src={exchange}
              alt="Exchange"
              className="w-full max-w-sm sm:max-w-md lg:max-w-xl h-auto"
            />
          </div>

          <div className="text-center md:text-left md:w-1/2 md:pl-12 lg:pl-20 pt-8 md:pt-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal mb-4 md:mb-6 leading-tight">
              Market Making for<br className="hidden sm:block"/> Crypto Exchanges
            </h2>
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 leading-normal">
              Attract more traders and projects with<br className="hidden sm:block"/> deep order books & liquidity
            </p>
            <p className="text-[#E5E5E5] text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              Our world-class market making services are<br className="hidden sm:block"/> proven to help local and emerging exchanges<br className="hidden sm:block"/> win traders and gain market-leading positions<br className="hidden sm:block"/> of up to 90% market dominance.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-3">
              <p className="text-base sm:text-lg md:text-xl text-white border-b-2 border-b-[#cab38a] pb-1">
                Learn More
              </p>
              <img src={arrowr} alt="Arrow Right" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners & Friends Section - Removed top padding to connect sections */}
      <div id='partners' className="relative flex flex-col lg:flex-row min-h-screen pt-0 pb-20 md:pb-0"> {/* Changed pt-* to pt-0 */}
        {/* Left Section: Background Image with Overlays and the three "Partners & Friends" images */}
        <div
          className="relative flex-1 w-full flex animate-pulse top-10 lg:md:top-0 justify-center items-center py-12 lg:py-0 min-h-[50vh] lg:min-h-screen"
          style={{
            backgroundImage: `url(${bgg})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          
          {/* Container for the three "Partners & Friends" images (near, sol, mena) */}
          <div className="z-10 absolute flex gap-4 md:gap-8 lg:gap-7 bottom-1/4 right-1/2 transform translate-x-1/2 translate-y-1/2 lg:translate-x-0 lg:-translate-y-100 lg:bottom-10 lg:right-40 xl:right-30">
            <img className="w-10 h-10 md:w-12 md:h-12 lg:translate-x-27 lg:-translate-y-3 object-contain" src={near} alt="Near" />
            <img className="w-12 h-12 md:w-16 md:h-16 object-contain mt-4 md:mt-17" src={sol} alt="Sol" />
            <img className="w-10 h-10 md:w-12 md:h-12 object-contain mt-2 md:mt-10" src={mena} alt="Mena" />
          </div>

          {/* Text Overlay for "Our Partners & Friends" */}
          <div className="z-10 absolute text-white font-medium text-3xl md:text-4xl lg:text-5xl leading-tight top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-55 lg:top-130 lg:left-20 xl:left-32 lg:transform-none">
            <h1>
              Our Partners
              <br className="hidden sm:block" /> & Friends
            </h1>
          </div>
        </div>

        {/* Right Section: Modified Partner Images Grid */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12 lg:ml-40">
          {/* Parent container for the two new columns/groups - NOW ALWAYS A 2-COLUMN GRID */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 md:max-w-[57%] w-full"> {/* Changed from flex to grid */}
            {/* Left Column/Group of Partner Images (Bithumb, Bitbank, Binance) */}
            <div className="flex flex-col gap-6 md:gap-8"> {/* Removed flex-1, as grid handles sizing */}
              <div className='px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-5 border border-[#41557280] flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-b from-[#1B1B1E] to-[#41557220]'>
                <img className="w-20 h-20 object-contain mb-2" src={bithumb} alt="Bithumb" />
                <p className='tracking-tighter text-sm text-[#999999] uppercase'>BITHUMB</p>
              </div>
              <div className='px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-5 border border-[#41557280] flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-b from-[#1B1B1E] to-[#41557220]'>
                <img className="w-20 h-20 object-contain mb-2" src={bitbank} alt="Bitbank" />
                <p className='tracking-tighter text-sm text-[#999999] uppercase'>BITBANK</p>
              </div>
              <div className='px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-5 border border-[#41557280] flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-b from-[#1B1B1E] to-[#41557220]'>
                <img className="w-20 h-20 object-contain mb-2" src={binance} alt="Binance" />
                <p className='tracking-tighter text-sm text-[#999999] uppercase'>BINANCE</p>
              </div>
            </div>

            {/* Right Column/Group of Partner Images (Bitstamp, Coinbase, Bitfinex) */}
            {/* <Marquee direction='up'> */}

          
            <div className="flex flex-col lg:mt-52 gap-6 md:gap-8"> {/* Removed flex-1 */}
              <div className='px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-5 border border-[#41557280] flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-b from-[#1B1B1E] to-[#41557220]'>
                <img className="w-20 h-20 object-contain mb-2" src={bitstamp} alt="Bitstamp" />
                <p className='tracking-tighter text-sm text-[#999999] uppercase'>BITSTAMP</p>
              </div>
              <div className='px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-5 border border-[#41557280] flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-b from-[#1B1B1E] to-[#41557220]'>
                <img className="w-20 h-20 object-contain mb-2" src={coinbase} alt="Coinbase" />
                <p className='tracking-tighter text-sm text-[#999999] uppercase'>COINBASE</p>
              </div>
              <div className='px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-5 border border-[#41557280] flex flex-col items-center justify-center rounded-lg shadow-lg bg-gradient-to-b from-[#1B1B1E] to-[#41557220]'>
                <img className="w-20 h-20 object-contain mb-2" src={bitfinex} alt="Bitfinex" />
                <p className='tracking-tighter text-sm text-[#999999] uppercase'>BITFINEX</p>
              </div>
            </div>
              {/* </Marquee> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crypto;