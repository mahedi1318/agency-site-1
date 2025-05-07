import React from 'react'
import heroImg from "../../assets/images/hero.png"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-full pt-[120px] md:pt-[200px] pb-[20px] bg-[#ffd957]'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          <div className="">
            <motion.h1 initial={{ opacity: 0, y: -200 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className='poppins text-[30px] lg:text-[40px] xl:text-[60px] font-semibold leading-[40px] lg:leading-[50px] xl:leading-[70px] text-[#444]'>Build your digital brand from zero to hero.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className='poppins text-[15px] font-normal w-[100%] md:w-[320px] lg:w-[420px] leading-[25px] mt-5 text-[#4d5459]'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
               eiusmod tempor incididunt ut labore mag aliqua sehi fociras.</motion.p>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className="flex mt-6">
              <input type="email" name='email' placeholder='Email' className='border border-[#7e7a7a] w-[50%] h-[50px] text-[#4d5459] pl-3 outline-0 rounded-bl-lg rounded-tl-lg'/>
              <button type='submit' className='px-5 h-[50px] bg-[#444] text-white poppins text-[15px] font-semibold rounded-br-lg rounded-tr-lg'>Get started</button>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 250 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className="">
            <img src={heroImg} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
