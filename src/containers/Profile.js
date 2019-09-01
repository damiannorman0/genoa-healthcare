import React, { Component } from 'react';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import {bindActionCreators} from "redux";
import {userAction} from "../actions/userAction";
import '../App.css';
import {connect} from "react-redux";

class Profile extends Component {
	constructor(props) {
		super(props);

		let {userAction, user} = this.props;
		//would use token from sign in
		if (userAction && !user.id) {
			userAction();
		}
	}
	render() {
		let {user} = this.props;

		return (
			<div>
				<AppHeader title={"Profile."}
						   selected={'profile'}
						   user={user}/>
				<AppFooter />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user.user
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			userAction
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
