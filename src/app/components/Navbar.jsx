"use client"
import React from 'react'
import logo from "../assets/logo.jpg"
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image'
import { useState } from 'react';

const Navbar = () => {
    const [navState, setNavState] = useState(false)
    
    const handleNavClick = (sectionId) => {
        setNavState(false); // Close mobile menu on click
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'News & Events', id: 'news&events' },
        { name: 'Complaint', id: 'complaint' },
        { name: 'Services', id: 'services' },
        { name: 'Our Team', id: 'ourteam' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <div className='overflow-hidden '>
            {/* PC nav */}
            <div className='hidden p-5 md:flex justify-between h-[15vh] items-center ml-3 mr-3  mt-5cursor-pointer'>
              <h1 className='text-3xl text-[#0d7d43]'>
UC-3 GULSHAN TOWN
</h1>
                <ul className='  flex  gap-5'>
                    {navItems.map((item) => (
                        <li 
                            key={item.id} 
                            className=' text-black cursor-pointer hover:underline hover:text-[#0d7d43] decoration-[#0d7d43] transition-colors duration-200'
                            onClick={() => handleNavClick(item.id)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Nav */}
            <div className='md:hidden'>
                <section className='flex justify-between  h-[8vh] items-center cursor-pointer mr-2 ml-2 transition-all duration-300 ease-in-out'>
                   
                        <div>
                      <h1 className='uppercase p-3 text-[#0d7d43] font-bold'>uc-3 gulshan town</h1>
                     
                    </div>
                  
                    <div className='border-2 p-1 border-[#0d7d43]'>
                        <RxHamburgerMenu onClick={() => setNavState(!navState)} className='text-black' size={30} />
                    </div>
                </section>
                
                <section>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${navState ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                        <ul className='className flex flex-col gap-2 p-2'>
                            {navItems.map((item) => (
                                <li 
                                    key={item.id}
                                    className='cursor-pointer  text-black active:text-white hover:text-white   hover:bg-[#0d7d43] bg-decoration-[#0d7d43] transition-colors duration-200 px-2 py-1'
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Navbar;