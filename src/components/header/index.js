import React from 'react'
import Buttons from './Buttons'
import Logo from './Logo'
import NavBar from './NavBar'
import './header.scss';

export default function index() {
  return (
    <header>
        <Logo/>
        <NavBar/>
        <Buttons/>
    </header>
  )
}
