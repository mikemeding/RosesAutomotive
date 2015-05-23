/**
 * Created by mike on 5/20/15.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/app"));

//
//app.get('/', function (req, resp) {
//    resp.send('hello world');
//});

var port = 3000;
app.listen(port);
console.log('Server running on port: ' + port);