const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cRTTestSchema = new Schema({
	name: String,
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'CRT'
	}]
})

const cRTTest = mongoose.model('CRTTest', cRTTestSchema);

module.exports = cRTTest;