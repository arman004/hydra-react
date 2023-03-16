import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './main.scss';

export default function Background() {

    const [title,setTitle] = useState([])
    useEffect(()=>{
        axios
            .get("https://retoolapi.dev/n6aqAP/data")
            .then(res=>setTitle(res.data))
    },[])

  return (
    <div className='background-div'>
        {title.map(item=>(
            <div key={item.id} className='fon'>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
            </div>
        ))}
    </div>
  )
}
