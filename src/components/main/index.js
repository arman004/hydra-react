import React from 'react'
import AboutHydra from './AboutHydra';
import Background from './Background';
import BuildHydra from './BuildHydra';
import Contact from './Contact'
import Img from './Img'
import InfoVr from './InfoVr';
import IntoVr from './IntoVr'
import Introduction from './Introduction';
import JoinHydra from './JoinHydra';
import './main.scss';
import MainLogo from './MainLogo';
import Numbers from './Numbers';
import ContactSlider from './ContactSlider';
import InfoVrSlider from './InfoVrSlider';
import MainLogoSlider from './MainLogoSlider';
import NumberSlider from './NumberSlider';

export default function index() {

  return (
    <main>
        <section className='vr-into'>
            <IntoVr/>
            <Img/>
        </section>
        <section className='cont'>
            <Contact/>
            <ContactSlider/>
        </section>
        <section>
          <Introduction/>
          <AboutHydra/>
          <BuildHydra/>
        </section>
        <section>
          <InfoVr/>
          <div className='slider-vr'>
            <InfoVrSlider/>
          </div>
        </section>
        <section>
          <Background/>
          <MainLogo/>
          <div className='slider-logos'>
            <MainLogoSlider/>
          </div>
          <BuildHydra/>
          <Numbers/>
          <div className='slide-num-container'>
             <NumberSlider/>
          </div>
        </section>
        <section>
          <JoinHydra/>
        </section>
    </main>
  )
}
