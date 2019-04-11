import React from 'react';
import './Card.css';

const Card = (props) => {

  return (
    <>
      <div className="container_card">
        <div className="pokemon">
          <div className="card">
            <img src={props.poke1.img} alt="Avatar" />
            <div className="name">
              <h4><b>{props.poke1.name}</b></h4>
            </div>
          </div>
          <div className="card1">
            <p>{props.poke1.desc}</p>
          </div>
        </div>
        <div className="pokemon1">
          <div className="card2">
            <p>{props.poke2.desc}</p>
          </div>
          <div className="card">
            <img src={props.poke2.img} alt="Avatar" />
            <div className="name">
              <h4><b>{props.poke2.name}</b></h4>
            </div>
          </div>
        </div>

      </div>

    </>
  );

}

export default Card;