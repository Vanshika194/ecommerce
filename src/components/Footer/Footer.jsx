import React from 'react'
import './Footer.css';
import logo from '../Assets/logo.png';
import insta_logo from '../Assets/instagram_icon.png';
import pin_logo from '../Assets/pintester_icon.png';
import wat_logo from '../Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt=""></img>
            <p>TOP SHOP</p>
        </div>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='icons'>
            <img src={insta_logo} alt="insta"/>
            <img src={pin_logo} alt='pintrist'/>
            <img src={wat_logo} alt='watsapp'/>
        </div>
        <div className="footer-copy">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved .</p>
        </div>
      
    </div>
  )
}

export default Footer
