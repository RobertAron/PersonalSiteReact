// server/app.js
//const credentials = require('./credentials').credentials;

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').load();
}
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

//handle req stuff
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors());
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/api/sendmail', (req, res) => {
	console.log(req.body);
	let body = req.body

	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.from,
			pass: process.env.password
		}
	})
	console.log("the auth is",process.env.from,process.env.password);
	const mailOptions = {
		from: body.from, // sender address
		to: process.env.to, // list of receivers
		subject: body.subject, // Subject line
		text: body.from + " \n" + body.body //, // plaintext body
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log("sending the email failed");
			console.log(error);
			res.json({sent:false});
		}
		else {
			console.log("sending the email succeeded");
			res.json({sent:true});
		}
	})
})




module.exports = app;