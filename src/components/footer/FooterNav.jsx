import React from 'react'
import footerData from './FooterNavData.json';
import './footer.scss';

export default function FooterNav() {
    return (
        <div className='footer-div'>
            {footerData[0].logo.map(item => (
                <div className='footer-logo' key={item.id}>
                    <img src={require(`${item.img}`)} alt="" />
                </div>
            ))}
            <ul className='list-ul'>
                {footerData[1].one.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <ul className='list-ul'>
                {footerData[2].two.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <div className='social-div'>  
                <h3>SOCIALIZE WITH HYDRA</h3>
                <ul className='social-ul'>
                    {footerData[3].social.map(item => (
                        <li key={item.id}>
                            <a href={item.href} target="_blank"><img src={require(`${item.img}`)}  alt=''/></a>
                        </li>
                ))}
                </ul>
                <button>BUILD YOUR WORLD</button>
            </div>
        </div>
    )
}
