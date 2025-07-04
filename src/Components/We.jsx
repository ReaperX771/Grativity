import React, { useState, useEffect } from "react";
import arrowcl from '../assets/images/arrowcl.png'
import arrowcr from '../assets/images/arrowcr.png'
import bitkub from '../assets/images/bitkub.png'
import bitstamppp from '../assets/images/bitstamppp.png'
import bitbankk from '../assets/images/bitbankk.png'

function We() {
  const testimonials = [
    {
      text: (
        <>
          Since 2019, Gravity team has been an astounding
          <br className="hidden sm:block" /> market maker for Bitkub. They have
          proven themselves
          <br className="hidden sm:block" /> to be one of the most consistent,
          committed and
          <br className="hidden sm:block" /> driven market makers on our
          exchange. Gravity Team
          <br className="hidden sm:block" /> has contributed high-quality volume
          and has proven to
          <br className="hidden sm:block" /> be very reliable and trustworthy
          partner. We strongly
          <br className="hidden sm:block" /> advocate Gravity Team as they have
          been an
          <br className="hidden sm:block" /> indispensable part of our
          market-making team.
        </>
      ),
      author: "Atthakrit Chimplapibul",
      title: "Co-founder & CEO of Bitkub",
      logo: bitkub,
    },
    {
      text: (
        <>
          Gravity Team has been instrumental in enhancing
          <br className="hidden sm:block" /> the liquidity and reliability of
          our trading pairs
          <br className="hidden sm:block" /> on Bitstamp. Their deep
          understanding of market
          <br className="hidden sm:block" /> dynamics and their consistent
          performance have
          <br className="hidden sm:block" /> made them an invaluable partner. We
          value their
          <br className="hidden sm:block" /> commitment to operational
          excellence and their
          <br className="hidden sm:block" /> proactive approach in maintaining a
          healthy market
          <br className="hidden sm:block" /> environment for our global user
          base
        </>
      ),
      author: "Jean-Baptiste Graftieaux",
      title: "CEO of Bitstamp",
      logo: bitstamppp,
    },
    {
      text: (
        <>
          Our collaboration with Gravity Team has significantly
          <br className="hidden sm:block" /> strengthened the market stability
          on BitBank.
          <br className="hidden sm:block" /> Their sophisticated strategies and
          robust infrastructure
          <br className="hidden sm:block" /> ensure optimal trading conditions
          for our clients.
          <br className="hidden sm:block" /> We are thoroughly impressed with
          their professionalism
          <br className="hidden sm:block" /> and their ability to consistently
          provide competitive
          <br className="hidden sm:block" /> spreads. Gravity Team is a trusted
          and essential
          <br className="hidden sm:block" /> partner in our mission to deliver
          secure and efficient
          <br className="hidden sm:block" /> cryptocurrency trading services in
          Japan.
        </>
      ),
      author: " Noriyuki Hirosue",
      title: "CEO of BitBank",
      logo: bitbankk,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // New state for managing fade
  const autoscrollInterval = 5000; // 5 seconds to stay on a testimonial
  const transitionDuration = 700; // 0.5 seconds for the fade transition

  const updateTestimonial = (newIndex) => {
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      setCurrentTestimonialIndex(newIndex);
      setIsFading(false); // End fade-in after content changes
    }, transitionDuration); // This timeout should match your CSS transition duration
  };

  const goToNextTestimonial = () => {
    const nextIndex =
      currentTestimonialIndex === testimonials.length - 1
        ? 0
        : currentTestimonialIndex + 1;
    updateTestimonial(nextIndex);
  };

  const goToPreviousTestimonial = () => {
    const prevIndex =
      currentTestimonialIndex === 0
        ? testimonials.length - 1
        : currentTestimonialIndex - 1;
    updateTestimonial(prevIndex);
  };

  // useEffect for autoscrolling
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextTestimonial();
    }, autoscrollInterval + transitionDuration); // Wait for transition to complete before next scroll

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentTestimonialIndex, autoscrollInterval, transitionDuration]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section id='blog' className="mt-10 md:mt-30">
      <div>
        <div>
          <div className="flex flex-col gap-7">
            <h1 className="text-white font-medium text-3xl md:text-4xl lg:text-5xl text-center">
              We are in a good company
            </h1>
            <p className="text-center text-white/92 font-normal text-sm md:text-xl lg:text-md tracking-tight">
              Our partnerships have delivered great value to our projects and
              <br className='"hidden sm:block"' /> we’re happy to share some of
              their feedback below
            </p>
          </div>

          <div className="flex justify-center items-center mt-7 mb-7 gap-4 lg:gap-7">
            <img
              className="w-10 lg:w-13 cursor-pointer"
              src={arrowcr}
              onClick={goToPreviousTestimonial}
              alt="Previous Testimonial"
            />
            <img
              className="w-10 lg:w-13 cursor-pointer"
              src={arrowcl}
              onClick={goToNextTestimonial}
              alt="Next Testimonial"
            />
          </div>

          <div className="">
            {/* Apply transition class based on isFading state */}
            <div
              className={`testimonial-content ${
                isFading ? "fade-out" : "fade-in"
              }`}
            >
              <h1 className="text-center text-sm md:text-xl lg:text-xl text-white/92 font-extralight leading-6 lg:leading-10 ">
                {currentTestimonial.text}
              </h1>

              <p className="text-l md:text-xl lg:text-lg font-extrabold mt-5 mb-5 text-white text-center">
                {currentTestimonial.author}
              </p>

              <div className="flex justify-center text-center items-center gap-2">
                <h1 className="text-white/92 border-r px-5">
                  {currentTestimonial.title}
                </h1>
                <img
                  className="w-25"
                  src={currentTestimonial.logo}
                  alt="Company Logo"
                />
              </div>
            </div>
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentTestimonialIndex ? "bg-white" : "bg-white/30"
                } cursor-pointer`}
                onClick={() => updateTestimonial(index)} // Use updateTestimonial here too
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default We;
