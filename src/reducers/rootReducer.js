import { combineReducers } from 'redux';
import userReducer from './userReducer';
import appointmentsReducer from './appointmentsReducer';


export default combineReducers({
	userReducer,
	appointmentsReducer
});
