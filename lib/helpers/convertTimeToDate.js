module.exports = function(time, timezone){
	const inHour = 60*60*1000;
	
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
		timezone: 'UTC',
		hour: 'numeric',
		minute: 'numeric'
	};
	
	return new Date(
		new Date(time).getTime() + timezone*inHour
	).toLocaleString("en-US", options);
}