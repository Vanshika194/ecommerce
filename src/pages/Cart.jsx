import React, { useContext } from 'react'
import './CSS/Cart.css';
import  remove_icon from '../components/Assets/cart_cross_icon.png';
import { ShopContext } from '../content/Shopcontext';
const Cart = () => {
  const { getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="cartItems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
          {
            return <div >
            <div className="cartitems-format cartItems-main">
              <img src={e.image} alt="" className='carticon'/>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className="remove-cart" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
              </div>
              <hr/>
            </div>
          }
      })}
      <div className="cart-down">
        <div className="cart-Totals">
          <h1>Cart Totals</h1>
          <div>
            <div className="total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-items Total">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
          <button>PROCEED TO BUY</button>
          </div>
          </div>
          <div className="promocode">
            <p>If you have a promo code,Enter it here</p>
            <input type="text" placeholder='promo code'/><button>Submit</button>
          </div>
      </div>
      
    </div>
  )
}

export default Cart
