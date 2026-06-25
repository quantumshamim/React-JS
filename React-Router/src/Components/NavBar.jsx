import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <nav className='fixed w-full z-0 top-0 left-0'>
            <ul className='max-w-[90vw] flex flex-wrap justify-between mx-auto'>
                <a href="" className='font-semibold text-2xl'>Hablu Programmer</a>
                
                <div className='flex [&>li]:pl-7'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Signup">SignUP</Link></li>
                </div>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default NavBar
