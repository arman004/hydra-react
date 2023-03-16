import React from 'react'
import FooterNav from './FooterNav'
import './footer.scss';
import CopyRight from './CopyRight';

export default function index() {
  return (
    <footer>
        <FooterNav/>
        <CopyRight/>
    </footer>
  )
}
