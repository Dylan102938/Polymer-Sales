const express = require('express');
const app = express();

const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/trypolymer.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
}

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
