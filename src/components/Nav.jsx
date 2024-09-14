import React from 'react'
import boltLogo from '../assets/images/bolt.svg';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className = "padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href = "/">
        <img 
        src = {boltLogo}
        alt = "Logo"
        width = {130}
        height = {100}
        />
        </a>
        <ul className = "flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item)=>(
            <li key = {item.label}>
              <a 
              href = {item.href}
              className = "font-monts errat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
