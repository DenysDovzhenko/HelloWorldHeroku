var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

const key = '/ssl/privkey.pem'
const cert = '/ssl/fullchain.pem'

if (fs.existsSync(key) && fs.existsSync(cert)) {
    var https = require('https');

    var options = {
        key: fs.readFileSync(key),
        cert: fs.readFileSync(cert),
    }

    https.createServer(options, app).listen(process.env.PORT, function () {
        console.log('App is listening on port ' + process.env.PORT);
    });
}

app.get('/', function (req, res) {
    res.send('Hello World! Hello to everybody! We are going to post here new content soon!'); 
});

http.createServer(app).listen(process.env.PORT, function () {
    console.log('App is listening on port ' + process.env.PORT);
});
