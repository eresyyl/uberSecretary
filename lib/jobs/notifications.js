const fetch = require('node-fetch'),
	convertTimeToDate = require('../helpers/convertTimeToDate.js');
	botUrl = require('../../config/general.json').send_message_url;
 
module.exports = function(agenda) {
	agenda.define('Send Event Notification', async (job, done) => {
		let {data} = job.attrs;
		
		data = convertTimeToDate(data.date, data.timezone);
		const eventJson = encodeURIComponent(JSON.stringify(data));
		await fetch(`${botUrl}?event=${eventJson}`);
		
		console.log('message sent at:', new Date());
		
		done();
	});
}