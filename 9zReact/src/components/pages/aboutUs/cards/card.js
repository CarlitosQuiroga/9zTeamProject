import React from 'react';
import './styles.scss'
import { useState } from "react";
import cn from "classnames";
function CardsInner({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  return (
    <div
      className="flip-card-outer" onClick={handleClick} >
      <div className={cn("flip-card-inner", { showBack, })} >
        <div className="card front">
          <div className="flex-column card-body d-flex justify-content-center align-items-center">
            <img height={'300px'} className="opacity-25" src={card.imageFront}></img>
            <p className="card-text fs-5 fw-bold">{card.name}</p>
            <p className="card-text fs-6 fw-bold">{card.edadLugar.toUpperCase()}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold containerBack">
              <img className='cardBack' src={card.back}></img>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CardsInner;