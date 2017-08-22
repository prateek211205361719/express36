
var express = require('express');
var google = require('googleapis');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    console.log('----------');
    var OAuth2 = google.auth.OAuth2;
    var oauth2Client = new OAuth2('550794702620-djqehth8agn6n73kiqdonclmivf5tpe4.apps.googleusercontent.com',  'NiUo_W8rZH3Wa4Ikkr3Ir8by', 'https://shrouded-hamlet-68890.herokuapp.com/oauthcallback');
    var scopes = [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/calendar'
    ];
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
    console.log('---------------'+url);
    res.redirect(url);
});

app.get('/oauthcallback', function(req, res){
     res.send(req);
})

app.listen(port, function(){
    console.log('--------------'+port);
});