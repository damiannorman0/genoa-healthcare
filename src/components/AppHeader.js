import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import people from '../../src/people.png';



class AppHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {title = '', selected} = this.props;
		const links = [{
			text: 'Appointments',
			link: '/'
		}, {
			text: 'Profile',
			link: '/profile'
		}].map((item, index) => {
			let style;
			if(item.text.toLowerCase() === selected.toLowerCase()) {
				style = {
					opacity: 0.5
				};
			}

			return <Link key={`link_${index}`} to={item.link} style={style}>{item.text}</Link>;
		});

		return (
			<div>
				<header className="App-header">
					<h1 className="App-title">{title}</h1>
				</header>
				<nav>
					{links}
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
