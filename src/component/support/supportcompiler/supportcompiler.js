import React from 'react'
import Hellothere from '../hellothere/hellothere'
import Nav from '../../pageone/nav/nav'
import Footer from '../../pageone/footer/footer'
import Article from '../article/article'
import styles from './supportcompiler.module.css'
import { articles } from '../../data'
import { hillstour } from '../../data'
import { hotelquestions } from '../../data'
import { Fade } from 'react-awesome-reveal';

function Supportcompiler() {
  return (
    <Fade delay ={500}>
      <div className={styles.general}>
          <Nav />
          <Hellothere />
          <Article differentarticle={articles} hillstour={hillstour} hotelquestions={hotelquestions} />
          <Footer />
      </div>
    </Fade>
  )
}

export default Supportcompiler