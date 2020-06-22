import React, { Component } from "react";
import PokemonStats from "../PokemonStats/PokemonStats";
import "./PokemonPage.scss";

class PokemonPage extends Component {
    state = {
        name: '',
        images: [],
        stats: [],
        height: 0,
        weight: 0,
        isLoading: true,
    };

    render() {
        return (
            <div className="pokemonPage">
                <div
                    className={`loaderContainer ${
                        this.state.isLoading ? "showingLoader" : "hidingLodaer"
                    }`}
                >
                    <img
                        src={process.env.PUBLIC_URL + "pokemongo.gif"}
                        alt="loader"
                    />
                </div>
                <div className="pokemonDetailedInfo">
                    <h2>{this.state.name}</h2>
                    <img
                        src={this.state.images.front_default}
                        alt={this.state.name}
                    />
                    <PokemonStats
                        stats={{
                            stats: [...this.state.stats],
                            height: this.state.height,
                            weight: this.state.weight,
                        }}
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    name: data.name,
                    images: data.sprites,
                    stats: data.stats,
                    height: data.height,
                    weight: data.weight,
                    isLoading: false,
                });
            });
    }
}
export default PokemonPage;
