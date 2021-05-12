const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mCQTestSchema = new Schema({
	name: String,
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'MCQ'
	}]
})

const mCQTest = mongoose.model('MCQTest', mCQTestSchema);

module.exports = mCQTest;