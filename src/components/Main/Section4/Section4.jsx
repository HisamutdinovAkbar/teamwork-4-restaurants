import React from 'react'
import "./Section4.css"
 import logo from "/public/images/logo.png";
  import logo_1 from "/public/images/logo_1.png";
   import logo_2 from "/public/images/logo_2.png";
    import logo_3 from "/public/images/logo_3.png";
     import insta from "/public/images/insta.png";
function Section4() {
  return (
    <section>
        <div className='section1'>
<img src={insta} alt="" />
        </div>
<div className='section2'>
  <img src={logo} alt="" />
    <img src={logo_1} alt="" />
      <img src={logo_2} alt="" />
        <img src={logo_3} alt="" />
</div>
    </section>
  )
}

export default Section4