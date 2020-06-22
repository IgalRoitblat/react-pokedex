import React, { Component } from 'react';
import './PokemonStats.scss';

class ProgressBar extends Component {
	state = {
		isLoaded: false,
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoaded: true,
			});
		}, 500);
	}

	render() {
        const { name, value } = this.props;
        
        let background = '';
        
        if (value < 33) {
            background = 'red'
        } else if (value < 66) {
            background = 'yellow'
        } else {
            background = 'green';
        }

		const style = { background, transform: `scaleX(${this.state.isLoaded ? value / 200 : 0})` };

		return (
			<div className="statBar">
				<span>{name}</span>
				<div className={`stat-content ${this.state.isLoaded ? 'animate' : ''}`} style={style}></div>
			</div>
		);
	}
}

class PokemonStats extends Component {
	state = {
		height: '',
		weight: '',
		stats: '',
	};

	render() {
		return (
			<div className="pokemonStats">
				<h3>Pokemon Stats</h3>
				<div className="statsContainer">
					<div>Height: {this.props.stats.height}</div>
					<div>Weight: {this.props.stats.weight}</div>
					{this.props.stats.stats.map((stat, index) => (
						<ProgressBar key={index} name={stat.stat.name} value={stat.base_stat} />
					))}
				</div>
			</div>
		);
	}
}
export default PokemonStats;
