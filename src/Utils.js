export const getDate = (date) => {
	date = date.split('T')[0];
	return date;
};

export const getTime = (date) => {
	let time = date.split('T')[1];
	time = time.split('-')[0]
	return time;
};
