import React from 'react';
import LogoBlock from '../images/LogoBlock.svg'
import '../component/nav.css'

function Nav() {
  return (
    <div className='general'>
        <img src={LogoBlock} alt="" />
        <div className="side">
            <div className="searchcontainer">
                <input type="search"  placeholder='Search for hotel, city, categories       &#xf64f; city     &#xf133; Date        &#xf13e; Admit'  className='large'/>
            </div>
            <div className="navigateto"></div>
        </div>
    </div>
  )
}

export default Nav