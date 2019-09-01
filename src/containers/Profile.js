import React, { Component } from 'react';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import {bindActionCreators} from "redux";
import {userAction} from "../actions/userAction";
import '../App.css';
import {connect} from "react-redux";
import {physiciansAction} from "../actions/physiciansAction";
import PropTypes from "prop-types";

class Profile extends Component {
	constructor(props) {
		super(props);

		let {userAction, user} = this.props;
		//would use token from sign in
		if (userAction && !user.id) {
			userAction();
		}
	}

	componentWillReceiveProps(nextProps, nextContext) {
		let {user, physiciansAction, physicians} = nextProps;

		if(typeof(user.id) === "number" && !Object.keys(physicians).length) {
			if (physiciansAction) {
				physiciansAction();
			}
		}
	}

	render() {
		const {user, physicians} = this.props;
		const physician = physicians[user.physician_id] || {};

		return (
			<div>
				<AppHeader title={"Your Profile."}
						   selected={'profile'}
						   user={user}/>
				<section>
					<div className="row">
						<div>Name: </div>
						<div>{user.name}</div>
					</div>
					<div className="row">
						<div>Physician Name: </div>
						<div>{physician.name}</div>
					</div>
				</section>
				<AppFooter />
			</div>
		);
	}
}

Profile.propTypes = {
	appointment:PropTypes.object,
	physicians:PropTypes.object
};

Profile.defaultProps = {
	physicians: {
	}, user: {
		name: ''
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user.user,
		physicians: state.physicians.physicians
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			userAction,
			physiciansAction,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
