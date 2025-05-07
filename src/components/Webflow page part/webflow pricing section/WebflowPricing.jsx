import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from 'react-router';

const WebflowPricing = () => {
  return (
    <div className='py-[100px]'>
        <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            <div className="p-6 shadow-lg rounded-lg ">
                <h3 className='poppins text-[24px] font-semibold'>Essential</h3>
                <span className='poppins text-[26px] font-medium inline-block mt-2 text-[#bd9103]'>$5,000 - $15,000</span>
                <p className='poppins text-[16px] font-normal leading-[26px] mt-2'>Perfect for small businesses and startups looking to establish their online presence with a custom solution.</p>
                <div className="mt-6 ">
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Up to 5 unique page templates</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Responsive design for all devices</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Basic Webflow CMS setup</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Contact form integration</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Basic SEO optimization</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>1 revision round</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>30 days of support post-launch</p>
                    </div>
                </div>
                <Link to="/contact" className='poppins text-[16px] font-medium py-[12px] w-full border-2 block text-center mt-8 rounded-lg hover:bg-[#ffd957]
                    hover:border-[#ffd957] transition-all duration-300'>Get Started</Link>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
                <h3 className='poppins text-[24px] font-semibold'>Professional</h3>
                <span className='poppins text-[26px] font-medium inline-block mt-2 text-[#bd9103]'>$5,000 - $15,000</span>
                <p className='poppins text-[16px] font-normal leading-[26px] mt-2'>Ideal for growing businesses that need more advanced functionality and integrations.</p>
                <div className="mt-6 ">
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
                    border-[#ffd957] transition-all duration-300'>Get Started</Link>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
                <h3 className='poppins text-[24px] font-semibold'>Enterprise</h3>
                <span className='poppins text-[26px] font-medium inline-block mt-2 text-[#bd9103]'>$5,000 - $15,000</span>
                <p className='poppins text-[16px] font-normal leading-[26px] mt-2'>Comprehensive solutions for large organizations with complex content and integration needs.</p>
                <div className="mt-6 ">
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Unlimited unique page templates</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Advanced animations and micro-interactions</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Complex multi-language setup</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Advanced filtering and search functionality</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Multiple CMS collections with relationships</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>Third-party integrations</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>3 revision rounds</p>
                    </div>
                    <div className="flex items-center gap-[10px] mb-3">
                        <IoCheckmarkCircleOutline className='text-[22px] text-[#bd9103]' />
                        <p className='poppins text-[14px] font-sans'>90 days of support post-launch</p>
                    </div>
                </div>
                <Link to="/contact" className='poppins text-[16px] font-medium py-[12px] w-full border-2 block text-center mt-8 rounded-lg hover:bg-[#ffd957]
                    hover:border-[#ffd957] transition-all duration-300'>Get Started</Link>
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

export default WebflowPricing
