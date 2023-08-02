 // create web server 
 const express = require('express');
 const router = express.Router();
 const Comment = require('../models/comment');
 const Post = require('../models/post');
 const commentsController = require('../controllers/comments_controller');
 
 // create comment
 router.post('/create', commentsController.create);
 
 // delete comment
 router.get('/destroy/:id', commentsController.destroy);
 
 module.exports = router;
