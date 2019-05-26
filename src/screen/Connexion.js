import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Connexion.css';


class Connexion extends Component {
	render() {
		return (
			<>
				<h4 className="ConnexionHome"> <Link to="/">ACCUEIL</Link></h4>
				<div className="login-page">
					<div className="login">
						<div className="form-container">
							<div className="form-wrapper">
								<form onsubmit="event.preventDefault();">
									<div>Login To Your Account</div>
									<input required type="email" id="email" name="email" />
									<label htlmfor="email">email</label>
									<input required id="password" name="password" type="password" />
									<label htlmfor="password">password</label>
									<button className="button">login</button>
								</form>
							</div>
						</div>
					</div>
					<div class="photo">
						<img src="https://image.noelshack.com/fichiers/2019/15/4/1554991425-image-pokelove.png" alt="connexion client" />
					</div>
				</div>
				<img className="pikapika" src="https://thumbs.gfycat.com/IdealPeacefulAmericanbittern-max-1mb.gif" alt="pikapika" />
				<button className="buttonNewPika"><Link to="/login">Inscription pika pika</Link></button>
			</>
		);
	}
}

export default Connexion;