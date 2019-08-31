import React, { Component } from 'react';
import PropTypes from "prop-types";
import Appointments from "./Appointments";


class AppHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {title = ''} = this.props;
		return (
			<div>
				<header className="App-header">
					<h1 className="App-title">{title}</h1>
				</header>
			</div>
		);
	}
}


AppHeader.propTypes = {
	title: PropTypes.string
};

AppHeader.defaultProps = {
	title: ''
};

export default (AppHeader);
