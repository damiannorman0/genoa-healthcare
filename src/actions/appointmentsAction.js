export const appointmentsAction = () => {
	return dispatch => {
		dispatch({
			type: 'GET_APPOINTMENTS_ACTION',
			payload: [
				{
					"created_at" : "2015-04-21T10:44:51-06:00",
					"end" : "2015-04-24T07:30:00-06:00",
					"id" : 695,
					"patient_id" : 16,
					"physician_id" : 14,
					"start" : "2015-04-24T07:00:00-06:00",
					"updated_at" : "2015-04-21T10:44:51-06:00",
					"patient_name" :"Mike Ross",
					"physician_name" : "Gregory House",
					"notes": "patient is stressed, lacking confidence"
				},
				{
					"created_at" : "2015-04-22T10:44:51-06:00",
					"end" : "2015-04-25T07:30:00-06:00",
					"id" : 696,
					"patient_id" : 17,
					"physician_id" : 14,
					"start" : "2015-04-25T07:00:00-06:00",
					"updated_at" : "2015-04-22T10:44:51-06:00",
					"patient_name" :"John Doe",
					"physician_name" : "Gregory House",
					"notes": "patient is showing signs of depression"
				}
			]
		})
	};
};
