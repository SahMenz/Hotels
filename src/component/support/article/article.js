import React from 'react'
import styles from './article.module.css'
import rightarrow from '../../../images/rightarrow.svg'
import guest from '../../../images/guest.svg'
import home from '../../../images/home.svg'

function Article({differentarticle , hillstour , hotelquestions}) {
  return (
    <div className={styles.general}>
      <div className={styles.helpertitle}>
        <p className={styles.see}>SEE ARTICLES THAT MIGHT HELP</p>
        <div className={styles.bottomline}></div>
      </div>
      <div className={styles.twoo}>
        <div className={styles.sideline}>
          <div className={styles.whatisyour}>What is your position of Inquiry ?</div>
          <div className={styles.perru}>
            <div className={styles.host}>
              <div className={styles.homeandguest}>
                <img src={home} alt="" className={styles.homespicture} />
                <div className={styles.hoster}>Host</div>
              </div>
              <div className={styles.linebeneath}></div>
            </div>
            <div className={styles.host}>
              <div className={styles.homeandguest}>
                <img src={guest} alt="" className={styles.homespicture} />
                <div className={styles.hoster}>Guest</div>
              </div>
              <div className={styles.linebeneathtwo}></div>
            </div>
          </div>
        </div>
        <div className={styles.generalone}>
          {hillstour.map(hillstours => (
            <div className={styles.generalonefirst} key={hillstours.keypad}>
              <div className={styles.ame}>
                <p className={styles.genpara}>{hillstours.learn}</p>
                <p className={styles.genpatwo}>{hillstours.how}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.helper}>
        {differentarticle.map(art => (
          <div className={styles[`${art.styless}`]} key={art.random}>
            <p className={styles.hower}> {art.question} </p>
            <div className={styles.learnhow}> {art.review} </div>
          </div>
        ))}
      </div>
      <div className={styles.frequently}>
        <div className={styles.free}>FREQUENTLY ASKED QUESTION</div>
        <div className={styles.frequa}>
          {hotelquestions.map(hotelquestions => (
            <div className={styles.errs}>
              <div className={styles.soonest} key={hotelquestions.id}>
                {hotelquestions.thequestions}
              </div>
              <img src={rightarrow} alt="" className={styles.sounds}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Article