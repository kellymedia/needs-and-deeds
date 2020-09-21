const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudPerson = new Schema({
    person_name: {
        type: String
    },
    person_lastname: {
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
    person_verification: {
        type: Boolean
    }
});

module.exports = mongoose.model('school_student', crudStudent);