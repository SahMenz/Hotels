import React from "react";
import Nav from '../../pageone/nav/nav';
import Footer from "../../pageone/footer/footer";
import styles from './learncompiler.module.css'
import Yourcomfort from "../yourcomfort/yourcomfort";
import Numbersofar from "../numbersofar/numbersofar";

function Learncompiler() {
  return (
      <div className={styles.pagetwo}>
        <Nav />
        <Yourcomfort />
        <Numbersofar />
        <Footer />
      </div>
  );
}

export default Learncompiler;