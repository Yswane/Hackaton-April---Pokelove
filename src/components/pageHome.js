import React, { Component } from 'react';
import Header from './header';
import ImageCentral from './ImageCentral';

class Home extends Component{
    render(){
        return(
            <>
            <title>Pokelove</title>
            <Header />
            <body>
              <ImageCentral />

                <footer></footer>
            </body>
            
            </>
        )
    }
}

export default Home;