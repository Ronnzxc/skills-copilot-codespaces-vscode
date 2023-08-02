 // Create Web server application with Express
 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();

 // Use body-parser middleware to parse HTTP message body
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

 // Define HTTP GET method to get all comments
 app.get('/comments', (req, res) => {
     res.json(comments);
 });

 // Define HTTP POST method to add a new comment
 app.post('/comments', (req, res) => {
     const comment = {
         id: comments.length + 1,
         timestamp: Date.now(),
         body: req.body.body,
     };
     comments.push(comment);
     res.json(comment);
 });

 // Define HTTP PUT method to update an existing comment
 app.put('/comments/:id', (req, res) => {
     const id = parseInt(req.params.id, 10);
     const comment = comments.filter(comment => comment.id === id)[0];
     comment.body = req.body.body;
     res.json(comment);
 });

 // Define HTTP DELETE method to delete an existing comment
 app.delete('/comments/:id', (req, res) => {
     const id = parseInt(req.params.id, 10);
     const index = comments.findIndex(comment => comment.id === id);
     comments.splice(index, 1);
     res.status(204).send();
 });

 // Start the server and listen on port 3000
 app.listen(3000, () => {
     console.log('Server is running on port 3000');
 });

 // Define an array to store comments
 const comments = [
     {
         id: 1,
         timestamp: Date.now(),
         body: 'First comment',
     },
     {
         id: 2,
         timestamp: Date.now(),
         body: 'Second comment',
     },
     {
         id: 3,
         timestamp: Date.now(),
         body: 'Third comment',
     },
 ];