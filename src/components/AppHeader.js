import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import people from '../../src/people.png';



class AppHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {title = ''} = this.props;
		return (
			<div>
				<header className="App-header">
					<img src={people} alt="Logo" />
					<h1 className="App-title">{title}</h1>
				</header>
				<nav>
					<Link to="/">Appointments</Link>
					<Link to='/physician'>Profile</Link>
				</nav>
			</div>
		);
	}
}


AppHeader.propTypes = {
	title: PropTypes.string,
	selected: PropTypes.string
};

AppHeader.defaultProps = {
	title: '',
	selected: ''
};

export default (AppHeader);
