import React from 'react'
import './Offers.css';
import exl_img from '../Assets/exclusive_image.png';
const Offers = () => {
  return (
    <div className='offer'>
        <div className='offer-left'>
            <p>Exclusive  </p>
            <p>Offers For You</p>
                <div className='offer-btn '>
                    <p> ONLY ON BEST SELLERS PRODUCTS </p>
                    <button>Check Now</button>
                </div>
        </div>
        <div className='offer-right'>

            <img src={exl_img} alt='' />
        </div>
      
    </div>
  )
}

export default Offers
