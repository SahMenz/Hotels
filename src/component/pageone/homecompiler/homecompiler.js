import React from "react";
import Nav from '../nav/nav';
import Hero from "../hero/hero";
import Trend from "../trend/trend";
import Footer from "../footer/footer";
import styles from './homecompiler.module.css'

function Apptrying() {
  return (
      <div className={styles.Apptrying}>
        <Nav />
        <Hero />
        <Trend />
        <Footer />
      </div>
  );
}

export default Apptrying;
