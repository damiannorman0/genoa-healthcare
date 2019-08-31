export const getDate = (date) => {
	if(!date) {
		return date;
	}

	date = date.split('T')[0];
	return date;
};

export const getTime = (date) => {
	if(!date) {
		return date;
	}

	let time = date.split('T')[1];
	time = time.split('-')[0];
	return time;
};
