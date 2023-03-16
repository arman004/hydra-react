import React, { useState } from 'react'
import nav from './Nav.json';
import menu from './images/Hamburger-Button.png';

export default function NavBar() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <nav>
      <ul className='nav-bar'>
        {nav.map(item => (
          <li>
            <a href='#'>{item}</a>
          </li>
        ))}
      </ul>
      <div className='burger-menu'onClick={()=> setIsOpen(!isOpen) && <NavBar/>}>
        <img src={menu} alt='' />
      </div>
    </nav>

  )
}
