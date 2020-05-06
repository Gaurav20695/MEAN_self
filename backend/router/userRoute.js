var express = require('express');
var userRoute = express.Router();
var User = require('../model/user');
var bcrypt = require('bcrypt');

userRoute.post('/signup', (req, res) => {

    User.findOne({ username: req.body.username }, (err, result) => {

        if (result) {
            console.log('already exists');
            res.send({
                message: `Username ${req.body.username} already exists.`
            })

        }
        else {

            encryptedPassword = bcrypt.hashSync(req.body.username, 10)
            console.log(encryptedPassword);
            var newUser = new User({
                username: req.body.username,
                password: encryptedPassword
            });
            console.log(newUser);
            newUser.save()
                .then(result => {
                    console.log('Saved');
                    res.status(201).send({
                        message: 'saved'
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }

    })




});

module.exports = userRoute;
