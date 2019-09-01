export const appointmentAction = (id) => {
	return dispatch => {
		let t = setTimeout(e => {
			clearTimeout(t);
			dispatch({
				type: 'GET_APPOINTMENT_ACTION',
				payload: {
					id
				}
			});
		}, 1000);
	};
};
