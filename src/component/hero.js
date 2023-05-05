import React from 'react'
import styles from './hero.module.css'
import mosque from '../images/mosque.svg'

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
            </div>
        </div>
    </div>
  )
}

export default Hero