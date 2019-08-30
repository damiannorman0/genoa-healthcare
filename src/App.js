import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import Appointments from './components/Appointments';
import './App.css';

class App extends Component {
  render() {
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
export default connect()(App);
