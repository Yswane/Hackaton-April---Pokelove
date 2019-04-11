import React, { Component } from 'react';
import './Card.css';

class Card extends Component  {

  getData(){
    
    return fetch('https://equantin.github.io/poke-api/api/all.json')
    .then((response) => response.json())
    .then((responseJson) => {
    alert(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount(){
    this.getData();
  }
  render() {

    return (
    <>
      <div className="container_card">
        <div className="pokemon">
          <div className="card">
            <img src="https://image.noelshack.com/fichiers/2019/15/4/1554991201-carapuce.png" alt="Avatar"/>
            <div className="name">
            <h4><b>Carapuce</b></h4>
          </div>
        </div> 
        <div className="card1">
          <p>Description...</p>
        </div>
        </div>
        <div className="pokemon1">
        <div className="card2">
          <p>Description...</p>
        </div>
        <div className="card">
            <img src="https://image.noelshack.com/fichiers/2019/15/4/1554991201-carapuce.png" alt="Avatar"/>
            <div className="name">
            <h4><b>Carapuce</b></h4>
          </div>
        </div> 
        </div>
        
      </div>
      
    </>
    );
  }
}

export default Card;