import React from 'react'
import about1 from "../../../assets/images/about-1.webp"

const AboutStory = () => {
  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className="grid grid-cols-2 gap-[40px]">
            <div className="">
                <h2 className='poppins text-[30px] font-semibold leading-[40px] mb-7 text-[#181818]'>Our Story</h2>
                <p className='poppins tetx-[16px] font-normal leading-[26px] mt-5 text-[#686868]'>Founded in 2017, Pixel Perfect began with a simple mission: to bridge the gap between beautiful design and functional technology. 
                    What started as a small team of three passionate freelancers has grown into a full-service digital agency serving clients worldwide.</p>
                <p className='poppins tetx-[16px] font-normal leading-[26px] mt-5 text-[#686868]'>We believe that exceptional digital experiences aren't just about aesthetics or technology alone—they're about finding the perfect balance between 
                    form and function. That's why we offer both custom code development for complex, feature-rich projects and Webflow solutions for clients 
                    who need beautiful sites with quick turnaround times.</p>
                <p className='poppins tetx-[16px] font-normal leading-[26px] mt-5 text-[#686868]'>Today, we're proud to have helped over 100 businesses transform their digital presence and achieve their goals. From startups to established brands, 
                    we approach each project with the same dedication to quality and results.</p>
            </div>
            <div className="">
                <img className='w-full h-full object-cover rounded-lg' src={about1} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutStory
