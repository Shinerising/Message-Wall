var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var Filter = require('bad-words-chinese'),
    filter = new Filter();

mongoose.connect('mongodb://localhost/messagewall');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected.");
});

var UserSchema = new mongoose.Schema({
    name: String,
    id: String,
    lastsend: Date,
    liked: [],
    regTime: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        expires: 3600 * 24 * 30
    }
}, {
    collection: 'UserInfo'
});
var User = mongoose.model('User', UserSchema);

var MemorySchema = new mongoose.Schema({
    text: String,
    name: String,
    color: Number,
    likes: Number,
    rates: Number,
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
        maxAge: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    }
}));

/* Start server */
app.listen(8080);

/* Check if New Visitor */
app.use(function(req, res, next) {
    if (req.session && req.session.userid) {

    } else {
        var newUser = new User({
            name: "",
            id: "",
            lastsend: 0,
            liked: []
        });
        newUser.save(function(error) {
            if (error) {

            } else {
                req.session.userid = newUser._id;
            }
        });
    }
    next();
});

/* Get Messages */
app.post('/getleaves', function(req, res) {
    var start = req.body.start;
    var count = req.body.count;
    Memory.find({}, null, {
            skip: 0,
            limit: 10,
            sort: {
                rates: 1
            }
        },
        function(error, memories) {
            var success = false;
            var message = "";
            var liked = [];
            if (error) {
                console.log(error);
                message = error;
            } else {
                success = true;
                memories.forEach(function(value){
                    if([].includes(value._id)) {
                        liked.push(1);
                    } else {
                        liked.push(0);
                    }
                });
            }
            var data = {
                "action": "addnew",
                "success": success,
                "message": message,
                "params": {
                    "memories": memories,
                    "liked": liked
                }
            };
            return res.json(data);
        });
});

/* Add New Message */
app.post('/addnewleaf', function(req, res) {
    if (filter.isProfane(req.body.text) || filter.isProfane(req.body.name)) {
        var data = {
            "action": "addnew",
            "success": false,
            "message": "BAD WORDS",
            "params": {}
        };
        return res.json(data);
    } else {
        Memory.count({}, function(error, count) {
            var newMemory = new Memory({
                text: req.body.text,
                name: req.body.name,
                color: req.body.color,
                likes: 0,
                rates: count
            });
            newMemory.save(function(error) {
                var success = false;
                var message = "";
                if (error) {
                    console.log(error);
                    message = error;
                } else {
                    success = true;
                }
                var data = {
                    "action": "addnew",
                    "success": success,
                    "message": message,
                    "params": {
                        "id": newMemory._id
                    }
                };
                return res.json(data);
            });
        })
    }
});

/* Like a Message */
app.post('/likeleaf', function(req, res) {

});