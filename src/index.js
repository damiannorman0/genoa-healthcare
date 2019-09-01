import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import Home from './containers/Home';
import Appointment from './containers/Appointment';
import Profile from './containers/Profile';
import { createBrowserHistory } from "history";
import {register} from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const history = createBrowserHistory();



ReactDOM.render(
	<Provider store={configureStore()}>
		<Router history={history}>
			<Route exact path="/" component={Home} />
			<Route path="/appointment/:id" component={Appointment} />
			<Route path="/profile" component={Profile} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
register();
