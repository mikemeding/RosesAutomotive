/**
 * Created by mike on 5/20/15.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/app"));

var mongojs = require('mongojs');
// our db connection
var db = mongojs('rosesautomotive', ['rosesautomotive']);

// REST CALLS
app.get('/used-cars', function (req, res) {
    console.log('GET request');

    // call database for all info
    db.rosesautomotive.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

var port = 3000;
app.listen(port);
console.log('Server running on port: ' + port);