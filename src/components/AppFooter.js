import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



class AppFooter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {title = ''} = this.props;
		return (
			<footer>
				<div>privacy</div>
				<div>contact us</div>
			</footer>
		);
	}
}

export default (AppFooter);
