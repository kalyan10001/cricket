import React from 'react';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
import Game from './Game';
import Home from './Home';

function App() {
  return (
    <Router>
      <nav>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Game</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;

