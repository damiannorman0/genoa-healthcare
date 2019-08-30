export const appointmentsAction = () => dispatch => {
	dispatch({
		type: 'GET_USER_ACTION',
		payload: [
			{
				"created_at" : "2015-04-21T10:44:51-06:00",
				"end" : "2015-04-24T07:30:00-06:00",
				"id" : 695,
				"user_id" : 16,
				"start" : "2015-04-24T07:00:00-06:00",
				"updated_at" : "2015-04-21T10:44:51-06:00",
				"name" :"Mike Ross"
			}
		]
	})
}
