const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	response_path: {
		type: String,
		required: true,
		unique: true
	},
    first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	}
});

module.exports = userSchema;