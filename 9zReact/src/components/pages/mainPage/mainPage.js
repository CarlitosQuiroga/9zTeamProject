import React, { FC } from 'react';
import './mainPage.module.css';
import TopNav from '../../TopNav/TopNav' 
import Carousel from '../../Carousel/Carousel'
import Footer from '../../Footer/Footer'


const MainPage = () => (
  <div className='Hola'>
    <TopNav/>
    <Carousel />
    <Footer/> 
  </div>

);

export default MainPage;
