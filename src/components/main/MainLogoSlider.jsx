import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './main.scss'
import one from './images/unrealEngine.png';
import two from './images/unity.png';
import three from './images/oculus.png';
import four from './images/vive.png';



export default function MainLogoSlider() {
    return (
        <div className='logos-slider'>
            <Carousel>
                <div>
                    <img src={one} alt='' />
                </div>
                <div>
                    <img src={two} alt='' />
                </div>
                <div>
                    <img src={three} alt='' />
                </div>
                <div>
                    <img src={four} alt='' />
                </div>
            </Carousel>
        </div>
    )
}
