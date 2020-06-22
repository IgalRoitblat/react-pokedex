import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './action-button.scss';

class ActionButton extends Component {
	render() {
        const { text, route, colorPalette } = this.props;

		return (
			<div className={`action-button ${colorPalette}`}>
				<Link to={route}>{text}</Link>
			</div>
		);
	}
}
export default ActionButton;
