 // create web server 
 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 var fs = require('fs');
 var path = require('path');
 var mongoose = require('mongoose');
 var bcrypt = require('bcrypt');
 var session = require('express-session');
 var MongoStore = require('connect-mongo')(session);
 var db = mongoose.connection;
 var Schema = mongoose.Schema;
 var multer = require('multer');
 var upload = multer({ dest: 'uploads/' });
 var ObjectId = require('mongodb').ObjectID;
 var cookieParser = require('cookie-parser');
 var flash = require('connect-flash');
 var passport = require('passport');
 var LocalStrategy = require('passport-local').Strategy;
 var expressValidator = require('express-validator');
 var nodemailer = require('nodemailer');
 var async = require('async');
 var crypto = require('crypto');
 var dateFormat = require('dateformat');
 var moment = require('moment');
 var _ = require('underscore');
 var request = require('request');
 var csv = require('csv');
 var json2csv = require('json2csv');
 var fields = ['Name', 'Email', 'Phone', 'Address', 'City', 'State', 'Zip', 'Country', 'Comments', 'Date'];
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });
 var csvWriter = require('csv-write-stream');
 var writer = csvWriter({ headers: fields });

 // connect to mongoose
 mongoose.connect('mongodb://localhost/Comments');
 var db = mongoose.connection;
 // check connection
 db.once('open', function() {
     console.log('Connected to MongoDB');
 });
 // check
