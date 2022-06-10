const express = require('express');
const app = express();

const fs = require('fs');
const https = require('https');
// const http = require('http');
const path = require('path');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
}

const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/send-mail', jsonParser, (req, res) => {
	const replyTo = req.body.workEmail;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const company = req.body.company;
	const industry = req.body.industry;
	const jobTitle = req.body.jobTitle;
	const message = req.body.message;
	const msg = {
		to: 'dylan@trypolymer.com',
		from: 'dylan@trypolymer.com',
		replyTo: replyTo,
		subject: 'Polymer Sales Inquiry',
		text: `First Name: ${firstName}\n` +
		`Last Name: ${lastName}\n` +
		`Company Name: ${company}\n` + 
		`Industry: ${industry}\n` + 
		`Job Title: ${jobTitle}\n` + 
		`Message: ${message}\n`
	}

	sgMail.send(msg).then(() => {
		res.send('Email sent');
	})
	.catch((error) => {
		res.send(error);
	});
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

// const httpServer = http.createServer(app);
// httpServer.listen(8080, () => {
// 	console.log('listening on port 8080');
// });
