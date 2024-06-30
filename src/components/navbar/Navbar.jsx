import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../content/Shopcontext";

const Navbar = () => {
    const { getTotalCartItems}=useContext(ShopContext);
    let [menu, setMenu] = useState("shop");
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>TOP SHOP</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }} >
                    <Link to='/' style={{textDecoration: 'none'}}>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Men") }} >
                    <Link to='/mens' style={{textDecoration: 'none'}}>Men</Link>
                    {menu === "Men" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Women") }}>
                    <Link to='/womens' style={{textDecoration: 'none'}}>Women</Link>
                    {menu === "Women" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Kids") }}>
                    <Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button className="nav-btn">Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className="nav-cart-cnt">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
