import React, { Component } from 'react';
import ImageCentral from './ImageCentral';
import Card from './Card';

import pokes from './all.json'

class Home extends Component {
    state = {
        pokemon1: pokes,
        pokemon2: pokes
    }


    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }



    render() {
        console.log(pokes)
        return (
            <>
                <title>Pokelove</title>
                <ImageCentral />
                <body>
                    <Card poke1={this.state.pokemon1[this.getRandomInt(151)]} poke2={this.state.pokemon2[this.getRandomInt(151)]} />
                </body>
            </>
        )
    }
}

export default Home;


