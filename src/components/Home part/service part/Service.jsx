import React from 'react'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <div className='py-[100px] bg-[#fff]'>
      <div className="container">
        <div className="grid xl:grid-cols-3 gap-[50px]">
          <div className="">
            <span className='poppins text-[16px] font-normal text-[#181818]'>Services</span>
            <motion.h2 initial={{ opacity: 0, y: -150 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className='poppins text-[20px] text-[#181818] sm:text-[35px] md:text-[50px] font-semibold leading-[30px] sm:leading-[48px] md:leading-[68px] mt-4'>We always serve various digital brands.</motion.h2>
            <Link className='poppins text-[15px] font-normal px-6 py-[13px] bg-[#32393e] rounded-md text-white inline-flex items-center gap-[5px] border-l-[5px] border-[#ffd957] 
            hover:bg-[#ffd957] transition-all duration-300 hover:text-[#444] mt-10' to="/" ><FaLongArrowAltRight /> Get started</Link>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              <div className="border-r border-[#ebebeb]">
                <h2 className='poppins text-[22px] font-medium'>Brand Design</h2>
                <p className='poppins text-[15px] font-sans leading-[34px] w-[100%] md:w-[300px] mt-6 mb-6'>Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="">
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3">
                      <span><IoCheckmarkSharp /></span>
                      <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className='poppins text-[22px] font-medium'>Content Marketing</h2>
                <p className='poppins text-[15px] font-sans leading-[34px] w-[100%] md:w-[300px] mt-6 mb-6'>Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="">
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3">
                      <span><IoCheckmarkSharp /></span>
                      <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                </div>
              </div>  
              <div className="border-r border-[#ebebeb]">
                <h2 className='poppins text-[22px] font-medium'>Front End Developer</h2>
                <p className='poppins text-[15px] font-sans leading-[34px] w-[100%] md:w-[300px] mt-6 mb-6'>Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="">
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3">
                      <span><IoCheckmarkSharp /></span>
                      <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                </div>
              </div> 
              <div className="">
                <h2 className='poppins text-[22px] font-medium'>UI/UX Design</h2>
                <p className='poppins text-[15px] font-sans leading-[34px] w-[100%] md:w-[300px] mt-6 mb-6'>Lorem ipsum dolor sit amet, cons adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="">
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span><IoCheckmarkSharp /></span>
                    <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                  <div className="flex items-center gap-3">
                      <span><IoCheckmarkSharp /></span>
                      <h5 className='poppins text-[15px] font-sans'>Amazing Process</h5>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
