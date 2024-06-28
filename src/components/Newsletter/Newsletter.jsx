import React from 'react'
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div className='news-letter'>
        <h2>Get Exclusive Offers On Your Email</h2>
        <p> Subscribe to Our newsletter and stay updated</p>
        <div  className='sub-div'>
        <input type='email' placeholder='Your email id'/><button>Subscibe</button>
      </div>
    </div>
  )
}

export default Newsletter
