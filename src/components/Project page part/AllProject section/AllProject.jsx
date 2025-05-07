import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import project1 from "../../../assets/images/project-1.jpg"

const AllProject = () => {

    const allProjectDetails = [
        {
          imagesName: project1,
          title: "Custom Code Website",
          brandName: "React, Tailwind",
          category: "custom",
        },
        {
          imagesName: project1,
          title: "Webflow Portfolio",
          brandName: "Web Design, CMS",
          category: "webflow",
        },
        {
          imagesName: project1,
          title: "Admin Dashboard",
          brandName: "Next.js, API",
          category: "custom",
        },
        {
          imagesName: project1,
          title: "Webflow SaaS Site",
          brandName: "Marketing, SaaS",
          category: "webflow",
        },
        {
        imagesName: project1,
        title: "custom SaaS Site",
        brandName: "Marketing, SaaS",
        category: "custom",
        },
        {
        imagesName: project1,
        title: "custom SaaS Site",
        brandName: "Marketing, SaaS",
        category: "custom",
        },
        {
        imagesName: project1,
        title: "Webflow SaaS Site",
        brandName: "Marketing, SaaS",
        category: "webflow",
        },
        {
        imagesName: project1,
        title: "custom SaaS Site",
        brandName: "Marketing, SaaS",
        category: "custom",
        },
      ];
    
    const [activeTab, setActiveTab] = useState("custom")

    const filteredProject = allProjectDetails.filter(
        (project) => project.category === activeTab
    )

  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="flex gap-4 justify-center mb-4">
                <button onClick={()=>setActiveTab("custom")} className={`px-5 py-2 rounded-full transition ${activeTab === "custom" ? "bg-[#0f1425] text-white" : "bg-gray-200 text-black"}`}>Custom Code</button>
                <button onClick={()=>setActiveTab("webflow")} className={`px-5 py-2 rounded-full transition ${activeTab === "webflow" ? "bg-[#0f1425] text-white" : "bg-gray-200 text-black"}`}>Webflow</button>
            </div>
        </div>
        {/* -------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {filteredProject.map((item, index)=>(
                <div key={index} className="px-4 pt-4 pb-6 border border-[#e9e9e9] rounded-xl shadow-sm">
                    <div className="">
                        <img src={item.imagesName} alt="" />
                    </div>
                    <div className="text-center mt-6">
                        <h3 className='poppins text-[20px] font-semibold'>{item.title}</h3>
                        <p className='poppins text-[18px] font-sans mt-3'>{item.brandName}</p>
                        <Link to="/" className="poppins text-[14px] font-normal px-10 py-[13px] bg-[#32393e] rounded-md text-white inline-block mt-6 hover:bg-[#ffd957]
                        hover:text-[#444] transition-all duration-300">View porject</Link>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AllProject
