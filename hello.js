var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('We want to show new content here.'); 
});

app.listen(process.env.PORT, function () {
   console.log('App is listening on port ' + process.env.PORT);
});
