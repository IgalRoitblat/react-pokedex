import React, { Component } from 'react';
import './SearchResults.scss';
import PokemonTile from '../PokemonTile/PokemonTile';

class SearchResults extends Component {
	render() {
		const { pokemonKeys } = this.props;
        const isNoResults = pokemonKeys.length === 0;
        
		return (
			<div className="searchResults">
				{isNoResults ? <div>No Results</div> : pokemonKeys.map((pokemon) => <PokemonTile key={pokemon.name} pokemon={pokemon} />)}
			</div>
		);
	}
}
export default SearchResults;
