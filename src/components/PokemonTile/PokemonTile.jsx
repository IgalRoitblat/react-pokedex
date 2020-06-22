import React, { Component } from 'react';
import ActionButton from '../ActionButton/ActionButton.jsx';
import './pokemon-tile.scss';

class PokemonTile extends Component {
	state = {
		pokemonImage: '',
    };

    componentDidMount() {
        fetch(this.props.pokemon.url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ pokemonImage: data.sprites.front_default });
        });
    }
    
	render() {
		const { pokemon } = this.props;

		return (
			<div className="pokemon-tile">
				<h2>{pokemon.name}</h2>
				<img src={this.state.pokemonImage} alt={pokemon.name} />
				<div className="overlay">
					<ActionButton text="Learn More" route={`/pokemon/${pokemon.name}`} colorPalette="red"/>
				</div>
			</div>
		);
	}
}
export default PokemonTile;
