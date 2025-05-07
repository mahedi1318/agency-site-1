import React from 'react'
import ShowCaseImg1 from "../../../assets/images/show-1.webp"
import ShowCaseImg2 from "../../../assets/images/show.webp"
import { Link } from 'react-router'

const CoustomProjectShowcase = () => {
  return (
    <div className='py-[100px] bg-[#f3f4f6]'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]"> 
            <div className="rounded-xl overflow-hidden shadow-lg pb-5 group">
                <div className="w-full h-[250px] overflow-hidden">
                    <img className='w-full h-[250px] object-cover  group-hover:scale-125 transition-all duration-300' src={ShowCaseImg1} alt="" />
                </div>
                <div className="px-[15px] mt-6">
                    <p className='poppins text-[15px] font-normal leading-[27px]'>We built a custom e-commerce platform with advanced filtering, real-time inventory management, and a streamlined 
                    checkout process that increased conversions by 35%.</p>
                    <Link to="/project" className='poppins text-[16px] font-normal text-[#bd9103] px-6 py-[12px] mt-5 inline-block hover:bg-[#dbdce0] rounded-md' >View Full Case Study</Link>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg pb-5 group">
                <div className="w-full h-[250px] overflow-hidden">
                    <img className='w-full h-[250px] object-cover group-hover:scale-125 transition-all duration-300' src={ShowCaseImg2} alt="" />
                </div>
                <div className="px-[15px] mt-6">
                    <p className='poppins text-[15px] font-normal leading-[27px]'>Developed an intuitive analytics dashboard with real-time data visualization, custom reporting tools, 
                        and user permission management.</p>
                    <Link to="/project" className='poppins text-[16px] font-normal text-[#bd9103] px-6 py-[12px] mt-5 inline-block hover:bg-[#dbdce0] rounded-md' >View Full Case Study</Link>
                </div>
            </div>
        </div>
        <div className="text-center mt-6 rounded-md">
            <Link to="/project" className='poppins text-[16px] font-normal text-[#bd9103] px-6 py-[12px] mt-5 inline-block border-2 rounded-md hover:bg-[#bd9103] hover:text-[#272727] hover:border-[#bd9103]' >View All Case Studies</Link>
        </div>
      </div>
    </div>
  )
}

export default CoustomProjectShowcase
