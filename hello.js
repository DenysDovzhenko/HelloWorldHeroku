var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World! Hello to everybody! We are going to post here new content soon!'); 
});

app.listen(process.env.PORT, function () {
   console.log('App is listening on port ' + process.env.PORT);
});
