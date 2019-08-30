import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './logo.svg';
import Appointments from './components/Appointments';
import './App.css';
import { appointmentsAction } from './actions/appointmentsAction';


class App extends Component {
  render() {
  	debugger
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Patient Portal</h1>
          </header>
            <div>
                <Appointments />
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	debugger
	return {
		appointments: state.appointments
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
