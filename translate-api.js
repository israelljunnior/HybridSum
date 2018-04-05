


var http = require('http');

const translate = require('google-translate-api');

var server = http.createServer(function(req,res){

var url = req.url;


translate(string, {to: 'en'}).then(res => {
    stringTranslated = res.text;
    //=> I speak English
    originLanguage = res.from.language.iso;
    //=> nl



}).catch(err => {
    console.error(err);
});



});

server.listen(1337,'127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
