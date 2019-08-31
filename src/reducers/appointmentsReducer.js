export default (state = {}, action) => {
	switch (action.type) {
		case 'GET_APPOINTMENTS_ACTION':
			return {
				...state,
				result: action.payload
			};
		default:
			return state
	}
}
