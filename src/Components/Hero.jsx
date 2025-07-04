import React from 'react'

function Hero() {
  return (
    <section className=''>
        <div className='flex flex-col justify-center items-center text-center md:text-center mt-20 gap-7'>
            <div className='text-3xl text-white font-medium sm:text-4xl md:text-6xl flex flex-col gap-5 md:gap-10 text-center'>
                <h1>Balancing</h1>
                <h1>Crypto Markets</h1>

                 
            </div>

            <div className='text-[#E5E5E5] text-base'>
                <p>Our fully automated proprietary quantitative trading software<br className="hidden sm:block" />
                 provides 24/7 liquidity to 170+ crypto assets across 25+<br className="hidden sm:block" />
                 centralized spot and derivative crypto exchanges.</p>
            </div>

            <div className='text-white'>
               <button className=' text-l hover:opacity-87 transition-opacity font-bold px-3 py-3 mb-10 bg-linear-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]'>
                    GET IN TOUCH
                 </button>
            </div>
        </div>
    </section>
  )
}

export default Hero