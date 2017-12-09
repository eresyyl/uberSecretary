const mongoose = require('mongoose');
const userSchema = require('./schemas/userSchema.js');

const Users = mongoose.model('Users', userSchema);

module.exports = Users;