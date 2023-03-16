import React from 'react';
import data from './ContactData.json';
import './main.scss'

export default function Contact() {


  return (
    <div className='contact-divs'>
      {data.map(item => (
        <div className='cont-div-child'>
          <div>
            <img src={require(`${item.img}`)} alt='' />
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}

    </div>  
  )
}
