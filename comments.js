 // Create Web server
 
 // Import the express module
 const express = require('express');
 
 // Create a new web server
 const app = express();
 
 // Import the comments module
 const comments = require('./comments');
 
 // Add a route to the server
 app.get('/comments', (req, res) => {
   res.send(comments);
 });
 
 // Start listening on port 3000
 app.listen(3000, () => {
   console.log('Listening on port 3000');
 });