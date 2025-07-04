import React from 'react'
import logof from '../assets/images/logof.png'

function Footer() {
  return (
    <footer>
        <div className='flex flex-col mt-27 lg:mt-0 gap-15 lg:gap-17'>
             <hr className='border-t border-white/17 lg:py-3' />
            <div className='flex justify-between w-[80%] mx-auto'>
               
                <div className=' font-normal text-lg flex flex-col gap-2 md:text-xl'>
                    <h1 className='text-white'>Gravity Team</h1>
                    <p className='text-[#BCBCBC] text-sm md:text-lg font-normal'>About Us</p>
                    <p className='text-[#BCBCBC] text-sm md:text-lg font-normal'>Work with us</p>
                </div>

                <div>
                    <img className='w-27 lg:w-full' src={logof}/>
                </div>
            </div>

            <div className='flex justify-between text-[#BCBCBC] flex-col lg:flex-row text-center lg:text-start text-sm md:text-lg font-normal w-[80%] mx-auto'>
                <p>Terms of Use & Privacy Policy</p>
                <p className=''>©2022 Gravity Team. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer