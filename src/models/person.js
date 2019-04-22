const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'The field firstName is required.']
    },
    secondName: {
        type: String,
        required: [true, 'The field secondName is required.']
    },
    firstSurname: {
        type: String,
        required: [true, 'The field firstSurname is required.']
    },
    lastSurname: {
        type: String,
        required: [true, 'The field lastSurname is required.']
    },
    birthdate: {
        type: String,
        required: [true, 'The field birthdate is required.']
    },
    religion: {
        type: String,
        required: [true, 'The field religion is required.']
    },
    email: {
        type: String,
        required: [true, 'The field email is required.']
    },
    gender: {
        type: String,
        required: [true, 'The field gender is required.']
    },
    department: {
        type: String,
        required: [true, 'The field department is required.']
    },
    municipality: {
        type: String,
        required: [true, 'The field municipality is required.']
    },
    zone: {
        type: String,
        required: [true, 'The field zone is required.']
    },
    neighborhood: {
        type: String,
        required: [true, 'The field neighborhood is required.']
    },
    avenue: {
        type: String,
        required: [true, 'The field avenue is required.']
    },
    street: {
        type: String,
        required: [true, 'The field street is required.']
    },
    area: {
        type: String,
        required: [true, 'The field area is required.']
    },
    houseNumber: {
        type: String,
        required: [true, 'The field houseNumber is required.']
    },
    mobileNumber: {
        type: Number,
        required: [true, 'The field mobileNumber is required.']
    },
    housePhone: {
        type: Number,
        required: [true, 'The field housePhone is required.']
    },
    another: {
        type: Number,
        required: [true, 'The field another is required.']
    }
}, {
    // Localización: es, Intensidad de coincidencia
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Person', PersonSchema);
