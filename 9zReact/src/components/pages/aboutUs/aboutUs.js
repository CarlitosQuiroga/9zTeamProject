import React from 'react';
import TopNav from './../../TopNav/TopNav' 
import Footer from './../../Footer/Footer'
import './about.css'
import BodyCard from './cards/cardBody';

const aboutUs = () => (
  <div className='Hola'>
    <TopNav/>
    <div>
      <BodyCard />
    </div>
    <Footer/> 
  </div>

);

export default aboutUs;