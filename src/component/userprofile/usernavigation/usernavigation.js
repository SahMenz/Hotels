import React, { useState } from 'react'
import '../usernavigation/usernavigation.css'
import LogoBlock from '../../../images/LogoBlock.svg'
import { Outlet, NavLink } from "react-router-dom";

function Usernavigation() {

    const [toggler, setToggler] = useState("navside");
    const [togglerbars, setTogglerbars] = useState("barss");

    const navToggler = () => {
        toggler === "navside" 
        ? setToggler("navside navside__togger")
        : setToggler("navside");

        togglerbars === "barss"
        ? setTogglerbars("barss work")
        : setTogglerbars("barss")
    }

  return (
    <>
    <div className="usergeneral">
        <div className="hmm"><NavLink to="/" className="navlist"><img src={LogoBlock} alt=""  className='navigationlogo'/></NavLink> </div>
        
        <ul className={toggler}>
            <li className="navlist"><NavLink to="/account" className="navlist">Account</NavLink></li>
            <li className="navlist">Reservation</li>
            <li className="navlist"><NavLink to="/settings" className="navlist">Settings</NavLink></li>
            <li className="navlist">Help & support</li>
        </ul>
        <div onClick={navToggler} className={togglerbars}>
            <div className="barer1"></div>
            <div className="barer2"></div>
            <div className="barer3"></div>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Usernavigation