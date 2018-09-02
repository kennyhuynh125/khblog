// require database adapter file
const db = require('../db');
const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.send('Hello!');
});

// gets all the posts
router.get('/api/posts', (req, res) => {
    const query = `SELECT * FROM posts`;
    db.query(query, (err, response) => {
        res.send(response.rows);
    });
});

// gets post with provided id 
router.get('/api/posts/:id', (req, res) => {
    const query = `SELECT * FROM posts WHERE id = ` + req.params.id;
    db.query(query, (err, response) => {
        res.send(response.rows);
    });
});

// inserts new post
router.post('/api/insertpost', (req, res) => {
    const query = `INSERT INTO posts (title, post) VALUES ($1, $2)`;
    const values = [req.body.title, req.body.post];
    db.query(query, values, (err,response) => {
        res.send(response);
    });
});

// updates existing post
router.post('/api/updatepost', (req, res) => {
    const query = `UPDATE posts SET title = ($1), post = ($2) WHERE id = ($3)`;
    const values = [req.body.title, req.body.post, req.body.id];
    db.query(query, values, (err, response) => {
        res.send(response);
    });
});

// deletes post with provided id
router.post('/api/deletepost', (req, res) => {
    const query = `DELETE FROM posts WHERE id = ($1)`;
    const values = [req.body.id];
    db.query(query, values, (err,response) => {
        res.send(response);
    });
});

// used for logging in user
router.post('/api/login', (req, res) => {
    if (req.body.username.toLowerCase() === process.env.LOGIN_USERNAME && 
        req.body.password === process.env.LOGIN_PASSWORD) {
            console.log('lit');
            res.send(true);
    } else {
        res.send(false);
    }

})
module.exports = router;
