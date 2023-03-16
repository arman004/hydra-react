import React from 'react'
import vr from './images/maskgroup2.png';
import abData from './AboutData.json';
import './main.scss';

export default function AboutHydra() {
  return (
    <div className='about-divs'>
        <div>
            <img src={vr} alt=''/>
        </div>
        <div>
            <h2 className='none'>{abData.title}</h2>
            <p className='title-txt none'>{abData.text1}</p>
            <p className='about-txt'>{abData.text2}</p>
            <button>LET’S GET IN TOUCH</button>
        </div>
    </div>
  )
}
