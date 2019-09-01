const initialState = {
	physicians: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PHYSICIANS_ACTION':
			let physicians = action.payload;
			return {
				...state,
				physicians
			};
		default:
			return state
	}
}
