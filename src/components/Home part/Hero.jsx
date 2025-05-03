import React from 'react'
import heroImg from "../../assets/images/hero.png"

const Hero = () => {
  return (
    <div className='w-full pt-[200px] pb-[20px] bg-[#ffd957]'>
      <div className="container">
        <div className="grid grid-cols-2 gap-[50px]">
          <div className="">
            <h1 className='poppins text-[60px] font-semibold leading-[70px]'>Build your digital brand from zero to hero.</h1>
            <p className='poppins text-[15px] font-normal w-[420px] leading-[25px] mt-5 text-[#4d5459]'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
               eiusmod tempor incididunt ut labore mag aliqua sehi fociras.</p>
            <div className="flex mt-6">
              <input type="email" name='email' placeholder='Email' className='border border-[#7e7a7a] w-[50%] h-[50px] pl-3 outline-0 rounded-bl-lg rounded-tl-lg'/>
              <button type='submit' className='px-5 h-[50px] bg-[#444] text-white poppins text-[15px] font-semibold rounded-br-lg rounded-tr-lg'>Get started</button>
            </div>
          </div>
          <div className="">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
