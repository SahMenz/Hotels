import React from "react";
import Nav from '../../pageone/nav/nav';
import Footer from "../../pageone/footer/footer";
import styles from './learncompiler.module.css'
import Yourcomfort from "../yourcomfort/yourcomfort";
import Numbersofar from "../numbersofar/numbersofar";
import { numberofpeople } from '../../data'
import { Fade } from "react-awesome-reveal";

function Learncompiler() {
  return (
    <Fade delay={500}>
      <div className={styles.pagetwo}>
        <Nav />
        <Yourcomfort />
        <Numbersofar numbers={numberofpeople}/>
        <Footer />
      </div>
    </Fade>
  );
}
export default Learncompiler;