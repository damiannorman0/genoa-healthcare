import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import logo from './logo.svg';
import Appointments from './components/Appointments';
import './App.css';
import {appointmentsAction} from './actions/appointmentsAction';
import {getDate, getTime} from './Utils';


class App extends Component {
	constructor(props){
		super(props);

		let {appointmentsAction} = this.props;
		if (appointmentsAction) {
			appointmentsAction();
		}
	}

	navigate(path) {
		debugger
		let {history} = this.props;
		history.push(path);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Patient Portal</h1>
				</header>
				<div>
					<Appointments
						dateFormat={getDate}
						timeFormat={getTime}
						navigate={this.navigate.bind(this)}
						appointments={this.props.appointments}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		appointments: state.appointments.result
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			appointmentsAction
		},
		dispatch
	);


export default connect(mapStateToProps, mapDispatchToProps)(App);
