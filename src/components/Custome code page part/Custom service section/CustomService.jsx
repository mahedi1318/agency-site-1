import React from 'react'
import { IoCubeOutline } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import { MdOutlineNetworkPing } from "react-icons/md";
import { FiServer } from "react-icons/fi";
import { IoServerOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";

const CustomService = () => {

    const customeServiceData = [
        {
            icons: <IoCubeOutline />,
            names: "Full Customization",
            description: "Every aspect of your project is built specifically for your unique requirements with no limitations."
        },
        {
            icons: <FiZap />,
            names: "Full Customization",
            description: "Every aspect of your project is built specifically for your unique requirements with no limitations."
        },
        {
            icons: <MdOutlineNetworkPing />,
            names: "Full Customization",
            description: "Every aspect of your project is built specifically for your unique requirements with no limitations."
        },
        {
            icons: <FiServer />,
            names: "Full Customization",
            description: "Every aspect of your project is built specifically for your unique requirements with no limitations."
        },
        {
            icons: <IoServerOutline />,
            names: "Full Customization",
            description: "Every aspect of your project is built specifically for your unique requirements with no limitations."
        },
        {
            icons: <CiBadgeDollar />,
            names: "Full Customization",
            description: "Every aspect of your project is built specifically for your unique requirements with no limitations."
        },        
    ]

  return (
    <div className='py-[100px]'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
            {customeServiceData.map((item, index)=>(
                <div key={index} className="p-[25px] shadow-md rounded-lg">
                    <div className="w-[50px] h-[50px] bg-[#ffd957] flex justify-center items-center mb-5 rounded-lg text-[30px] text-[#6b6b6b]">
                        {item.icons}
                    </div>
                    <h3 className='poppins text-[20px] font-bold'>{item.names}</h3>
                    <p className='poppins text-[16px] font-normal mt-4'>{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CustomService
