const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mCQSchema = new Schema({
	question: String,
	options: [
		{
			content: String,
			isTrue: Boolean
		}
	],
	note: String
})

const mCQ = mongoose.model('MCQ', mCQSchema);

module.exports = mCQ;