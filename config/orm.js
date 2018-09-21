var Table = require('mysql-simplified'); //--> my custom ORM
var config = require('./connection');

var db = new Table("burgers", config);
db.connect();

module.exports = db;

