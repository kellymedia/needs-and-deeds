require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/needs-and-deeds');

const crudRoutes = express.Router();
let Crud = require('./crud.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false/crud_mern',
    { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

crudRoutes.route('/').get((req, res) => {
    Crud.find((err, results) => {
        if (err) console.log(err);
        else res.json(results);
    });
});

crudRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Crud.findById(id, (err, result) => {
        if (err) console.log(err);
        else res.json(result);
    });
});

crudRoutes.route('/add').post((req, res) => {
    let list = new Crud(req.body);
    list.save().then(list => {
        res.status(200).json({'list': 'Person added successfully'});
        console.log(list)
    }).catch(err => {
        res.status(400).send('Adding failed');
    });
});

crudRoutes.route('/update/:id').post((req, res) => {
    Crud.findById(req.params.id, (err, data) => {
        if (!data) res.status(404).send("Person is not found");
        else {
            data.personName = req.body.personName;
            data.personEmail = req.body.personEmail;
            data.personAddress = req.body.personAddress;
            data.personNeed = req.body.personNeed;
            data.personPhoneNumber = req.body.personPhoneNumber;
            data.personDescription = req.body.personDescription;
            data.personVerification = req.body.personVerification;
            
            data.save().then(data => {
                res.json('Data is updated!');
            }).catch(err => {
                res.status(400).send("Update isn't possible");
            });
        }
    });
});

crudRoutes.route('/delete/:id').delete((req, res) => {
    Crud.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send(`Person ${data.personName} was deleted`);
    })
})

app.use('/all_person', crudRoutes);

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
})

app.set("port", PORT);