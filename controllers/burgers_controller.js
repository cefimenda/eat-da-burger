var express = require('express');
const app = express();
const db = require('../models/burger')
let router = express.Router();


// Routes
router.get("/", function (req, res) {
    db.getItem('id', 0, '>').then(function (response) {
        var burgers = response
        res.render('index', { burgers })
    });
});
router.put("/devour/:id", function (req, res) {
    var id = req.params.id
    db.updateTable('devoured', 1, 'id', id).then(function (response) {
        res.send(response)
    });
});
router.delete("/delete/:id", function (req, res) {
    var id = req.params.id
    db.deleteItem('id', id).then(function (response) {
        res.send(response)
    });
});
router.post("/", function (req, res) {
    var burger = req.body
    console.log(req.body)
    console.log(burger)
    db.append(burger).then(function (response) {
        res.send(response)
    });
});



module.exports = router;