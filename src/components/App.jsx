import React from 'react';
import memlist from '../memlist';
import Card from './Card';

function App(){
    return (
        <div>
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