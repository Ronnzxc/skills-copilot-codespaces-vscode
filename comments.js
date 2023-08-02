 // Create Web server
 
var express = require('express');
var app = express();
var fs = require('fs');

// Create Web server
var app = express();

// Set up handlebars view engine
var handlebars = require('express3-handlebars')
   .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Set up body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up public directory
app.use(express.static(__dirname + '/public'));

// Set up port
app.set('port', process.env.PORT || 3000);

// Set up database
var mongoose = require('mongoose');
var opts = {
   server: {
      socketOptions: { keepAlive: 1 }
   }
};
switch(app.get('env')) {
   case 'development':
      mongoose.connect(credentials.mongo.development.connectionString, opts);
      break;
   case 'production':
      mongoose.connect(credentials.mongo.production.connectionString, opts);
      break;
   default:
      throw new Error('Unknown execution environment: ' + app.get('env'));
}

// Set up database schema
var Comment = require('./models/comment.js');

// Set up database schema
var User = require('./models/user.js');

// Set up database schema
var Post = require('./models/post.js');

// Set up database schema
var Comment = req