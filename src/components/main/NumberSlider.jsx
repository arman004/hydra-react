import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import numData from './NumbersData.json';
import './main.scss'


export default function NumberSlider() {
    return (
        <div className='number-container'>
            <Carousel className='numbers-divs'>
                {numData.map(item => (
                    <div key={item.id} className='num-hero'>
                        <div className='num-fon'>
                            <h2>{item.num}</h2>
                        </div>
                        <div className='num-title'>
                            <img src={require(`${item.img}`)} alt='' />
                            <h2>{item.text}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
