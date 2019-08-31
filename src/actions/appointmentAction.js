export const appointmentAction = (id) => {
	return dispatch => {
		dispatch({
			type: 'GET_APPOINTMENT_ACTION',
			payload: {
				id
			}
		});
	};
};
