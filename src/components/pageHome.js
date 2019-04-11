import React, { Component } from 'react';
import Header from './header';
import Card from './Card';

class Home extends Component{
    render(){
        return(
            <>
            <title>Pokelove</title>
            <Header />
            <body>
            <Card />
                <p>test</p>



                <footer></footer>
            </body>
            
            </>
        )
    }
}

export default Home;