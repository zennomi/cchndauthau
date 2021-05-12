require('dotenv').config();

const express = require('express')
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to MongoDB Atlas.');
}).catch((err) => {
	console.log('Error occurred connecting to MongoDB Atlas');
});

const Code = require('./models/code.model');
const mCQ = require('./models/mcq.model');
const cRT = require('./models/crt.model');
const mCQTest = require('./models/mcqtest.model');
const cRTTest = require('./models/crttest.model');
const testData = require('./mcq.test.js');



app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', async (req, res) => {
	let mCQTests = await mCQTest.find({});
	let cRTTests = await cRTTest.find({});
	res.render('index', {mCQTests, cRTTests});
})

app.get('/trac-nghiem/:id', async (req, res) => {
	let test;
	try {
		test = await mCQTest.findById(req.params.id);
		if (!test) throw new Error('Not Found Test');
	} catch (err) {
		return redirect('/');
	}
	res.render('mcq', {test});
})

app.get('/tu-luan/:id', async (req, res) => {
	let test;
	try {
		test = await cRTTest.findById(req.params.id);
		if (!test) throw new Error('Not Found Test');
	} catch (err) {
		return redirect('/');
	}
	res.render('crt', {test});
})

app.get('/admin', (req, res) => {
	if (req.cookies.admin) {
		Code.find({}, function (err, codes) {
			res.render('admin', { codes });
		})
	}
	else {
		res.render('auth', { login: true });
	}
})

app.post('/auth', (req, res) => {
	if (req.body.password == process.env.ADMIN_SECRET) {
		res.cookie('admin', true);
		res.redirect('/admin');
	} else {
		res.render('auth', { login: false });
	}
})

app.post('/api/get-mcq/:id', async (req, res) => {
	let userCode = await Code.findOne({code: req.body.code});
	if (userCode) {
		userCode.count--;
		await userCode.save();
	}
	let test;
	test = await mCQTest.findById(req.params.id).populate('questions');
	res.json(test.questions);
})

app.post('/api/get-crt/:id', async (req, res) => {
	let userCode = await Code.findOne({code: req.body.code});
	if (userCode) {
		userCode.count--;
		await userCode.save();
	}
	let test;
	test = await cRTTest.findById(req.params.id).populate('questions');
	res.json(test.questions);
})

app.post('/api/get-code', async (req, res) => {
	let userCode = await Code.findOne({code: req.body.code});
	res.json(userCode);
})

app.post('/api/new-code', (req, res) => {
	Code.create({code: req.body.code, count: req.body.count}, (err, code) => {
		if (err) return res.redirect('/');
		res.redirect('/admin');
	})
})

app.post('/api/delete-code', (req, res) => {
	console.log(req.body.id);
	Code.findByIdAndDelete(req.body.id, (err) => {
		res.json('deleted');
	})
})

app.listen(port, () => {
	console.log(`Port: http://localhost:${port}`)
})


