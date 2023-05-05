import React from 'react'
import styles from './hero.module.css'
import mosque from '../images/mosque.svg'
import { sliding } from './data.js'
import Labelnew from '../images/Labelnew.svg'
import linestroke from '../images/linestroke.svg'

function Hero() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.todaygeneral}>
                <div className={styles.today}>TODAY FEATURED HOTEL</div>
                <div className={styles.shortline}></div>
            </div>
            <img src={mosque} alt="" className={styles.heroimage}/>
            <div className={styles.slider}>
              {sliding.map((slider) => (
                <>
                  <div className={styles.slidercontainer}>
                    <img src={slider.img} alt="" />
                    <img src={linestroke} alt="" />
                    <div className={styles.namesandratings}>
                      <div className={styles.names}>{slider.hotelname}</div>
                      <div className={styles.ratings}>{slider.hotelratings}</div>
                    </div>
                    <img src={Labelnew} alt="newlabel"  className={styles.placement}/>
                  </div>
                </>
              ))}
              
            </div>
        </div>
    </div>
  )
}

export default Hero