import React from 'react';
import {  Link } from "react-router-dom"
import './ImageCentral.css';


const ImageCentral = (props) =>  {
  
    return (
        <div className="DivImageCentral">
        
          <div className="logo">
            <img src="https://zupimages.net/up/19/15/8rgj.png" alt="logo"></img>
          </div>
          <h4 className="Connexion"> <Link to="/login">CONNEXION</Link></h4>
          <img className="ImageCentral" src="https://image.noelshack.com/fichiers/2019/15/4/1554991425-image-pokelove.png" alt="fond d'ecran de pokelove "></img>
        <img className="contenair-pokeball" onClick={props.handleChangePokemon} src="https://image.noelshack.com/fichiers/2019/15/4/1555012564-pokeball.gif" alt="pokeball selected" ></img>
        <a href="http://images6.fanpop.com/image/photos/35900000/Pinkie-Pie-my-little-pony-friendship-is-magic-35939133-1600-1141.png">
          <img className="contenair-poney"  src="" alt=""></img>>
        </a>
          </div> 

       
    )
  
}


export default ImageCentral;