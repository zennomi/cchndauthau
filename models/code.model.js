const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeSchema = new Schema({
	code: String,
	count: String
});

const Code = mongoose.model('code', codeSchema);
module.exports = Code;