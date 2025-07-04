import React from 'react';
import bgstll from '../assets/images/bgstll.png';

function Contact() {
  return (
    <section id='get' className="relative py-10 md:min-h-screen flex items-center justify-center overflow-hidden ]">
  {/* Background Image Container */}
  <div
    className='absolute inset-0 w-full h-full animate-pulse'
    style={{
      backgroundImage: `url(${bgstll})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>

      {/* Text Content Overlay */}
      <div className='relative z-10 flex flex-col gap-4 md:gap-7 justify-center items-center text-center max-w-4xl px-4'> {/* Added z-10 and max-w for better text wrapping */}
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight'>Contact us</h1>
        <p className="text-white/92 text-base md:text-lg leading-relaxed px-4"> {/* Added horizontal padding */}
          We are always open to discuss new value-adding partnerships. Do reach
          <br className="hidden sm:block" /> out if you are an exchange or a project looking for liquidity; an algorithmic
          <br className="hidden sm:block" /> trader or a software developer looking to improve the markets with us
          <br className="hidden sm:block" /> just have a great idea you can’t wait to share with us!
        </p>

        <div className='text-white mt-4'> {/* Added margin-top for spacing */}
          <button className='text-l font-bold px-8 py-3  bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] hover:opacity-87 transition-opacity'> {/* Added rounded-full and gradient classes */}
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;