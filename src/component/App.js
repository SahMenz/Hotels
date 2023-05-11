import React from "react";
import Nav from './nav';
import Hero from "./hero";
import Trend from "./trending/trend";

function App() {
  return (
      <div className="App">
        <Nav />
        <Hero />
        <Trend />
      </div>
  );
}

export default App;
