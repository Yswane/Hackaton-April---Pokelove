import React, { Component } from 'react';
import ImageCentral from './ImageCentral';
import Card from './Card';

import pokes from './all.json'

class Home extends Component {
    state = {
        pokemon1: pokes,
        pokemon2: pokes,
        randomPoke1: 1,
        randomPoke2: 2,
    }


    getRandomInt = () => {
        const poke1 = Math.floor(Math.random() * Math.floor(151));
        const poke2 = Math.floor(Math.random() * Math.floor(151));
        if (poke1 === poke2) {
            poke2 += 1
        }
        this.setState({
            randomPoke1: poke1,
            randomPoke2: poke2
        })
    }



    render() {
        console.log(pokes)
        return (
            <>
                <ImageCentral handleChangePokemon={this.getRandomInt} />
                
                <body>
                    <Card poke1={this.state.pokemon1[this.state.randomPoke1]} poke2={this.state.pokemon2[this.state.randomPoke2]}/>
                </body>
            </>
        )
    }
}

export default Home;


