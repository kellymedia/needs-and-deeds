const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crudPerson = new Schema({
    personName: {
        type: String
    },
    personEmail: {
        type: String
    },
    personAddress: {
        type: String
    },
    personNeed: {
        type: String
    },
    personPhoneNumber: {
        type: String
    },
    personDate: {
        type: String,
    },
    personDescription: {
        type: String,
    }
});

module.exports = mongoose.model('needs_deeds', crudPerson);
