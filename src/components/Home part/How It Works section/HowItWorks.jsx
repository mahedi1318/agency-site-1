import React from 'react'
import { FaUserAlt, FaPenNib, FaCode, FaRocket } from "react-icons/fa";

const HowItWorks = () => {
    const experiences = [
        {
          skills: "Discovery",   
          description:
            "We start by understanding your goals, target audience, and unique requirements through in-depth consultations.",
          icon: <FaUserAlt />,
          align: "left",
        },
        {
            skills: "Strategy & Design",      
          description:
            "The success of every websites depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search...",
          icon: <FaPenNib />,
          align: "right",
        },
        {
            skills: "Development",        
          description:
            "The success of every websites depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search...",   
            icon: <FaCode />,   
          align: "left",
        },
        {
            skills: "Launch & Support",       
        description:
            "The success of every websites depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search...",      
        icon: <FaRocket />,
        align: "right",
        },
        {
            skills: "Front End Developer",   
        description:
            "The success of every websites depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search...",
        icon: <FaPenNib />,      
        align: "left",
        },
      ];
      
  return (
    <div className='py-[100px] bg-[#f3f4f6]'>
      <div className="container">
      <div className="flex items-center justify-center p-2 sm:p-8">
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 border-l-4 border-[#bd9103]"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-20 w-full flex flex-col sm:flex-row ${exp.align === "right" ? "sm:justify-end" : "sm:justify-start"} relative items-center`}
          >
            <div className={`w-full sm:w-1/2 ${exp.align === "right" ? "sm:pl-1" : "sm:pr-1"}`}>
              <div className={`bg-white rounded-lg p-3 sm:p-6 shadow-md ${exp.align === "right" ? "sm:ml-12" : "sm:mr-12"}`}>
                <h3 className="poppins font-bold text-lg text-[#bd9103]">{exp.skills}</h3>
                <span className="text-sm text-gray-600">{exp.year}</span>
                <p className="text-gray-700 mt-2 text-sm poppins">{exp.description}</p>
              </div>
            </div>
            <div className="absolute hidden left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-[#bd9103] rounded-full md:flex items-center justify-center shadow-md border border-gray-200 z-10">
              {/* <img src={exp.icon} alt={exp.company} className="w-5 h-5" /> */}
              {exp.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}

export default HowItWorks
