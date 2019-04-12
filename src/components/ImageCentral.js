import React from 'react';
import './ImageCentral.css';

const ImageCentral = (props) =>  {
    return (
        <div className="DivImageCentral">
          <div className="logo">
            <img src="https://zupimages.net/up/19/15/8rgj.png" alt="logo"></img>
          </div>
          <img className="ImageCentral" src="https://image.noelshack.com/fichiers/2019/15/4/1554991425-image-pokelove.png" alt="fond d'ecran de pokelove "></img>
        <img className="contenair-pokeball" onClick={props.handleChangePokemon} src="https://image.noelshack.com/fichiers/2019/15/4/1555012564-pokeball.gif" alt="pokeball selected" ></img>
        </div>
    )
  
}


export default ImageCentral;