'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = Schema({
    firstName: String,
    secondName: String,
    firstSurname: String,
    lastSurname: String,
    birthdate: String,
    religion: String,
    email: String,
    gender: String,
    department: String,
    municipality: String,
    zone: String,
    neighborhood: String,
    avenue: String,
    street: String,
    area: String,
    houseNumber: String,
    mobileNumber: Number,
    housePhone: Number,
    another: Number
});

module.exports = mongoose.model('Person', PersonSchema);
