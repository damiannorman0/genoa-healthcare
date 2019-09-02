import React, { Component } from 'react';

import AppHeader from '../components/AppHeader';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {appointmentsAction} from '../actions/appointmentsAction';
import {appointmentAction} from '../actions/appointmentAction';
import {getDate, getTime} from "../Utils";
import AppFooter from "../components/AppFooter";
import PropTypes from "prop-types";
import {userAction} from "../actions/userAction";
import '../App.css';

class Appointment extends Component {
	constructor(props) {
		super(props);

		const {id} = this.props.match.params;
		const {appointments, appointmentsAction, appointmentAction, userAction, user} = this.props;

		if(!appointments.length) {
			if (appointmentsAction) {
				appointmentsAction();
			}
		} else {
			if (appointmentAction) {
				appointmentAction(id);
			}
		}

		if (userAction && !user.id) {
			userAction();
		}
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		const {id} = nextProps.match.params;
		const {appointments, appointmentAction, appointment} = nextProps;

		if(appointments.length && !appointment.id) {
			if (appointmentAction) {
				appointmentAction(id);
			}
		}

		return true;
	}

	render() {
		const {appointment, user} = this.props;
		return (
			<div>
				<AppHeader
					title={"Your appointment."}
					selected={''}
					user={user}
				/>
				<section>
					<div className="row">
						<div>time: </div>
						<div>{`${getDate(appointment.created_at)}, ${getTime(appointment.created_at)}`}</div>
					</div>
					<div className="row">
						<div>patient: </div>
						<div>{`${appointment.patient_name}`}</div>
					</div>
					<div className="row">
						<div>phyiscian: </div>
						<div>{`${appointment.physician_name}`}</div>
					</div>
					<div className="row">
						<div>notes: </div>
						<div>{`${appointment.notes}`}</div>
					</div>
					<div className="actions">
						<button className="amber">reschedule</button>
						<button className="red">cancel appointment</button>
					</div>
				</section>
				<AppFooter />
			</div>
		);
	}
}

Appointment.propTypes = {
	appointment:PropTypes.object,
};

Appointment.defaultProps = {
	appointment: {
		created_at: "",
		patient_name:"",
		physician_name:"",
		notes:""
	}, user: {

	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		appointments: state.appointments.appointments,
		appointment: state.appointments.appointment,
		user: state.user.user
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			appointmentsAction,
			appointmentAction,
			userAction
		},
		dispatch
	);


export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
