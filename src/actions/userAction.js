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
				"image": "https://media-exp1.licdn.com/dms/image/C4E03AQHYnKnUzK5zGg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=pYLjxoI3-kDx6VXqVG-vDUPUHJDxG1Z8QaXnAB-ybV8"
			}
		});
	}, 1000);
};
