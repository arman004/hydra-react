import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import one from './images/elipse1.png';
import two from './images/elipse2.png';
import three from './images/elipse3.png';
import four from './images/elipse4.png';
import './main.scss'

export default function InfoVrSlider() {
    return (
        <div className='vr-slider'>
            <Carousel>
                    <div className='content-carousel'>
                        <img src={one} alt='' />
                        <h3>SIMULATION</h3>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi nunc.Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                    </div>
                    <div className='content-carousel'>
                        <img src={two} alt='' />
                        <h3>EDUCATION</h3>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi nunc.Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                    </div>
                    <div className='content-carousel'>
                        <img src={three} alt='' />
                        <h3>SELF-CARE</h3>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi nunc.Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                    </div>
                    <div className='content-carousel'>
                        <img src={four} alt='' />
                        <h3>OUTDOOR</h3>
                        <hr />
                        <p>Vitae sapien pellentesque habitant morbi nunc.Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button>TRY IT NOW</button>
                    </div>
            </Carousel>
        </div>
    )
}
