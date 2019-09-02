export const userAction = (token) => dispatch => {
	let t = setTimeout(e => {
		clearTimeout(t);
		dispatch({
			type: 'GET_USER_ACTION',
			payload: {
				"created_at": "2015-04-21T10:44:51-06:00",
				"end": "2015-04-24T07:30:00-06:00",
				"id": 0,
				"user_id": 16,
				"physician_id" : 14,
				"weight": "150lbs",
				"height": "174cm",
				"start": "2015-04-24T07:00:00-06:00",
				"updated_at": "2015-04-21T10:44:51-06:00",
				"dob": "1975-06-19",
				"name": "Mike Ross",
				"image": "https://media.licdn.com/dms/image/C5603AQHb49adxXrA2A/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=63YBbkU3OO_Ki8aXmY-r0Up8NVW08jNz5_XGIAjXCBs"
			}
		});
	}, 1000);
};
