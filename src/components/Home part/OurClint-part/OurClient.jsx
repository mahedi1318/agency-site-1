import React from 'react'
import clintImg1 from "../../../assets/images/clint-1.png"
import { motion } from 'framer-motion'

const OurClient = () => {

    const clintImg = [
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        },
        {
            images : clintImg1,
        }
    ]

  return (
    <div className='bg-[#ffd957] py-[100px]'>
      <div className="container">
        <div className="text-center">
            <motion.span initial={{ opacity: 0, y: 50 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className='poppins text-[16px] font-normal text-[#181818]'>OUR CLIENT</motion.span>
            <motion.h2 initial={{ opacity: 0, y: -60 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className='poppins text-[30px] md:text-[50px] font-semibold leading-[38px] md:leading-[68px] mt-4 md:mt-0 text-[#181818]'>You're in good company</motion.h2>
            <motion.p initial={{ opacity: 0, y: 50 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className='poppins text-[15px] font-sans text-[#4D5459] leading-[24px] md:leading-[34px] w-[100% md:w-[550px] mt-7 m-auto'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore mag aliqua sehi fociras.</motion.p>
        </div>
        <div className="w-[100%] lg:w-[80%] m-auto mt-12">
            <motion.div initial={{ opacity: 0, y: -150 }} animate={{opacity: 1, y: 0}} transition={{ duration: 1}} className="grid grid-cols-2 md:grid-cols-4">
                {clintImg.map((item, index)=>(
                    <div key={index} className="m-auto">
                        <img src={item.images} alt="" />
                    </div>
                ))}                
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OurClient
