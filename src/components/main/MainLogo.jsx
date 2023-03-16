import React from 'react'
import logoData from './MainLogoData.json';
import './main.scss';

export default function MainLogo() {
  return (
    <div className='main-logo'>
        {logoData.map(item=>(
            <div key={item.id}>
                <img src={require(`${item.img}`)} alt=''/> 
            </div>
        ))}
    </div>
  )
}
