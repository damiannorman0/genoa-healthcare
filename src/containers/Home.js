import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Appointments from 'components/Appointments';
import 'App.css';
import {appointmentsAction} from 'actions/appointmentsAction';
import {physiciansAction} from 'actions/physiciansAction';
import {userAction} from 'actions/userAction';

import {getDate, getTime} from 'Utils';

import AppHeader from 'components/AppHeader';
import AppFooter from "components/AppFooter";


class Home extends Component {
	constructor(props){
		super(props);

		let {appointmentsAction, physiciansAction, userAction} = this.props;
		if (appointmentsAction) {
			appointmentsAction();
		}

		if(physiciansAction) {
			physiciansAction();
		}

		//would use token from sign in
		if(userAction) {
			userAction();
		}
	}

	navigate(path) {
		let {history} = this.props;
		history.push(path);
	}

	render() {
		const {appointments, physicians, user} = this.props;
		return (
			<div className="App">
				<AppHeader title={"Welcome to the Patient Portal."}
						   selected={'appointments'}
						   user={user}
				/>
				<section>
					<Appointments
						dateFormat={getDate}
						timeFormat={getTime}
						navigate={this.navigate.bind(this)}
						appointments={appointments}
						physicians={physicians}
					/>
				</section>
				<AppFooter />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		appointments: state.appointments.appointments,
		physicians: state.physicians.physicians,
		user: state.user.user
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			appointmentsAction,
			physiciansAction,
			userAction
		},
		dispatch
	);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
