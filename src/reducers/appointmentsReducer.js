const initialState = {
	appointments: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_APPOINTMENTS_ACTION':
			return {
				...state,
				appointments: action.payload
			};
		case 'GET_APPOINTMENT_ACTION':
			let appointment;
			for(var  i = 0; i <  state.appointments.length; i++) {
				if (state.appointments[i].id === +action.payload.id) {
					appointment = state.appointments[i];
					break;
				}
			}

			return {
				...state,
				appointment
			};
		default:
			return state
	}
}
