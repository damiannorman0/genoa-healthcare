import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Appointments from '../components/Appointments';
import '../App.css';
import {appointmentsAction} from '../actions/appointmentsAction';
import {physiciansAction} from '../actions/physiciansAction';
import {getDate, getTime} from '../Utils';

import AppHeader from '../components/AppHeader';
import AppFooter from "../components/AppFooter";


class Home extends Component {
	constructor(props){
		super(props);

		let {appointmentsAction, physiciansAction} = this.props;
		if (appointmentsAction) {
			appointmentsAction();
		}

		if(physiciansAction) {
			physiciansAction();
		}
	}

	navigate(path) {
		let {history} = this.props;
		history.push(path);
	}

	render() {
		return (
			<div className="App">
				<AppHeader title={"Welcome to the Patient Portal."}
							selected={'appointments'} />
				<section>
					<Appointments
						dateFormat={getDate}
						timeFormat={getTime}
						navigate={this.navigate.bind(this)}
						appointments={this.props.appointments}
						physicians={this.props.physicians}
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
		physicians: state.physicians.physicians
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			appointmentsAction,
			physiciansAction
		},
		dispatch
	);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
