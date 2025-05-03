import React from 'react'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import project1 from "../../../assets/images/project-1.jpg"

const Project = () => {
  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className="flex justify-between items-center">
            <div className="">
                <span className='poppins text-[16px] font-normal text-[#6e6e6e]'>CLIENTS WE WORK FOR</span>
                <h2 className='poppins text-[50px] font-semibold text-[#353535]'>Our Project.</h2>
            </div>
            <Link className="poppins text-[15px] font-normal px-6 py-[13px] bg-[#32393e] rounded-md text-white flex items-center gap-[5px] border-l-[5px] border-[#ffd957] 
            hover:bg-[#ffd957] transition-all duration-300 hover:text-[#444]" to="/project" ><FaLongArrowAltRight /> View More</Link>
        </div>
        <div className="grid grid-cols-3 gap-[20px] mt-10">
            <div className="p-3 border-gray-700 shadow-sm rounded-xl">
                <div className="">
                    <img src={project1} alt="" />
                </div>
                <div className="text-center mt-5">
                    <h4 className='poppins text-[18px] font-medium'>Creativic Landing Website</h4>
                    <p className='poppins text-[16px] font-sans mt-3'>Identity, Product Design</p>
                    <Link className='poppins text-[15px] font-normal flex items-center gap-[3px] mt-3 justify-center' to="/"><FaLongArrowAltRight /> View Project</Link>
                </div>
            </div>
            <div className="p-3 border-gray-700 shadow-sm rounded-xl">
                <div className="">
                    <img src={project1} alt="" />
                </div>
                <div className="text-center mt-5">
                    <h4 className='poppins text-[18px] font-medium'>Creativic Landing Website</h4>
                    <p className='poppins text-[16px] font-sans mt-3'>Identity, Product Design</p>
                    <Link className='poppins text-[15px] font-normal flex items-center gap-[3px] mt-3 justify-center' to="/"><FaLongArrowAltRight /> View Project</Link>
                </div>
            </div>
            <div className="p-3 border-gray-700 shadow-sm rounded-xl">
                <div className="">
                    <img src={project1} alt="" />
                </div>
                <div className="text-center mt-5">
                    <h4 className='poppins text-[18px] font-medium'>Creativic Landing Website</h4>
                    <p className='poppins text-[16px] font-sans mt-3'>Identity, Product Design</p>
                    <Link className='poppins text-[15px] font-normal flex items-center gap-[3px] mt-3 justify-center' to="/"><FaLongArrowAltRight /> View Project</Link>
                </div>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Project
