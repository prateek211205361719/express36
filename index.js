
var express = require('express');
var google = require('googleapis');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    
    res.send("hello how are u");
});

app.get('/oauthcallback', function(req, res){
     res.send(req);
})

app.listen(port, function(){
    console.log('--------------'+port);
});