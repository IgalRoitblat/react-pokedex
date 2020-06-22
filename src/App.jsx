import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import PokemonPage from './components/PokemonPage/PokemonPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemonKeys: [],
			searchResults: [],
			isLoading: true,
		};
	}

	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					pokemonKeys: data.results,
					searchResults: data.results,
					isLoading: false,
				});
			});
	}

	searchPokemon = (searchValue) => {
		this.setState({
			searchResults: this.state.pokemonKeys.filter((pokemon) => pokemon.name.includes(searchValue.toLowerCase())),
		});
	};

	render() {
		return (
			<div className="App">
				<Router>
					<Header searchPokemon={this.searchPokemon} />
					<Switch>
						<Route exact path="/pokemon/:id" render={(props) => <PokemonPage {...props} />} />
						<Route exact path="">
							<SearchResults pokemonKeys={this.state.searchResults} />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
