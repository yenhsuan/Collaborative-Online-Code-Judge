let mongoose = require('mongoose');
mongoose.connect('mongodb://user1:1029@ds139801.mlab.com:39801/terry-database');

let problemSchema = mongoose.Schema({

	id:Number,
	name:String,
	desc:String,
	difficulty:String
});

let ProblemModel = mongoose.model('ProblemModel',problemSchema);

module.exports = ProblemModel;
