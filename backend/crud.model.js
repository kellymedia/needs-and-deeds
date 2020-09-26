const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudPerson = new Schema({
    person_name: {
        type: String
    },
    person_email: {
        type: String
    },
    person_address: {
        type: String
    },
    person_need: {
        type: String
    },
    person_phonenumber: {
        type: Number
    },
    person_date: {
        type: Date,
        default: Date.now
    },
    person_description: {
        type: String,
    }
});

module.exports = mongoose.model('school_student', crudPerson);
