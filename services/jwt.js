'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'secret_key';

exports.createToken = function(person){
    var payload = {
        sub: person._id,
        firstName: person.firstName,
        secondName: person.secondName,
        firstSurname: person.firstSurname,
        lastSurname: person.lastSurname,
        birthdate: person.birthdate,
        religion: person.religion,
        email: person.email,
        gender: person.gender,
        department: person.department,
        municipality: person.municipality,
        zone: person.zone,
        neighborhood: person.neighborhood,
        avenue: person.avenue,
        street: person.street,
        area: person.area,
        houseNumber: person.houseNumber,
        mobileNumber: person.mobileNumber,
        housePhone: person.housePhone,
        another: person.another, 
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };
    return jwt.encode(payload, secret);
}