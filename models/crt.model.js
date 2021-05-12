const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cRTSchema = new Schema({
	question: String,
	answer: String
});

const cRT = mongoose.model('CRT', cRTSchema);

module.exports = cRT;