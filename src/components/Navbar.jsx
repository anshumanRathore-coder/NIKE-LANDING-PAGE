import React, { useState } from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'
function Navbar() {
    const [hamburgerState,setHamburgerState]=useState(false);
    const toggleHamburger=()=>{
        setHamburgerState(!hamburgerState)
    }
  return (
    <header className='padding-x py-8 absolute z-10 w-full' >
        <div className={`flex items-center justify-between mt-4 px-4 w-full   `}>
            <a href="hero" className='padding-r '>
                <img height={39} width={140} src={headerLogo} alt="logo" />
            </a>
            <nav className='w-full hidden lg:block '>
            <div className={`flex  w-full  justify-around  items-center `}>
                {navLinks.map((item)=>(
                    <a className='text-2xl md:text-xl font-semibold' key={item.label} href={item.href}>
                        {item.label}
                    </a>
                ))}
            </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
