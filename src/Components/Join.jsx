import React from "react";
import arrowr from "../assets/images/arrowr.png";
import bgstl from "../assets/images/bgstl.png";

function Join() {
  return (
    <section id='work' className=" py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/* Left - Title with background */}
        <div
          className="relative text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-center md:text-left" // Added text-center for mobile
          style={{
            backgroundImage: `url(${bgstl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: "4rem 2rem",
            // borderRadius: "9999px",
            flexShrink: 0, // Prevent shrinking on smaller screens
            minWidth: '20px', // Ensure a minimum width for the background image div
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <div>
              <h1 className=''>
            Join <br className="hidden sm:block" /> Gravity Team
          </h1>
          </div>
        
         
        </div>

        {/* Right - Text & Link */}
        <div className="max-w-xl text-white/90 text-center md:text-start text-base md:text-lg leading-relaxed space-y-6">
          <p>
            Join our community of innovators, problem solvers and owners who
            apply scientific discovery techniques to make crypto markets a better
            place for everyone.
          </p>
          <p>
            As we emphasize it in our name — Gravity Team, we are a team. A team
            of bright, talented people, each masters of their specialty, curious
            about the world and eager to solve the new exciting cryptocurrency
            market problems, build cool stuff and have fun whilst doing so!
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white hover:opacity-80 transition border-b border-white pb-1" // Added border-b and pb-1
          >
            Learn more about working with us
            <img src={arrowr} alt="Arrow Right" className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Join;