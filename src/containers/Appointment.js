import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {appointmentsAction} from '../actions/appointmentsAction';
import {appointmentAction} from '../actions/appointmentAction';
import {getDate, getTime} from "../Utils";


class Appointment extends Component {
	constructor(props) {
		super(props);

		const {id} = this.props.match.params;
		const {appointments, appointmentsAction, appointmentAction} = this.props;

		if(!appointments.length) {
			if (appointmentsAction) {
				appointmentsAction();
			}
		} else {
			if (appointmentAction) {
				appointmentAction(id);
			}
		}
	}

	componentWillReceiveProps(nextProps, nextContext) {
		const {id} = nextProps.match.params;
		const {appointments, appointmentsAction, appointmentAction, appointment} = nextProps;

		if(appointments.length && !appointment) {
			if (appointmentAction) {
				appointmentAction(id);
			}
		}
	}

	render() {
		const {appointments = [], appointment = {}} = this.props;
		return (
			<div className="Detail">
				<header className="App-header">
					<h1 className="App-title">Appointment Detail</h1>
				</header>
				<section>
					<div>{`time: ${getDate(appointment.created_at)}, ${getTime(appointment.created_at)}`}</div>
					<div>{`patient: ${appointment.patient_name}`}</div>
					<div>{`phyiscian: ${appointment.physician_name}`}</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		appointments: state.appointments.appointments,
		appointment: state.appointments.appointment
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			appointmentsAction,
			appointmentAction
		},
		dispatch
	);


export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
