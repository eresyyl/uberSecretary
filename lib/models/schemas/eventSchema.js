const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
	response_path: {
		type: String,
		required: true,
		unique: true
	},
    event_type: {
		type: String,
		required: true
	},
	date: {
		type: Number,
		required: true
	},
	GMT: {
		type: Number
	},
	location: {
		type: String
	}
});
module.exports = eventSchema;