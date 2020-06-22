import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ActionButton from '../ActionButton/ActionButton';
import './header.scss';

class Header extends React.Component {
	render() {
        const { searchPokemon } = this.props;

		return (
			<header className="header">
				<ActionButton text="Home" route="/" colorPalette="dark-blue" />
				<SearchBar onSearch={searchPokemon} placeholder="Pokemon name"/>
			</header>
		);
	}
}

export default Header;
