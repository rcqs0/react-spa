var express = require('express');
var app = express();

app.get('/main/*', function(req, res){
    res.sendFile(__dirname + '/_public/index.html');
});

app.use('/static', express.static(__dirname + '/_public/assets'));

app.listen(8080);