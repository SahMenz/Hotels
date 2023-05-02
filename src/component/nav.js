import React from 'react';
import LogoBlock from '../images/LogoBlock.svg'
import city from '../images/city.svg'
import '../component/nav.css'

function Nav() {
  return (
    <div className='general'>
        <img src={LogoBlock} alt="" />
        <div className="side">
            <div className="searchcontainer">
                <input type="search"  placeholder='Search for hotel, city, categories  <img src={city} alt="" />'/>
            </div>
            <div className="navigateto"></div>
        </div>
    </div>
  )
}

export default Nav