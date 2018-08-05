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
router.post('/api/insertpost/', (req, res) => {
    const query = `INSERT INTO posts (title, post) VALUES (${req.body.title}, ${req.body.post})`;
    db.query(query, (err,response) => {
        res.send(response);
    });
});

// deletes post with provided id
router.post('/api/deletepost/:id', (req, res) => {
    const query = `DELETE FROM posts WHERE id = ` + req.params.id;
    db.query(query, (err,response) => {
        res.send(response);
    });
});

module.exports = router;
