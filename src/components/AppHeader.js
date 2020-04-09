import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const AppHeader = (props) => {
	const {title = '', selected, user} = props;
	const links = [{
		text: 'Appointments',
		link: '/'
	}, {
		text: 'Profile',
		link: '/profile'
	}, {
		text: 'Medications',
		link: '/meds'
	}, {
		text: 'Resources',
		link: '/resources'
	}].map((item, index) => {
		let style;
		if (item.text.toLowerCase() === selected.toLowerCase()) {
			style = {
				opacity: 0.5
			};
		}

		return <Link key={`link_${index}`} to={item.link} style={style}>{item.text}</Link>;
	});

	const imgSrc = user.image || "missing-picture-icon.jpg";

	return (
		<div>
			<header className="App-header">
				<Link to={"/profile"}>
					<img src={imgSrc} alt="user" />
				</Link>
				<div className="user-opts">
					<div>.</div>
					<div>.</div>
					<div>.</div>
				</div>
				<h1 className="App-title">{title}</h1>
			</header>
			<nav>
				{links}
			</nav>
		</div>
	);
};

AppHeader.propTypes = {
	title: PropTypes.string,
	selected: PropTypes.string,
	user: PropTypes.object
};

AppHeader.defaultProps = {
	title: '',
	selected: '',
	user: {}
};

export default (AppHeader);
