import React from 'react'
import "./Header.css"
import logo from "/public/logo.png";
import logo1 from "/public/logo1.png";
import logo2 from "/public/logo2.png";
import logo3 from "/public/logo3.png";
function Header() {
  return (
  <header>
<nav>
    <div className='container'>
<div className="parent">
    <div className="left-nav">
<img src={logo} alt="" />
  </div>
  <div className="right-nav">
<div className="fr-div">
  <img  src={logo1} alt="" /> 
<p>Log in</p>
</div>
<div className="sc-div">
<img src={logo2} alt="" />
<p>0</p>
<img className='img1' src={logo3} alt="" /> 
</div>


  </div>
</div>
    </div>
</nav>
  </header>
  )
}

export default Header