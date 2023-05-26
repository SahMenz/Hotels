import React from 'react'
import styles from './footer.module.css'
import bigcircle from '../../../images/bigcircle.svg'
import { hotellers } from '../../data.js'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.upperleft}>
          <div className={styles.have}>
             Have the <span className={styles.spanner}> Best New </span> Locations sent to you 
          </div>
          <form className={styles.subscribe}>
            <input type="email" placeholder='Your Email Address' className={styles.emaill}/>
            <input type="submit" value={"SUBSCRIBE"} className={styles.buttonofsubscribe} />
          </form>
        </div>
        <img src={bigcircle} alt="" className={styles.upperright}/>
      </div>
      <div className={styles.lower}>
        <div className={styles.lowerupper}>HILLSTOURHOMES</div>
        <div className={styles.lowerlowest}>
          {hotellers.map((differenthotels) => (
            <ul className={styles.hottelss} key={differenthotels.id}>
              <li className={styles.listerrss}>{differenthotels.hoteloga}</li>
              <li className={styles.listerr}>{differenthotels.hotelone}</li>
              <li className={styles.listerr}>{differenthotels.hoteltwo}</li>
              <li className={styles.listerr}>{differenthotels.hotelthree}</li>
              <li className={styles.listerr}>{differenthotels.hotelfour}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.remember}>
        <small className={styles.smallerone}>&copy; 2023 Hillstourhomes . All rights reserved</small>
        <small className={styles.smallertwo}>Some hotels require you to cancel more than 24 hours before check-in.<a href='#' className={styles.love}> Details on site. </a></small>
        <small className={styles.smallerthree}>Site Designed by Inclusive <sup>+</sup> </small>
      </div>
    </div>
  )
}

export default Footer