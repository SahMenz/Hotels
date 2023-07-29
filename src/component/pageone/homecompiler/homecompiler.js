import React from "react";
import Nav from '../nav/nav';
import Hero from "../hero/hero";
import Trend from "../trend/trend";
import Footer from "../footer/footer";
import styles from './homecompiler.module.css'
import { Fade } from "react-awesome-reveal";

function Apptrying() {
  return (
    <Fade delay={500}>
      <div className={styles.Apptrying}>
        <Nav />
        <Hero />
        <Trend />
        <Footer />
      </div>
      </Fade>
  );
}

export default Apptrying;
