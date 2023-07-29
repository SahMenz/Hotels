import React from 'react'
import { Fade } from 'react-awesome-reveal';
import Styles from '../login/SubmitForm.module.css'
import Apptrying from '../../pageone/homecompiler/homecompiler';
import { Outlet, NavLink } from "react-router-dom";

const SubmitForm = () => {
  return (
    <Fade delay ={500}>
        <div className={Styles.general}>
          <h1>Login successful</h1>
          <p>click the link below to go back to the home screen</p>
          <NavLink to="/explore" className={Styles.navlist}>Here</NavLink>
        </div>
    </Fade>
  )
}

export default SubmitForm