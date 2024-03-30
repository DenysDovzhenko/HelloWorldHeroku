const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

const privateKey = '/ssl/privkey1.pem'
const certificate = '/ssl/fullchain1.pem'
let ssl = false
let credentials

if (fs.existsSync(privateKey) && fs.existsSync(certificate)) {
    credentials = {
        key: fs.readFileSync(privateKey),
        cert: fs.readFileSync(certificate)
    };

    ssl = true
}

app.use((req, res) => {
    res.send('Hello there !');
});

if (ssl) {
    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(443, () => {
        console.log('HTTPS Server running on port 443');
    });
}
else {
    const httpServer = http.createServer(app);

    httpServer.listen(process.env.PORT, () => {
        console.log('HTTP Server running on port 80');
    });
}
