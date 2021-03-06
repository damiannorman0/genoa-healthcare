export const getDate = (date) => {
	if(!date) {
		return date;
	}

	date = date.split('T')[0];
	date = date.replace(/[0-9]{4}-/gi, '');
	return date;
};

export const getTime = (date) => {
	if(!date) {
		return date;
	}

	let time = date.split('T')[1];
	time = time.split('-')[0];
	time = time.split(":");
	time.pop();
	time = time.join(':');

	return time;
};
