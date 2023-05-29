import React from 'react'
import styles from './yourcomfort.module.css'
import hotelsLearn from '../../../images/hotelsLearn.svg'
import { dynamically } from '../../data'

function Yourcomfort() {
  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <img src={hotelsLearn} className={styles.pice} alt="" />
        <div className={styles.satisfaction}>
          <div className={styles.satisfactionone}>
            <div className={styles.hiarone}>Your Comfort</div>
            <div className={styles.hiartwo}>Our <span className={styles.henmo}> Satisfaction </span></div>
          </div>
          <div className={styles.satisfactiontwo}>
            Lorem ipsum dolor sit amet consectetur. Id et ipsum quam pulvinar quis ut nunc orci eros. Orci purus gravid.
          </div>
        </div>
      </div>
      <div className={styles.generaltwo}>
        <div className={styles.pathners}>OUR PARTNERS</div>
        <div className={styles.shock}></div>
        <div className={styles.about}>
          <div className={styles.aboutone}>
            <div className={styles.toppery}>
              {dynamically.map((dyn) => (
                <div className={styles[`${dyn.stylesknown}`]} key={dyn.id}>
                  <div className={styles.over}>
                  <p className={styles.collect}>About us</p>
                    {dyn.writeup}
                    <div className={styles.evenner}></div>
                  </div>
                  <img src={dyn.img} alt="" className={styles[`${dyn.styling}`]}/>
                </div>
              ))}
            </div>
            <div className={styles.loppery}></div>
          </div>
          {/* <div className={styles.abouttwo}></div> */}
        </div>
      </div>
    </div>
  )
}

export default Yourcomfort