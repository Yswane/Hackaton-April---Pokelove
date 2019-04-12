import React from 'react';
import './ImageCentral.css';

const ImageCentral = (props) =>  {
  
    return (
        <div className="DivImageCentral">
        
          <div className="logo">
            <img src="https://zupimages.net/up/19/15/8rgj.png" alt="logo"></img>
          </div>
          <h4 className="Connexion"> <a href="#">CONNEXION</a></h4>
          <img className="ImageCentral" src="https://image.noelshack.com/fichiers/2019/15/4/1554991425-image-pokelove.png" alt="fond d'ecran de pokelove "></img>
        <img className="contenair-pokeball" onClick={props.handleChangePokemon} src="https://image.noelshack.com/fichiers/2019/15/4/1555012564-pokeball.gif" alt="pokeball selected" ></img>
        <img className="contenair-poney" src="https://derpicdn.net/img/view/2016/12/15/1317802.gif" alt="poney"></img>
        </div>
    )
  
}


export default ImageCentral;