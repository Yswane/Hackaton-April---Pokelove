import React, { Component } from 'react';
import ImageCentral from './ImageCentral';
import Card from './Card';
import anim from './images/image-anim.png'
import pokes from './all.json'

class Home extends Component {
    state = {
        pokemon1: pokes,
        pokemon2: pokes,
        randomPoke1: 1,
        randomPoke2: 2,
        randomPokelove: false,
        firstTimer: 0,
        showFusion: false,
        removePokeFusion: false,
        showModal: false
    }
    
    resetState = () => {
        setTimeout(() => this.setState({ randomPokelove: !this.state.randomPokelove }), 2500)

    }

    getRandomInt = () => {
        let poke1 = Math.floor(Math.random() * Math.floor(151));
        let poke2 = Math.floor(Math.random() * Math.floor(151));
        if (poke1 === poke2) {
            poke2 += 1
        }
        this.setState({
            randomPoke1: poke1,
            randomPoke2: poke2,
            randomPokelove: !this.state.randomPokelove,
            firstTimer: this.state.firstTimer + 1,
            showFusion: !this.state.showFusion
        })
        this.resetState()
        setTimeout(() => this.setState({ removePokeFusion: !this.state.removePokeFusion }), 3500)
    }

    handleAnimation = () => {
        if (this.state.randomPokelove) {
            return <img className='poulet onClickAnim' src={anim} alt=""></img>
        } else {
            return <img className='poulet' src={anim} alt=""></img>
        }
    }

    handlePokeFusion = () => {
        if (this.state.removePokeFusion)
            return (
                <img className="fusionVisible animated flipOutX" src={`https://images.alexonsager.net/pokemon/fused/${this.state.randomPoke2 +1}/${this.state.randomPoke2 +1}.${this.state.randomPoke1 +1}.png`} alt="" onClick={this.getRandomInt}></img>
            )
        if (this.state.firstTimer === 0) {
            return null
        } else if (this.state.firstTimer === 0 && this.state.showFusion === false) {
            return null
        } else {
            return (
                <img className="fusionVisible animated flipInX" src={`https://images.alexonsager.net/pokemon/fused/${this.state.randomPoke2 +1}/${this.state.randomPoke2 +1}.${this.state.randomPoke1 +1}.png`} alt="" onClick={this.getRandomInt}></img>
                
            )
        }
    }


    render() {
        console.log(pokes)
        return (
            <>
                <ImageCentral handleChangePokemon={this.getRandomInt} />

                <Card poke1={this.state.pokemon1[this.state.randomPoke1]} poke2={this.state.pokemon2[this.state.randomPoke2]} />
                {this.handleAnimation()}

                {this.handlePokeFusion()}
            </>
        )
    }
}

export default Home;


