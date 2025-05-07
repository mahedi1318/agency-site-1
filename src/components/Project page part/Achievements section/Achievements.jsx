import React from 'react'

const Achievements = () => {
  return (
    <div className='py-[100px] mb-[100px] bg-[#f1f1f1]'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            <div className="py-[30px] bg-[#fff] rounded-md text-center shadow-md">
                <h5 className='poppins text-[48px] font-semibold leading-[48px]'>10+</h5>
                <p className='poppins text-[16px] font-normal leading-24px] mt-2'>Projects Completed</p>
            </div>
            <div className="py-[30px] bg-[#fff] rounded-md text-center shadow-md">
                <h5 className='poppins text-[48px] font-semibold leading-[48px]'>6+</h5>
                <p className='poppins text-[16px] font-normal leading-24px] mt-2'>Happy Clients</p>
            </div>
            <div className="py-[30px] bg-[#fff] rounded-md text-center shadow-md">
                <h5 className='poppins text-[48px] font-semibold leading-[48px]'>4+</h5>
                <p className='poppins text-[16px] font-normal leading-24px] mt-2'>Team Members</p>
            </div>
            <div className="py-[30px] bg-[#fff] rounded-md text-center shadow-md">
                <h5 className='poppins text-[48px] font-semibold leading-[48px]'>4+</h5>
                <p className='poppins text-[16px] font-normal leading-24px] mt-2'>Years Experience</p>
            </div>          
        </div>
      </div>
    </div>
  )
}

export default Achievements
