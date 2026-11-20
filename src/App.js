import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import RecipeDetail from './RecipeDetail';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <footer className="footer">
        CPIT-405 | React Examples
      </footer>
    </Router>
  );
}

export default App;