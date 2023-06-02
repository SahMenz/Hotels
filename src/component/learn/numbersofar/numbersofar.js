import React from 'react'
import styles from './numbersofar.module.css'
import mark from '../../../images/mark.svg'

function Numbersofar({numbers}) {
  return (
    <div className={styles.general}>
      <div className={styles.ournumbers}>
        <div className={styles.titless}>OUR NUMBERS SO FAR</div>
        <div className={styles.dollarsign}>
          {numbers.map(item => (
            <div className={styles.combination}>
              <div className={styles.dollars}>{item.dollars}</div>
              <div className={styles.content}>{item.texts}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.founder}>
        <div className={styles.foundedby}>
          <div className={styles.foundedbyone}>Founder’s Message</div>
          <div className={styles.foundedbytwo}>Lorem ipsum dolor sit amet consectetur. Id iaculis mauris cursus sit venenatis hendrerit. Mattis pulvinar aliquam dapibus convallis volutpat morbi turpis. Elemen lvinar aliquam </div>
          <div className={styles.foundedbythree}>Jon Henry Doe</div>
        </div>
        <img src={mark} alt="" className={styles.bigimage}/>
      </div>
    </div>
  )
}

export default Numbersofar