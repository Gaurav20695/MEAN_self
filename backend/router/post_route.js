
var express = require('express');
var post_route = express.Router();
var Post = require('../model/post');



post_route.get('/getpost', (req, res) => {

    Post.find().then(post => {
        res.status(200).send({
            posts: post
        })
    })
        .catch(err => {
            console.log(err);
        })

});

post_route.post('/post', (req, res) => {

    console.log("we are here");
    var post = new Post({
        subject: req.body.subject,
        content: req.body.content
    });
    console.log(post);

    post.save()
        .then(result => res.status(201).send({ message: 'post created successfully', post: result }))
        .catch(err => console.log(err));
});

post_route.delete('/deletepost/:id', (req, res) => {

    console.log("we are here");


    console.log(req.params.id);

    Post.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) {
            console.log("=================not deleted==================");
            console.log(err);
        } else {
            console.log(result);
            res.status(200).send({ message: 'deleted', result: result });
        }
    });
});

module.exports = post_route;