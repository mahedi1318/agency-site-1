import React from 'react'
import { FiClock } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";
import { LuSlidersHorizontal } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { LuSparkles } from "react-icons/lu";


const WebflowService = () => {

    const webflowServiceData = [
            {
                icons: <FiClock />,
                names: "Faster Time to Market",
                description: "Get your website up and running in weeks, not months, with Webflow's visual development platform."
            },
            {
                icons: <FaDollarSign />,
                names: "Cost-Effective",
                description: "Reduce development costs while maintaining a high-quality, professional website design."
            },
            {
                icons: <MdOutlinePalette />,
                names: "Stunning Designs",
                description: "Create beautiful, unique designs without compromising on aesthetics or functionality."
            },
            {
                icons: <LuSlidersHorizontal />,
                names: "Powerful CMS",
                description: "Easily manage your content with Webflow's intuitive content management system."
            },
            {
                icons: <CiGlobe />,
                names: "SEO-Friendly",
                description: "Built-in SEO tools and clean code that help improve your search engine rankings."
            },
            {
                icons: <LuSparkles />,
                names: "Animations & Interactions",
                description: "Create impressive micro-interactions and animations without custom coding."
            },        
        ]

  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {webflowServiceData.map((item, index)=>(
                <div key={index} className="p-[25px] shadow-md rounded-lg">
                    <div className="w-[50px] h-[50px] bg-[#ffd957] flex justify-center items-center mb-5 rounded-lg text-[30px] text-[#6b6b6b]">
                        {item.icons}
                    </div>
                    <h3 className='poppins text-[20px] font-semibold'>{item.names}</h3>
                    <p className='poppins text-[16px] font-normal mt-4'>{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default WebflowService
