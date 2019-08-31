export default (state = {}, action) => {
	switch (action.type) {
		case 'GET_APPOINTMENTS_ACTION':
			return {
				...state,
				appointments: action.payload
			};
		case 'GET_APPOINTMENT_ACTION':
			debugger
			const appointment = (state.appointments || []).find[app => {
				return app.id === action.payload;
			}];
			return {
				...state,
				appointment
			};
		default:
			return state
	}
}
