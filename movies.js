// model schema
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/madcon');

var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: String,
    length: String,
    rating: Number
});

module.exports = mongoose.model('Movie', MovieSchema);