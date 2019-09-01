export const physiciansAction = (id) => {
	return dispatch => {
		dispatch({
			type: 'GET_PHYSICIANS_ACTION',
			payload: {
				"14": {
					"created_at" : "2015-04-21T10:44:51-06:00",
					"end" : "2015-04-24T07:30:00-06:00",
					"start" : "2015-04-24T07:00:00-06:00",
					"updated_at" : "2015-04-21T10:44:51-06:00",
					"name" : "Gregory House",
					"specialty": "Mental Health",
					"education": "All of it"
				}
			}
		});
	};
};
