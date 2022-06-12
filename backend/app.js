const express = require('express');
const app = express();

const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
}

app.enable('trust proxy');

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
		to: 'ted@trypolymer.com',
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
		res.send(JSON.stringify({success: 1, text: 'success'}));
	})
	.catch((error) => {
		res.send(JSON.stringify({success: 0, text: error}));
	});
});

// const httpServer = http.createServer(app);
// httpServer.listen(8080, () => {
// 	console.log('HTTP server running on port 8080');
// });

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

const httpApp = express();
httpApp.get("*", function(req, res, next) {
	res.redirect("https://" + req.headers.host + req.path);
});

const httpServer = http.createServer(httpApp);
httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});
