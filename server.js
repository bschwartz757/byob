// server
var express = require('express');
var app = express();
var Movie = require('./movies');

app.get('/movies', function(req, res) {
    Movie.find({}, function(err, movies) {
        if (err) {
            res.send(movies);
        }
        res.json(movies);
    });
});

app.listen(8000, function() {
    console.log('Listening on port ' + 8000);
});