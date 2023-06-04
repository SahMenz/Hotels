import React from 'react'
import styles from './article.module.css'

function Article({differentarticle}) {
  return (
    <div className={styles.container}>
      <div className={styles.generalone}>
        {hillstour.map(hillstours => (
          <div className={styles.generalonefirst}>
            
          </div>
        ))}
      </div>
      <div className={styles.general}>
        <div className={styles.helpertitle}>
          <p className={styles.see}>SEE ARTICLES THAT MIGHT HELP</p>
          <div className={styles.bottomline}></div>
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
    </div>
  )
}

export default Article