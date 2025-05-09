import React from 'react'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCodeSharp } from "react-icons/io5";
import { FiLayout } from "react-icons/fi";

const Service = () => {
  return (
    <div className='py-[100px] bg-[#fff]'>
      <div className="container">
          <div className="">
            <span className='poppins text-[16px] font-normal text-[#181818]'>Services</span>
            <motion.h2 initial={{ opacity: 0, y: -150 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className='poppins text-[20px] text-[#181818] sm:text-[35px] md:text-[50px] font-semibold leading-[30px] sm:leading-[48px] md:leading-[68px] mt-4'>We always serve various digital brands.</motion.h2>
            {/* <Link className='poppins text-[15px] font-normal px-6 py-[13px] bg-[#32393e] rounded-md text-white inline-flex items-center gap-[5px] border-l-[5px] border-[#ffd957] 
            hover:bg-[#ffd957] transition-all duration-300 hover:text-[#444] mt-10' to="/" ><FaLongArrowAltRight /> Get started</Link> */}
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] mt-12">
          <div className="p-[30px] shadow-xl rounded-xl group">
            <div className="w-[55px] h-[55px] flex justify-center items-center text-[22px] shadow rounded-md mb-8 bg-[rgba(189,145,3,0.2)]">
              <IoCodeSharp />
            </div>
            <h3 className='poppins text-[24px] font-semibold text-[#181818] group-hover:text-[#bd9103]'>Custom Code Development</h3>
            <p className='poppins text-[16px] font-normal mt-3 text-[#181818]'>We build custom websites and web applications from scratch using modern frameworks and technologies.</p>
            <div className="mt-6">
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#bd9103]' />
                <span className='poppins text-[14px] font-normal'>Tailor-made solutions that perfectly match your needs</span>
              </div>
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#bd9103]' />
                <span className='poppins text-[14px] font-normal'>Tailor-made solutions that perfectly match your needs</span>
              </div>
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#bd9103]' />
                <span className='poppins text-[14px] font-normal'>Tailor-made solutions that perfectly match your needs</span>
              </div>
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#bd9103]' />
                <span className='poppins text-[14px] font-normal'>Tailor-made solutions that perfectly match your needs</span>
              </div>            
            </div>
            <Link to="/customCode" className='poppins text-[15px] font-normal px-6 py-[13px] bg-[#bd9103] text-[#313131] rounded-md inline-flex mt-8'>Learn More</Link>
          </div>
          <div className="p-[30px] shadow-xl rounded-xl group">
            <div className="w-[55px] h-[55px] flex justify-center items-center text-[22px] shadow rounded-md mb-8 bg-[rgba(0,164,148,0.2)]">
              <FiLayout />
            </div>
            <h3 className='poppins text-[24px] font-semibold text-[#181818] group-hover:text-[#00a494]'>Webflow Development</h3>
            <p className='poppins text-[16px] font-normal mt-3 text-[#181818]'>We create stunning, responsive websites using Webflow's powerful visual design platform.</p>
            <div className="mt-6 text-[#181818]">
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#00a494]' />
                <span className='poppins text-[14px] font-normal'>Faster turnaround times and lower development costs</span>
              </div>
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#00a494]' />
                <span className='poppins text-[14px] font-normal'>Powerful CMS for easy content management</span>
              </div>
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#00a494]' />
                <span className='poppins text-[14px] font-normal'>Responsive designs that work on all devices</span>
              </div>
              <div className="mt-4 flex items-center gap-[8px]">
                <IoIosCheckmarkCircleOutline className='text-[20px] text-[#00a494]' />
                <span className='poppins text-[14px] font-normal'>Easy handoff and client editing capabilities</span>
              </div>             
            </div>
            <Link to="/webflow" className='poppins text-[15px] font-normal px-6 py-[13px] bg-[#00a494] text-[#fff] rounded-md inline-flex mt-8'>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
