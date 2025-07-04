import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import arrowd from '../assets/images/arrowd.png';
import bb from '../assets/images/bb.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
  }, [isOpen]);

  return (
    <>
      <header className=" fixed w-full top-0 left-0 z-50 backdrop-blur-3xl shadow-md">
        <div className="w-[90%] mx-auto pt-10 flex justify-between items-center relative z-20">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex text-white gap-10 items-center relative">
            <div className="flex gap-7">
              <AnchorLink className='hover:text-[#5FA4E6] duration-700' offset={50} href="#about">ABOUT US</AnchorLink>

              <div className="relative group flex items-center gap-1 cursor-pointer">
                <AnchorLink href="" className="flex items-center gap-1 hover:text-[#5FA4E6] duration-700">OUR SERVICES</AnchorLink>
                <img className="w-3 h-3 mb-2" src={arrowd} />
                <div className="absolute top-7 left-0 bg-[#141619] text-white text-sm rounded-md  py-3 px-4 shadow-md shadow-[#5FA4E6] opacity-0 group-hover:opacity-100 group-hover:translate-y-7 transition duration-700 z-30 invisible group-hover:visible">
                  
                  <AnchorLink offset={100} href='#tokens'>
                      <div className="whitespace-nowrap text-lg hover:text-[#5FA4E6] duration-700">Boosting Token Liquidity</div>
                  </AnchorLink>

                   <AnchorLink  offset={100} href='#exchanges'>
                      <div className="whitespace-nowrap text-lg hover:text-[#5FA4E6] duration-700">Boosting Exchanges</div>
                  </AnchorLink>

                  <AnchorLink offset={100} href='#partners'>
                      <div className="whitespace-nowrap text-lg hover:text-[#5FA4E6] duration-700">Partners</div>
                  </AnchorLink>
                </div>
              </div>

              <AnchorLink className='hover:text-[#5FA4E6] duration-700' offset={50} href="#work">WORK WITH US</AnchorLink>
              <AnchorLink className='hover:text-[#5FA4E6] duration-700' offset={100} href="#blog">BLOG</AnchorLink>
            </div>

            <div className="flex gap-3 ml-47 items-center">
              <img className="w-5 h-5" src={bb} />
              <AnchorLink className='hover:text-[#5FA4E6]  duration-700' offset={50} href="#get">GET IN TOUCH</AnchorLink>
            </div>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer z-20">
            {isOpen ? (
              <IoClose size={30} onClick={toggleMenu} color="white" />
            ) : (
              <HiMenu size={30} onClick={toggleMenu} color="white" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#141619] text-white flex flex-col items-center text-center justify-center gap-6 text-xl font-semibold transform transition-transform duration-700 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-10`}
        >
          <AnchorLink className='hover:text-[#5FA4E6] duration-700' onClick={toggleMenu} href="#about">ABOUT US</AnchorLink>

          <div onClick={toggleDropdown} className="flex items-center ml-6 hover:text-[#5FA4E6] duration-700 gap-2 justify-center cursor-pointer">
            OUR SERVICES
            <img className="w-3 h-3 mb-2" src={arrowd} />
          </div>

          {dropdownOpen && (
            <div className="flex flex-col items-center gap-5 text-base">
             
              <AnchorLink offset={100} onClick={toggleMenu} href='#tokens'>
                    <div className="text-xl hover:text-[#5FA4E6] duration-700">Boosting Token Liquidity</div>
              </AnchorLink>

              <AnchorLink offset={100} onClick={toggleMenu} href='#exchanges'>
                    <div className="text-xl hover:text-[#5FA4E6] duration-700">Boosting Exchanges</div>
              </AnchorLink>

              <AnchorLink offset={50} onClick={toggleMenu} href='#partners'>
                    <div className="text-xl hover:text-[#5FA4E6] duration-700">Partners</div>
              </AnchorLink>
            </div>
          )}

          <AnchorLink className='hover:text-[#5FA4E6] duration-700' offset={50} onClick={toggleMenu} href="#work">WORK WITH US</AnchorLink>
          <AnchorLink className='hover:text-[#5FA4E6] duration-700' offset={150} onClick={toggleMenu} href="#blog">BLOG</AnchorLink>
          <AnchorLink className='hover:text-[#5FA4E6] duration-700' offset={80} onClick={toggleMenu} href="#get">GET IN TOUCH</AnchorLink>
        </div>
      </header>

      <div className="h-[80px] md:h-[80px]"></div>
    </>
  );
}

export default Navbar;
