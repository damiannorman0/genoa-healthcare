import React, {Component} from 'react';
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

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		const {user, physiciansAction, physicians} = nextProps;

		if (typeof (user.id) === "number" && !Object.keys(physicians).length) {
			if (physiciansAction) {
				physiciansAction();
			}
		}

		return true;
	}

	render() {
		const {user, physicians} = this.props;
		const physician = physicians[user.physician_id] || {};

		return (
			<div>
				<AppHeader title={"Your information.\nYour choice."}
						   selected={'profile'}
						   user={user}/>
				<section>
					<div className="row">
						<div>Name:</div>
						<div>{user.name}</div>
					</div>
					<div className="row">
						<div>Date of birth:</div>
						<div>{user.dob}</div>
					</div>
					<div className="row">
						<div>Height:</div>
						<div>{user.height}</div>
					</div>
					<div className="row">
						<div>Weight:</div>
						<div>{user.weight}</div>
					</div>
					<div className="row">
						<div>Physician Name:</div>
						<div>{physician.name}</div>
					</div>
					<div className="actions">
						<button className="amber">request physician change</button>
						<button className="red">message us</button>
					</div>
				</section>
				<AppFooter/>
			</div>
		);
	}
}

Profile.propTypes = {
	appointment: PropTypes.object,
	physicians: PropTypes.object
};

Profile.defaultProps = {
	physicians: {}, user: {
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
