import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import ContactForm from './ContactForm';


const Contactdetails = () => {
  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[60px]">
            <div className="col-span-2">
                <div className="">
                    <h2 className='poppins text-[20px] md:text-[30px] font-semibold text-[#181818]'>Contact Information</h2>
                    <p className='poppins text-[14px] md:text-[16px] font-normal mt-6 leading-[24px] text-[#858585] '>Fill out the form or contact us directly using the 
                        information below. We'll get back to you within 24 hours.</p>
                    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                        <div className="block md:flex items-start gap-[15px] mt-5 text-[#181818]">
                            <div className="w-[45px] h-[45px] bg-[#f0eded] rounded-full flex justify-center items-center ">
                                <IoLocationOutline className='text-[25px]' />
                            </div>
                            <div className="">
                                <h3 className='poppins text-[18px] md:text-[25px] font-semibold leading-34px]'>Our Office</h3>
                                <p className='poppins text-[14px] md:text-[16px] font-normal mt-1 leading-[24px] w-[300px] text-[#858585]'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="block md:flex items-start gap-[15px] mt-5 text-[#181818]">
                            <div className="w-[45px] h-[45px] bg-[#f0eded] rounded-full flex justify-center items-center ">
                                <MdOutlineMarkEmailRead className='text-[25px]' />
                            </div>
                            <div className="">
                                <h3 className='poppins text-[18px] md:text-[25px] font-semibold leading-34px]'>Email Us</h3>
                                <p className='poppins text-[14px] md:text-[16px] font-normal mt-1 leading-[24px] w-[300px] text-[#858585]'>example@mail.com</p>
                            </div>
                        </div>
                        <div className="block md:flex items-start gap-[15px] mt-5 text-[#181818]">
                            <div className="w-[45px] h-[45px] bg-[#f0eded] rounded-full flex justify-center items-center ">
                                <IoCallOutline className='text-[25px]' />
                            </div>
                            <div className="">
                                <h3 className='poppins text-[18px] md:text-[25px] font-semibold leading-34px]'>Call Us</h3>
                                <p className='poppins text-[14px] md:text-[16px] font-normal mt-1 leading-[24px] w-[300px] text-[#858585]'>+880 1234-567891</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 ">
                <div className="">
                    <h2 className='poppins text-[30px] font-semibold text-[#181818]'>Send Us a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contactdetails
