import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import Appointments from '../components/Appointments';
import '../App.css';
import {appointmentsAction} from '../actions/appointmentsAction';
import {getDate, getTime} from '../Utils';

import AppHeader from '../components/AppHeader';


class Home extends Component {
	constructor(props){
		super(props);

		let {appointmentsAction} = this.props;
		if (appointmentsAction) {
			appointmentsAction();
		}
	}

	navigate(path) {
		let {history} = this.props;
		history.push(path);
	}

	render() {
		return (
			<div className="App">
				<AppHeader title={"Welcome to the Patient Portal"}
							selected={''} />
				<section>
					<Appointments
						dateFormat={getDate}
						timeFormat={getTime}
						navigate={this.navigate.bind(this)}
						appointments={this.props.appointments}
					/>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		appointments: state.appointments.appointments
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			appointmentsAction
		},
		dispatch
	);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
