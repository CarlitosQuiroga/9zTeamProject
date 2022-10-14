import React from 'react'
import Navs from '../TopNav/linksNav';
import './Footer.css'
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-black'>
                <div className='container'> 
                <img className='logo' src="/logos/img1.png" width={60}></img>
                <div  className='navs'>
                <Navbar variant='dark'>
                     <Navs/>
                </Navbar>
                </div>
                    <div className='socialIcons'>
                    <i className="bi bi-youtube" href='https://www.youtube.com/c/9zTeam'></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-tiktok"></i>
                    </div>
                </div> 
                <div className='container2'>
                        <p className='text-center mb-0 mt-2'>
                        © 2022 Copyright: 9Z TEAM
                        </p>
                    </div>
            </footer>
        </div>
    )
}

export default Footer