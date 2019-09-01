import { combineReducers } from 'redux';
import userReducer from './userReducer';
import appointmentsReducer from './appointmentsReducer';
import physiciansReducer from './physiciansReducer';



export default combineReducers({
	user: userReducer,
	appointments: appointmentsReducer,
	physicians: physiciansReducer
});
