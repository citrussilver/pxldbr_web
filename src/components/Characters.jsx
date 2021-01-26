import React from 'react';
import charlist from '../charlist';
import Card from './Card';

function Characters() {
    return (
        <div>
          <dl className="dictionary">{charlist.map((entry) => 
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

export default Characters;