import React from 'react'
import team1 from "../../../assets/images/my-image.png"
import team2 from "../../../assets/images/team-1.PNG"

const AboutTeam = () => {
  return (
    <div className='py-[100px] bg-[#f3f4f6]'>
      <div className="container">
        <div className="grid grid-cols-4 gap-[20px]">
            <div className="rounded-md overflow-hidden shadow-lg pb-4">
                <div className="w-full h-[250px]">
                    <img className='w-full h-full object-cover' src={team1} alt="" />
                </div>
                <div className="mt-3  px-3 ">
                    <h3 className='poppins text-[18px] font-semibold text-[#181818]'>Mahedi hassan</h3>
                    <span className='poppins text-[15px] font-normal text-[#a37e04] mt-1 inline-block'>Front End Developer</span>
                    <p className='poppins text-[14px] font-sans text-[#555555] leading-[24px] mt-2'>Mahedi leads our creative team with over 10 years of design experience in the digital space.</p>
                </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg pb-4">
                <div className="w-full h-[250px]">
                    <img className='w-full h-full object-cover' src={team2} alt="" />
                </div>
                <div className="mt-3  px-3 ">
                    <h3 className='poppins text-[18px] font-semibold text-[#181818]'>Abdullah Sayed</h3>
                    <span className='poppins text-[15px] font-normal text-[#a37e04] mt-1 inline-block'>Full stack Developer</span>
                    <p className='poppins text-[14px] font-sans text-[#555555] leading-[24px] mt-2'>Mahedi leads our creative team with over 10 years of design experience in the digital space.</p>
                </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg pb-4">
                <div className="w-full h-[250px]">
                    <img className='w-full h-full object-cover' src={team1} alt="" />
                </div>
                <div className="mt-3  px-3 ">
                    <h3 className='poppins text-[18px] font-semibold text-[#181818]'>Mahedi hassan</h3>
                    <span className='poppins text-[15px] font-normal text-[#a37e04] mt-1 inline-block'>Front End Developer</span>
                    <p className='poppins text-[14px] font-sans text-[#555555] leading-[24px] mt-2'>Mahedi leads our creative team with over 10 years of design experience in the digital space.</p>
                </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg pb-4">
                <div className="w-full h-[250px]">
                    <img className='w-full h-full object-cover' src={team2} alt="" />
                </div>
                <div className="mt-3  px-3 ">
                    <h3 className='poppins text-[18px] font-semibold text-[#181818]'>Mahedi hassan</h3>
                    <span className='poppins text-[15px] font-normal text-[#a37e04] mt-1 inline-block'>Front End Developer</span>
                    <p className='poppins text-[14px] font-sans text-[#555555] leading-[24px] mt-2'>Mahedi leads our creative team with over 10 years of design experience in the digital space.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
