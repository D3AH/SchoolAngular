'use strict'

var Person = require('../models/person');
var auth = require('../middlewares/authenticated');
var jwt = require('../services/jwt');

function checkPerson(req, res){
    res.status(200).send({message:'Open it up'});
}

module.exports = {
    checkPerson
}