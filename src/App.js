import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

