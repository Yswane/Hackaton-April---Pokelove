import React, { Component } from 'react';
import Header from './header';
import Card from './Card';

import pokes from './all.json'


class Home extends Component {
    state = {
        pokemon1: pokes,
        pokemon2: pokes
    }

    render() {
        return (
            <>
                <title>Pokelove</title>
                <Header />
                <body>
                    <Card poke1={this.state.pokemon1[2]} poke2={this.state.pokemon2[0]} />
                </body>
            </>
        )
    }
}

export default Home;


