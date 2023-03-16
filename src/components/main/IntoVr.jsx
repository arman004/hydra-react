import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function IntoVr() {

    const [text,setText] = useState([]);

    useEffect(()=>{
        axios
            .get("https://retoolapi.dev/povZxK/data")
            .then(res=>setText(res.data))
    },[])

  return (
    <div>
        {text.map(item=>(
            <div key={item.id} className='txt-into'>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <button>BUILD YOUR WORLD</button>
            </div>
        ))}
    </div>
  )
}
