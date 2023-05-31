import React from "react";
import Nav from '../../pageone/nav/nav';
import Footer from "../../pageone/footer/footer";
import styles from './learncompiler.module.css'
import Yourcomfort from "../yourcomfort/yourcomfort";
import Numbersofar from "../numbersofar/numbersofar";
import { numberofpeople } from '../../data'

function Learncompiler() {
  return (
      <div className={styles.pagetwo}>
        <Nav />
        <Yourcomfort />
        <Numbersofar numbers={numberofpeople}/>
        <Footer />
      </div>
  );
}
export default Learncompiler;