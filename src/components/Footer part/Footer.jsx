import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='bg-[#0f1425] py-14'>
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-[30px]">
          <div className="w-[100%] md:w-[45%]">
            <Link to="/"  className='poppins text-[25px] font-bold italic text-white'>Techxious</Link>
            <span className='poppins text-[14px] font-sans text-[#ccc] block mt-5'>Creativic creative agency</span>
          </div>
          <div className="w-[50%] md:w-[15%]">
            <h6 className='poppins text-[20px] font-medium text-white'>Discover</h6>
            <ul className='mt-6 text-white'>
              <li>
                <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >About us</Link>
              </li>
              <li>
                <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Pricing</Link>
              </li>
              <li>
                <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Contact</Link>
              </li>
              <li>
                <Link className='poppins text-[16px] font-medium text-[#c7c7c7] block' to="/" >FAQs</Link>
              </li>              
            </ul>
          </div>
          <div className="w-[50%] md:w-[15%]">
          <h6 className='poppins text-[20px] font-medium text-white'>Resources</h6>
            <ul className='mt-6 text-white'>
              <li>
                <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Security</Link>
              </li>
              <li>
                <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Global</Link>
              </li>
              <li>
                <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Request</Link>
              </li>                          
            </ul>
          </div>
          <div className="w-[50%] md:w-[15%]">
              <h6 className='poppins text-[20px] font-medium text-white'>Social</h6>
              <ul className='mt-6 text-white'>
                <li>
                  <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Facebook</Link>
                </li>
                <li>
                  <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Twitter</Link>
                </li>
                <li>
                  <Link className='poppins text-[16px] font-medium mb-4 text-[#c7c7c7] block' to="/" >Dribble</Link>
                </li>
                <li>
                  <Link className='poppins text-[16px] font-medium text-[#c7c7c7] block' to="/" >Behance</Link>
                </li>              
              </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
