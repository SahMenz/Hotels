import React from 'react'
import styles from './article.module.css'

function Article({differentarticle , hillstour}) {
  return (
    <div className={styles.general}>
      <div className={styles.helpertitle}>
        <p className={styles.see}>SEE ARTICLES THAT MIGHT HELP</p>
        <div className={styles.bottomline}></div>
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
      <div className={styles.helper}>
        {differentarticle.map(art => (
          <div className={styles[`${art.styless}`]} key={art.random}>
            <p className={styles.hower}> {art.question} </p>
            <div className={styles.learnhow}> {art.review} </div>
          </div>
        ))}
      </div>
      {/* <div className={styles.frequently}></div> */}
    </div>
  )
}

export default Article