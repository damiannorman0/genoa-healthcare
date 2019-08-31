import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './App';
import Detail from './containers/Detail';
import Physician from './containers/Physician';

import {register} from './serviceWorker';

import { BrowserRouter as Router, Route, BrowserHistory } from 'react-router-dom'



ReactDOM.render(
	<Provider store={configureStore()}>
		<Router>
			<Route exact path="/" component={App} />
			<Route path="/detail/:id" component={Detail} />
			<Route path="/physician" component={Physician} />
		</Router>
	</Provider>,
	document.getElementById('root')
);
register();
