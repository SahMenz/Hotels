import React from 'react'
import Hellothere from '../hellothere/hellothere'
import Nav from '../../pageone/nav/nav'
import Footer from '../../pageone/footer/footer'
import Article from '../article/article'
import styles from './supportcompiler.module.css'
import { articles } from '../../data'
import { hillstour } from '../../data'
import { hotelquestions } from '../../data'

function Supportcompiler() {
  return (
    <div className={styles.general}>
        <Nav />
        <Hellothere />
        <Article differentarticle={articles} hillstour={hillstour} hotelquestions={hotelquestions} />
        <Footer />
    </div>
  )
}

export default Supportcompiler