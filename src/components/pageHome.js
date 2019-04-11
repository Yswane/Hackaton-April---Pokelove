import React, { Component } from 'react';
import Header from './header';
import Pokeball from './pokeball';

class Home extends Component{
    render(){
        return(
            <>
            <title>Pokelove</title>
            <Header />
            <body>


            <Pokeball />

                <footer></footer>
            </body>
            
            </>
        )
    }
}

export default Home;