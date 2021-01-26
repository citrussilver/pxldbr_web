import React from 'react';
import Card from './Card';
import Home from '../pages/Home';
import Navbar from './Navbar/Navbar';
import Characters from './Characters';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <div>
          <Router>
            <Home />
          </Router>
          <Characters />
        </div>
    );
}

export default App;