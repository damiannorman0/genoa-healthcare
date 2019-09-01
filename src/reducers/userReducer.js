const initialState = {
	user: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_USER_ACTION':
			return {
				...state,
				user: action.payload
			};
		default:
			return state
	}
}
