import React from "react";
import Apptrying from "./pageone/homecompiler/homecompiler";
import Learncompiler from "./learn/learncompiler/learncompiler";
import Supportcompiler from "./support/supportcompiler/supportcompiler";
import Desktopone from "./desktopone/desktoponecompiler/desktoponecompiler";


function App() {
  return (
      <div className="App">
        <Apptrying />
        <Learncompiler />
        <Supportcompiler />
        <Desktopone />
      </div>
  );
}

export default App;

