import React from 'react'
import numData from './NumbersData.json';

export default function Numbers() {
  return (
    <div className='numbers-divs'>
        {numData.map(item=>(
            <div key={item.id}>
                <div className='num-fon'>
                    <h2>{item.num}</h2>
                </div>
                <div className='num-title'>
                    <img src={require(`${item.img}`)} alt=''/>
                    <h2>{item.text}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}
