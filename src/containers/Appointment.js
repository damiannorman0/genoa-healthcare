import React, { Component } from 'react';

import AppHeader from '../components/AppHeader';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {appointmentsAction} from '../actions/appointmentsAction';
import {appointmentAction} from '../actions/appointmentAction';
import {getDate, getTime} from "../Utils";
import AppFooter from "../components/AppFooter";


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
			<div>
				<AppHeader
					title={"Your appointment."}
					selected={''}
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
					<bu className="row">
						<div>notes: </div>
						<div>{`${appointment.notes}`}</div>
					</bu>
					<div className="actions">
						<button className="reschedule">reschedule</button>
						<button className="cancel">cancel</button>
					</div>
				</section>
				<AppFooter />
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
