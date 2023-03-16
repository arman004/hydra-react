import React from 'react'
import infoData from './InfoVrData.json';
import './main.scss';

export default function InfoVr() {
  return (
    <div className='info-divs'>
        {infoData.map(item=>(
            <div key={item.id}>
                <img src={require(`${item.img}`)} alt=''/>
                <h3>{item.title}</h3>
                <hr/>
                <p>{item.text}</p>
                <button>{item.btn}</button>
            </div>
        ))}
    </div>
  )
}
