import React from 'react'

const ContactForm = () => {
  return (
    <div className='mt-4'>
      <form >
        <div className="flex items-center gap-[30px]">
            <div className="w-full">
                <label className='block mb-2 poppins text-[15px] font-normal text-[#181818]' htmlFor="">Full Name</label>
                <input className='w-full border pl-3 h-[45px] rounded-md poppins text-[15px] font-normal outline-0 text-[#181818]' type="text" name='name' placeholder='Full Name'/>
            </div>
            <div className="w-full">
                <label className='block mb-2 poppins text-[15px] font-normal text-[#181818]' htmlFor="">Email Address </label>
                <input className='w-full border pl-3 h-[45px] rounded-md poppins text-[15px] font-normal outline-0 text-[#181818]' type="email" name='email' placeholder='example@gmail.com'/>
            </div>
        </div>
        <div className="flex items-center gap-[30px] mt-5">
            <div className="w-full">
                <label className='block mb-2 poppins text-[15px] font-normal text-[#181818]' htmlFor="">Phone Number</label>
                <input className='w-full border pl-3 h-[45px] rounded-md poppins text-[15px] font-normal outline-0 text-[#181818]' type="phone" name='phone' placeholder='+880 1234-567891'/>
            </div>
            <div className="w-full">
                <label className='block mb-2 poppins text-[15px] font-normal text-[#181818]' htmlFor="">Service Interested In</label>
                <select className='w-full border pl-3 h-[45px] rounded-md poppins text-[15px] font-normal outline-0 text-[#181818]' name="service" id="">
                    <option value="">Select a service</option>
                    <option value="">Custom Code Development</option>
                    <option value="">Webflow Development</option>
                    <option value="">Both Services</option>
                </select>
            </div>
        </div>
        <div className="w-full mt-5">
            <label className='block mb-2 poppins text-[15px] font-normal text-[#181818]' htmlFor="">Budget Range</label>
            <select className='w-full border pl-3 h-[45px] rounded-md poppins text-[15px] font-normal outline-0 text-[#181818]' name="budget" id="">
                <option value="">Select your budget range</option>
                <option value="">$2,000 - $4,000</option>
                <option value="">$5,000 - $7,000</option>
                <option value="">$7,000 - $12,000</option>
                <option value="">Not sure yet</option>
            </select>
        </div>
        <div className="mt-5">
            <label className='block mb-2 poppins text-[15px] font-normal text-[#181818]' htmlFor="">Project Details</label>
            <textarea className='w-full border pt-3 pl-3 h-[145px] rounded-md poppins text-[15px] font-normal outline-0 text-[#181818]' name="message" id="" placeholder="Tell us about your project and what you're looking to achieve."></textarea>
        </div>
        <button className='poppins text-[15px] font-normal px-[30px] py-[14px] bg-[#32393e] text-white mt-6 rounded-md' type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
