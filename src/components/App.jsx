import React from 'react';
import memlist from '../memlist';
import Card from './Card';
import Home from '../pages/Home';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <div>
          <Router>
            <Home />
          </Router>
          
          <h1>
            <span>Pixeled Bros</span>
          </h1>
          <dl className="dictionary">{memlist.map((entry) => 
            (<Card 
                key={entry.id}
                imgSrc={entry.imgSrc}
                name={entry.name}
                desc={entry.desc}
            />
            ))}</dl>
        </div>
    );
}

export default App;