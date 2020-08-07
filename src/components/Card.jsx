import React from "react";

function Card(props){
    return  (
        <div className="term">
          <dt>
            <span className="imgspan" role="img" aria-label={props.name}>
              <img src={props.imgSrc} alt={props.name}></img>
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>{props.desc}</dd>
        </div>
      );
}

export default Card;