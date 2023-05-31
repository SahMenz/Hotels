import React from 'react'
import styles from './hellothere.module.css'
import storeybuilding from '../../../images/storeybuilding.svg'
import storeybuildingBackground from '../../../images/storeybuildingBackground.svg'
import searchVector from '../../../images/searchVector.svg'

function Hellothere() {
  return (
    <div className={styles.general}>
        <div className={styles.twopic}>
            <img src={storeybuilding} alt=""  className={styles.storey}/>
            <img src={storeybuildingBackground} alt="" className={styles.storeybackground} />
        </div>
        <div className={styles.hellosearch}>
            <h1 className={styles.head}>Hello There,</h1>
            <p className={styles.parag}>What do you want to inquire about?</p>
            <div className={styles.divcontainer}>
                <input type="text" className={styles.inputter}/>
                <div className={styles.ownbackground}>
                    <img src={searchVector} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hellothere