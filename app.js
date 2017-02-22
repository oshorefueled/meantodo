var express = require('express');
var bodyParser = require('body-parser');
var bootstrap = require('./bootstrap/app');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//create port
var port = process.env.PORT || 4000;
app.listen(port);
console.log('.............\n Nucleus successfully started...\n Running nucleus on port ', port);

//start nucleus
bootstrap.start(app);



app.get('/tester', function (req, res) {
    res.send('tester is working');
});


