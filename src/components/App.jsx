import React from 'react';
import memlist from '../memlist';
import Card from './Card';

function createCard(entry){
    return (<Card 
        key={entry.id}
        imgSrc={entry.imgSrc}
        name={entry.name}
        desc={entry.desc}
    />
    );
}

function App(){
    return (
        <div>
          <h1>
            <span>Kemono Friends</span>
          </h1>
          <dl className="dictionary">{memlist.map(createCard)}</dl>
        </div>
    );
}

export default App;