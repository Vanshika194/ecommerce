import React from 'react'
import './CSS/LoginSignup.css';
const Loginsignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-form">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type='text' placeholder='Your Name '/>
          <input type='email' placeholder='Email address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'> Already have an account ? <span>Login Here</span></p>
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id='' />
        <p> By continuing , i agree to the terms</p>
      </div>
      </div>
    </div>
  )
}

export default Loginsignup
