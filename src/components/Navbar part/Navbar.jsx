import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {

    
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 80);
        }
        
        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
        
    }, [])
    
    const navlinks = (
        <>
        <li>
            <Link to="/">Home</Link>
        </li>     
        <li>
            <Link to="/project">Portfolio</Link>
        </li>
        <li className='relative group'>
            <span className='inline-block cursor-pointer'>Service</span>
            <ul className={`poppins text-[14px] font-normal absolute top-full left-0  min-w-[180px] p-4 hidden group-hover:flex flex-col gap-2 rounded-md shadow-lg
                 z-50 ${scrolled ? "text-white bg-[#0f1425]" : "bg-[#ffd957]"}`}>
                <li>
                    <Link to="/project">Custom Code</Link>
                </li>
                <li>
                    <Link to="/project">Webflow</Link>
                </li>
            </ul>
        </li> 
        <li>
            <Link to="/contact">Contact</Link>
        </li>       

        </>
    )

  return (
    <div className={`fixed top-0 left-0 w-full z-20 ${scrolled ? "bg-[#fff] shadow-md text-[#0f1425]" : "bg-transparent"}`} >
      <div className="navbar container">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-[20px] poppins text-[16px] font-normal">
               {navlinks}
            </ul>
            </div>
            <Link to="/" className=" text-xl">Techxious</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1 gap-[40px] poppins text-[15px] font-normal">
                {navlinks}
            </ul>
        </div>
        <div className="navbar-end">
            <Link to="/" className="px-7 py-[11px] bg-[#32393e] rounded-md text-white">Get started</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar
