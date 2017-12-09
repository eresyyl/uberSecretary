const
	mongoose = require('mongoose'),
	agenda = require('../agenda.js'),
//	Users = require('../models/Users.js'),
	agendaJob = 'Send Event Notification';

const eventsController = {};
eventsController.list = async (ctx, next) => {
	const response = {};
	/*try{
		let subscribers = await Users.find({}, 'response_path first_name last_name');
		
		response.message = subscribers;
		response.code = 201;
	}
	catch(err){
		response.error = err.errmsg;
		response.code = 400;	
	}*/
	
	response.message = 'Events list';
	response.code = 201;
	
	console.log(response);
	
    ctx.body = response;
	ctx.code = response.code;
	
    await next();
}

eventsController.create = async (ctx, next) => {
	const response = {};
	try{
		const {body} = ctx.request;
		
		//Fix next string
		const triggerTime = new Date(body.date).getTime() - body.offset*60*1000 + body.timezone*60*60*1000;		
		let job = agenda.create(agendaJob, body);
		
		job.schedule(new Date(triggerTime)).save();
		console.log(`next message in ${new Date(triggerTime)}, response_path = ${body.response_path}`);
		console.log(new Date());		
			
		response.message = 'OK';
		response.code = 201;	
	}
	catch(err){
		response.error = err.errmsg;
		response.code = 400;	
	}
	
	console.log('Event create', response);
	
	ctx.body = response;
	ctx.status = response.code;
	
    await next();
}

module.exports = eventsController;