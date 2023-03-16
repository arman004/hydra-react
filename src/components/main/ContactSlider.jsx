import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import location from './images/location.png'
import phone from './images/phone-call.png';
import shape from './images/shape.png';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.scss';
import './main.scss'

export default function ContactSlider() {
  return (
    <div className='slider-div'>
         <Carousel>
                <div className='content-carousel'>
                    <img src={location} style={{width:"40px"}} alt=''/>
                    <h4>Pay Us a Visit Union St, Seattle, WA 98101, United States</h4>
                </div>
                <div className='content-carousel'>
                    <img src={phone}  style={{width:"40px"}} alt=''/>
                    <h4>Give Us a Call(110) 1111-1010</h4>
                </div>
                <div className='content-carousel'>
                    <img src={shape} style={{width:"40px"}} alt=''/>
                    <h4>Send Us a Message Contact@HydraVTech.com</h4>
                </div>
            </Carousel>
    </div>
  )
}
