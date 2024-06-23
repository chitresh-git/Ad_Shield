

import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  </Router>
  );
};

export default App;
