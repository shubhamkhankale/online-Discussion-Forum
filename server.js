var express = require('express');
var ehd = require('express-handlebars');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo');
var mongoose = require('mongoose');
var url = require('url');

app.get('/', function (req, res) {
    // //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('homepage');
    
});

/*var db = mongoose.connect("mongodb://127.0.0.1/demo", function (err) {
    if (err) {
        console.log("not");
        throw err;
    }
    else {
        console.log("connected to db");
    }
});
var userSchema = new mongoose.Schema({
    email: {
        type: String
        , unique: true
        , required: true
    }
    , security_que: String
    , answer: String
    , password: String
    , fname: String
    , repassword: String
    , admin: {
        type: Boolean
        , default: false
    }
    , block: {
        type: Boolean
        , default: false
    }
});
var uSchema = new mongoose.Schema({
    question: {
        type: String
        , required: true
    }
    , spl_id: {
        type: String
    }
});
var DSchema = new mongoose.Schema({
    domain: {
        type: String
    }
    , status: {
        type: String,
        default:1
    }
});
var uSchema1 = new mongoose.Schema({
    que_id: {
        type: String
    }
    , answer: {
        type: String
    }
    ,
    user_name:{
        type:String
    }
});
var User5 = new mongoose.Schema({
    user_id: {
        type: String
    }
});
app.use(cookieParser());
app.use(require('express-session')({
    key: 'session'
    , secret: 'bhjgbhjbj1452'
    , saveUninitialized: true
    , store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
    , resave: true
}));
var bodyParser = require('body-parser');
app.engine('handlebars', ehd());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function (req, res) {
    // //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        mongoose.model('stores').find(function(err,result){
                        if(err)
                            throw err;
                        else if(!result)
                            res.render('homepage');
                        else
                            res.render('homepage',{data:result});
                    });
    
});
app.get('/signup', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        res.render('signup');
 
});

app.get('/homepage', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        mongoose.model('stores').find(function(err,result){
                        if(err)
                            throw err;
                        else if(!result)
                            res.render('homepage');
                        else
                            res.render('homepage',{data:result});
                    });
    
});

app.get('/homepage1', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        mongoose.model('stores').find(function(err,result){
                        if(err)
                            throw err;
                        else if(!result)
                            res.render('homepage1');
                        else
                            res.render('homepage1',{data:result});
                    });
    }
});

app.get('/admin', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        mongoose.model('stores').find(function(err,result){
                        if(err)
                            throw err;
                        else if(!result)
                            res.render('admin');
                        else
                            res.render('admin',{data:result});
                    });
    
});

app.get('/uinsert', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
       
                    res.render('insert_field');
                      
});

app.get('/answer', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        var s = req.query.que_id;
        mongoose.model('answers').find({
            'que_id': s
        }, function (err, result) {
            if (err) throw err;
            else {
                res.render('answer', {
                    data: result
                })
            }
        });
    }
});

app.get('/answer1', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        var s = req.query.que_id;
        mongoose.model('answers').find({
            'que_id': s
        }, function (err, result) {
            if (err) throw err;
            else {
                res.render('answer1', {
                    data: result
                });
            }
        });
   
});

app.get('/answer2', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        var s = req.query.que_id;
        mongoose.model('answers').find({
            'que_id': s
        }, function (err, result) {
            if (err) throw err;
            else {
                res.render('answer2', {
                    data: result
                });
            }
        });
   
});




app.get('/about', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        res.render('about');
   
});
app.get('/contact', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
       
        res.render('contact');
   
});
app.get('/update', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        res.render('update');
    }
});
app.use(express.static('public'));

var user = mongoose.model('registers', userSchema);
app.post('/send_details', function (req, res) {
    // //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    var u = new user(req.body);
        u.save(function (err, result) {
            if (err) res.json(err);
            else res.render('signup',{msg:'User created successfully'});
        });
});

var user7 = mongoose.model('domain_infos', DSchema);
app.post('/insert_field', function (req, res) {
    // //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    var u = new user7(req.body);
        u.save(function (err, result) {
            if (err) res.json(err);
            else res.render('insert_field',{msg:'Field successfully inserted'});
        });
});

app.post('/update_details', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    var puser = req.body.pname;
    var name = req.session.user.fname;
    console.log(name);
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        mongoose.model('registers').update({
            'fname': req.session.user.fname
        }, {
            $set: {
                fname: req.body.fname
                , email: req.body.email
                , repassword: req.body.repassword
                , password: req.body.password
            }
        }, function (err, result) {
            if (err) throw err;
            else res.render('update',{msg:'Profile updated successfully'});
        });
    }
});
var user3 = mongoose.model('answers', uSchema1);
app.post('/give_ans', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        new user3({
            que_id: req.body.ans
            , answer: req.body.give_ans,
            user_name:req.session.user.email
        }).save(function (err, result) {
            if (err) res.json(err);
            else if(!result){
                
            }
            else 
                var s=req.body.ans;
                mongoose.model('answers').find({'que_id':s},function(err,result1){
                    if(err)
                        throw err;
                    else if(!result1)
                        res.render('answer',{data:result1,msg:"Answer Submitted"});
                    else
                        res.render('answer',{data:result1,msg:"Answer Submitted"});
            });
        });
    }
});


var user1 = mongoose.model('stores', uSchema);
app.post('/ask_question', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        var temp = req.body.btn;
        new user1({
            spl_id: req.body.btn
            , question: req.body.question
        }).save(function (err, result) {
            if (err) res.send(err);
            else 
                var a = req.body.btn;
        mongoose.model('stores').find({
            'spl_id': a
        }, function (err, result) {
            if (err) throw err;
            else {
                res.render('overview2', {
                    data: result
                })
            }
        });

        })
     
});
app.get('/display', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   
        console.log(req.session);
        var a = req.query.domain;
        mongoose.model('stores').find({
            'spl_id': a
        }, function (err, result) {
            if (err) throw err;
            else {
                res.render('overview2', {
                    data: result
                })
            }
        });
   
});
app.get('/get_ans', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        var s = req.query.que_id;
        mongoose.model('answers').find({
            'que_id': s
        }, function (err, result) {
            if (err) throw err;
            else {
                res.render('answer_display', {
                    data: result
                })
            }
        });
    }
});
app.get('/login', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('login');
});
var u = mongoose.model('blocks', User5);
app.post('/block_user', function (req, res) {
    // res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        // if(req.session.user.admin==true)
        var temp = req.body.username;
        mongoose.model('registers').update({
            "email": temp
        }, {
            "block": true
        }, function (err, result) {
            if (err) throw err;
            if (!result) {
                res.render('block',{msg:'User doesnt exist'})
            }
            else res.render('block',{msg:'User Blocked Successfully'});
        });
});

app.get('/block', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('block');
});

app.post('/unblock_user', function (req, res) {
    // res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    
        // if(req.session.user.admin==true)
        var temp = req.body.username;
        mongoose.model('registers').update({
            "email": temp
        }, {
            "block": false
        }, function (err, result) {
            if (err) throw err;
            if (!result) {
                res.render('block',{msg:'User is not blocked'});
            }
            else res.render('block',{msg:'User Unblocked Successfully'});
        });
});




app.post('/log', function (req, res) {
    ////res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    var name = req.body.email;
    var pass = req.body.password;
    if(name=="admin@gmail.com" && pass=="admin123")
    {
       mongoose.model('stores').find(function(err,result){
                        if(err)
                            throw err;
                        else if(!result)
                            res.render('admin');
                        else
                            res.render('admin',{data:result});
                    });   
    }
    else
    {
            mongoose.model('registers').findOne({
            $and: [{
                "email": name
            }, {
                "password": pass
            }]
        }, function (err, result) {
            if (err) throw err;
            else if (!result) {
                res.render('login',{msg:"Invalid Email or Password"});
            }
            else {
                        req.session.user = result;
                        
                        if(req.session.user.block==true)
                            res.render('login',{msg:'User is blocked'});
                        else
                        {
                        // console.log(req.session);
                        mongoose.model('stores').find(function(err,result){
                            if(err)
                                throw err;
                            else if(!result)
                                res.render('homepage1');
                            else
                                res.render('homepage1',{data:result});
                        });
                        }
                    }
                
    });    
    }
    
});


app.get('/tech', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.send("Invalid");
    }
    else {
        console.log(req.session);
        mongoose.model('domain_infos').find(function (err, result) {
            if (err) 
                throw err;
            else {
                res.render('overview', {data: result});
            }
        });
    }
});


app.post('/give_hint', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        var name = req.body.uname;
        mongoose.model('registers').findOne({
            'email': name
        }, {
            answer: 1
            , _id: 0
        }, function (err, result) {
            if (err) throw err;
            else if (!result) {
                res.send("User doesnt exist");
            }
            else {
                res.render('hint', {
                    data: result
                });
            }
        });
    }
});
app.get('/block', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        if (req.session.user.admin == true) {
            mongoose.model('registers').find({
                fname: {
                    $ne: "admin"
                }
            }, function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    res.render('block', {
                        data: result
                    });
                }
            });
        }
        else res.send("Access Denied");
    }
});
app.get('/logout', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    req.session.destroy();
    console.log("logged out");
    res.render('login');
});
app.post('/change_password', function (req, res) {
    //res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    if (!req.session.user) {
        res.render('login', {
            msg: 'you need to login first'
        });
    }
    else {
        var m = req.query.answer;
        res.send(m);
        console.log(m);
        mongoose.model('registers').update({
            'answer': m
        }, {
            $set: {
                'password': req.body.password
            }
        }, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log("done");
            }
        });
    }
});*/
app.listen(3000, function (err) {
    if (err) throw err;
    else {
        console.log("listening at 3000");
    }
});