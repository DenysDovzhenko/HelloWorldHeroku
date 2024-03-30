var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

const key = fs.readFileSync('/ssl/privkey.pem')
const cert = fs.readFileSync('/ssl/fullchain.pem')
const ca = fs.readFileSync('/ssl/chain.pem')

app.get('/', function (req, res) {
    res.send('Hello World! Hello to everybody! We are going to post here new content soon!'); 
});

if (fs.existsSync(key) && fs.existsSync(cert)) {
    var https = require('https');

    var options = {
        key: key,
        cert: cert,
        ca: ca
    }

    https.createServer(options, app).listen(443, function () {
        console.log('App is listening on port ' + process.env.PORT);
    });
}

http.createServer(app).listen(process.env.PORT, function () {
    console.log('App is listening on port ' + process.env.PORT);
});
