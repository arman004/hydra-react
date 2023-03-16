import React from 'react'
import logo from './images/Frame.png';
import hydra from './images/Hydra.png';

export default function Logo() {
  return (
    <div className='logo'>
        <img src={logo} alt=''/>
        <img src={hydra} alt=''/>
    </div>
  )
}
