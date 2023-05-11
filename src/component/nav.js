import React, { useState } from 'react';
import LogoBlock from '../images/LogoBlock.svg'
import '../component/nav.css'
import tie from '../images/tie.svg'
import plus from '../images/plus.svg'
import city from '../images/city.svg'
import date from '../images/date.svg'
import admit from '../images/admit.svg'
import stroke from '../images/stroke.svg'
import search from '../images/search.svg'

function Nav() {

  const [active, setActive] = useState("side");
  const [toggleIcon, setToggleIcon] = useState("bars");

  const navToggle = () => {
    active === "side"
      ? setActive("side side__active")
      : setActive("side");

    toggleIcon === "bars"
      ? setToggleIcon("bars work")
      : setToggleIcon("bars");
  }
  
  return (
    <div className='general'>
      <img src={LogoBlock} alt="" />
      <div onClick={navToggle} className={toggleIcon}>
        <div className="barer1"></div>
        <div className="barer2"></div>
        <div className="barer3"></div>
      </div>
      <div className={active}>
        <div className="searchcontainer">
          <div className="searchee">
            <img src={search} alt="" />
            <input type="search"  placeholder='Search for hotel, city, categories'  className='large'/>
          </div>
          <div className="suprise">
            <div className="supone"> <img src={city} alt="" /> City</div>
            <img src={stroke} alt="" />
            <div className="supone"> <img src={date} alt="" /> Date</div>
            <img src={stroke} alt="" />
            <div className="supone"> <img src={admit} alt="" /> Admit</div>
          </div>
        </div>
        <ul className='notordered'>
          <li className="lister">Explore</li>
          <li className="lister">Learn</li>
          <li className="lister">Support</li>
          <li className="lister listerone">LIST HOTEL</li>
          <li className="lister"><img src={tie} alt="#" /></li>
          <li className="lister"><img src={plus} alt="#" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav