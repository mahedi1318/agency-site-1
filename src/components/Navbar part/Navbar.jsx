import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'

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
            <NavLink to="/" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#683301]
                   hover:after:w-full after:transition-all after:duration-300">Home</NavLink>
        </li>     
        <li>
            <NavLink to="/about" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#683301]
                   hover:after:w-full after:transition-all after:duration-300">About</NavLink>
        </li>    
        <li>
            <NavLink to="/project" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#683301]
                   hover:after:w-full after:transition-all after:duration-300">Portfolio</NavLink>
        </li>
        <li className='relative group'>
            <span className="inline-block cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#683301]
                   hover:after:w-full after:transition-all after:duration-300">Service</span>
            <ul className={`poppins text-[14px] font-normal absolute top-[30px] left-0 min-w-[180px] p-4 flex-col gap-2 rounded-md shadow-lg z-50 transform opacity-0 scale-95 
            translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
              ${scrolled ? "text-[#0f1425] bg-[#fff]" : "bg-[#ffd957] border border-[#d6d6d6]"}`}>
                <li>
                    <NavLink to="/customCode" className='hover:bg-[#444] hover:text-white w-full inline-block py-1 pl-2 rounded-md transition-all duration-500'>Custom Code</NavLink>
                </li>
                <li>
                    <NavLink to="/webflow" className='hover:bg-[#444] hover:text-white w-full inline-block py-1 pl-2 rounded-md transition-all duration-500'>Webflow</NavLink>
                </li>
            </ul>
        </li> 
        <li>
            <NavLink to="/blog" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#683301]
                   hover:after:w-full after:transition-all after:duration-300">Blog</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#683301]
                   hover:after:w-full after:transition-all after:duration-300">Contact</NavLink>
        </li>       

        </>
    )

  return (
    <div className={`fixed top-0 left-0 w-full z-20 ${scrolled ? "bg-[#fff] shadow-md text-[#0f1425]" : "bg-transparent text-[#0f1425]"}`} >
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
            <Link to="/contact" className="px-4 md:px-7 py-[9px] md:py-[11px] bg-[#32393e] rounded-md text-white poppins text-[14px] md:text-[16px] font-medium ">Get started</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar
