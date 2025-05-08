import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from 'react-router';

const CoustomPricingPlans = () => {
  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            <div className="p-6 shadow-lg rounded-lg ">
                <h3 className='poppins text-[24px] font-semibold text-[#181818]'>Startup</h3>
                <span className='poppins text-[26px] font-medium inline-block mt-2 text-[#bd9103]'>$5,000 - $15,000</span>
                <p className='poppins text-[16px] font-normal leading-[26px] mt-2 text-[#181818]'>Perfect for small businesses and startups looking to establish their online presence with a custom solution.</p>
                <div className="mt-6 text-[#181818]">
                    <div className="flex items-center gap-[10px] mb-3 ">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Custom website or web application</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Responsive design for all devices</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>CMS integration</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Basic SEO optimization</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Contact/inquiry forms</p>
                    </div>
                </div>
                <Link to="/contact" className='poppins text-[16px] font-medium py-[12px] w-full border-2 block text-center mt-8 rounded-lg hover:bg-[#ffd957]
                 hover:border-[#ffd957] transition-all duration-300 text-[#181818]'>Get Started</Link>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
                <h3 className='poppins text-[24px] font-semibold text-[#181818]'>Business</h3>
                <span className='poppins text-[26px] font-medium inline-block mt-2 text-[#bd9103]'>$5,000 - $15,000</span>
                <p className='poppins text-[16px] font-normal leading-[26px] mt-2 text-[#181818]'>Ideal for growing businesses that need more advanced functionality and integrations.</p>
                <div className="mt-6 text-[#181818]">
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Everything in Startup, plus:</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>E-commerce capabilities</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Custom database development</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Third-party API integrations</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>User authentication system</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Advanced analytics</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Admin dashboard</p>
                    </div>                    
                </div>
                <Link to="/contact" className='poppins text-[16px] font-medium py-[12px] w-full border-2 block text-center mt-8 rounded-lg bg-[#ffd957]
                 border-[#ffd957] transition-all duration-300 text-[#181818]'>Get Started</Link>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
                <h3 className='poppins text-[24px] font-semibold text-[#181818]'>Enterprise</h3>
                <span className='poppins text-[26px] font-medium inline-block mt-2 text-[#bd9103]'>$5,000 - $15,000</span>
                <p className='poppins text-[16px] font-normal leading-[26px] mt-2 text-[#181818]'>Comprehensive solutions for large organizations with complex requirements.</p>
                <div className="mt-6 text-[#181818]">
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Everything in Business, plus:</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Custom software development</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Advanced security features</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>High-performance optimizations</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Multiple user roles and permissions</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Workflow automation</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Scalable architecture</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Priority support</p>
                    </div>
                </div>
                <Link to="/contact" className='poppins text-[16px] font-medium py-[12px] w-full border-2 block text-center mt-8 rounded-lg hover:bg-[#ffd957]
                 hover:border-[#ffd957] transition-all duration-300 text-[#181818]'>Get Started</Link>
            </div>
        </div>
        <div className="">
            <p className='poppins text-[16px] font-normal w-[100%] lg:w-[700px] leading-[25px] m-auto text-center mt-14 text-[#8a8a8a]'>Need a custom quote? Every project is unique, and we're happy to provide detailed pricing based on your specific requirements.
                 Contact us today for a personalized consultation.</p>
        </div>
      </div>
    </div>
  )
}

export default CoustomPricingPlans
