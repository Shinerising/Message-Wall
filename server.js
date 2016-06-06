var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost/messagewall');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected.");
});

var UserSchema = new mongoose.Schema({
    name: String,
    id: String,
    liked: [],
    regTime: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        expires: 3600 * 24
    }
}, {
    collection: 'UserInfo'
});
var User = mongoose.model('User', UserSchema);

var MemorySchema = new mongoose.Schema({
    text: String,
    name: String,
    color: Number,
    rate: Number,
    pubTime: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Memories'
});
var Memory = mongoose.model('Memory', MemorySchema);

/* Add Express Middlewares */

/* Serve Static Files */
app.use(express.static(__dirname + '/public'));

/* Parse Post Requests */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/* Cookie Handle */
app.use(cookieParser());
app.use(session({
    secret: 'message wall',
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: new Date(Date.now() + 24 * 60 * 60 * 1000)
    }
}));

/* Start server */
app.listen(8080);

app.use(function(req, res, next) {
    if (req.session && req.session.userid) {

    } else {
        var newUser = new User({
            name: "",
            id: "",
            liked: []
        });
        newUser.save(function(error) {
            if (error) {} else {
                req.session.userid = newUser._id;
            }
        });
    }
    next();
});

app.post('/getleaves', function(req, res) {
    var start = 0;
    var count = 0;
    var leaf = {
        uid: 0,
        text: "",
        name: "",
        color: "",
        isliked: 0
    };
});

app.post('/addnewleaf', function(req, res) {

});

app.post('/likeleaf', function(req, res) {

});