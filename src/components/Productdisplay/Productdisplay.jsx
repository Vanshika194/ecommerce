import React from 'react'
import './Productdisplay.css';
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/star_dull_icon.png';
const Productdisplay = (props) => {
    const {product} =props;

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className='product-img'>
                <img src={product.image} alt=""/>
            </div>

        </div>
        <div className="productdisplay-right">
       <h1>{product.name}</h1>
       <div className="right-star">
        <img src={star_icon} alt=""/>
        <img src={star_icon} alt=""/>
        <img src={star_icon} alt=""/>
        <img src={star_icon} alt=""/>
        <img src={stardull_icon} alt=""/>
        <p>(122)</p>
        </div>
        <div className="product-price">
            <span className='old'>{product.old_price} </span> 
            <span className='new'>{product.new_price}</span>
        </div>
        <div className="product-desp">
            A lightweight,usually knitted,pullover shirt,close-fiiting ,worn as an undershirt or outer garment
        </div>
        <div className="select-size">
            <p>Select Size</p>
            <div className="choose-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        </div>
       </div>
  )
}

export default Productdisplay
