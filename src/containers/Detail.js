import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {appointmentsAction} from '../actions/appointmentsAction';
import {appointmentAction} from '../actions/appointmentAction';

class Detail extends Component {
	constructor(props) {
		super(props);

		const {id} = this.props.match.params;
		const {appointments, appointmentsAction, appointmentAction} = this.props;

		if(!appointments) {
			if (appointmentsAction) {
				appointmentsAction();
			}
		} else {
			if (appointmentAction) {
				appointmentAction(id);
			}
		}
	}

	render() {
		const {appointments = [], appointment = {}} = this.props;
		return (
			<div className="container">
				{`${appointments.length},`}
				{`${appointment.id}`}
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


export default connect(mapStateToProps, mapDispatchToProps)(Detail);
