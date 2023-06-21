import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import routes from './routes';

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            {routes.map((routes, index) =>(
              <Route key={index} {...routes} />
            ))}
          </Routes>
        </Router>
      </div>
  );
}

export default App;

// 78805369d9msh55cbfdada2e8a3cp1f669fjsn1153c62eaafa