import React from "react";
import Nav from './nav/nav';
import Hero from "./hero/hero";
import Trend from "./trend/trend";
import Footer from "./footer/footer";

function App() {
  return (
      <div className="App">
        <Nav />
        <Hero />
        <Trend />
        <Footer />
      </div>
  );
}

export default App;
