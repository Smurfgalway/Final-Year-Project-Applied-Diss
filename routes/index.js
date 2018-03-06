var express = require('express');
const router = express.Router();
const fs = require('fs');
const apiCode = "2cc22b66-ee2f-43b7-a8cc-13ce557feaf4";
var Profile = require('../models/profileModel');
var Wallet = require('../models/myWalletModel');
var Status= require('../models/statusModel');
const authentication = require('../routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const MLABS = require('mongoose').Mongoose;
const request = require('request');
const MongoClient = require('mongodb').MongoClient;

// Testing Mlabs below
const MONGO_URL = 'mongodb://Conor:softwaregroup10@ds145438.mlab.com:45438/globalusers';
var global = new MLABS();
var database;

MongoClient.connect(MONGO_URL, (err, db) => {  
    if(err){
        console.error("Error! " + err);
    }else{
        console.log("Connected to online server");
        database = db;
        
    }
});


// Create a new wallet and add it to the wallets collection
router.post('/newWallet', function (req, res, next) {
    var response;
    var pass = req.body.walletpass;
    var label = req.body.label;
    var walletpass;
    var walletlabel;
    var walletaddress;
    var resjson;
    wallet = new Wallet;
    console.log("Request new wallet pass:" + pass);
    console.log("Request new wallet label:" + label);

    function processRequest(json) {
        var j = JSON.parse(json);
        console.log("j obj: " + j);
        this.walletguid = j.body.guid;
        this.walletaddress = j.body.address;
        this.walletlabel = j.body.label; 

        var wallet = new Wallet({
            guid: this.walletguid,
            address: this.walletaddress,
            label: this.walletlabel
        });
   
       console.log("wallet: ");
       console.log(wallet);
       wallet.save(function(err, result) {
           if (err) {
               console.log(err);
               return res.status(500).json({
                   message: 'Error while saving data!'
               });
           }
           console.log("SUCCESS");
           console.log(result);
           res.status(201).json({
               message: 'Saved data successfully'
           });
       });
    }

    request('http://127.0.0.1:3001/api/v2/create?password=' + pass + '&label=:' + label + '&api_code=' + apiCode, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        response = resp;
        this.resjson = JSON.stringify(resp);
        processRequest(this.resjson);
    });

});

global.get('/globalusers', function(req, res, next){
    console.log('Get request for all users');
    Profile.find({})
    .exec(function(err, profile){
        if(err){
            res.send("Error retrieving users");
        }else{
            res.json(profile);
        }
    })
});

// Getting crypto profile from db
router.get('/globalusers/:username', function(req, res, next) {
    console.log("gothere!!!");
    var username = req.params.username;
    console.log(username);
    profile = new Profile;

    console.log(database);
    database.collection("users").find({ username: username }, { username: 1, aboutMe: 1, bitcoinAddress: 1 }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        profile = result;
    });

    // Getting searched user from database
    console.log("profile: " + profile);
    console.log("process mlabs done");
});

// Getting crypto profile from db
router.get('/login/profile/:username', function(req, res, next) {
    Profile.find(function(err, messages) {
        console.log(messages);
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: messages
        });
    });
});

// Get wallets
router.get('/wallets/all', function(req, res, next) {
    Wallet.find(function(err, messages) {
        console.log(messages);
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: messages
        });
    });
});

// Index Page, this is the router view for angular 2 this loads all the html pages that are in the client
router.get('/', function (req, res, next) {
    res.render('index.html');
});

// status routes below

router.post('/Tx/Status/post', function(req, res, next) {
   
    var status = new Status({
        username: req.body.username,
        date: req.body.date,
        title: req.body.title,
        text: req.body.title,
        valueAtTime: req.body.valueAtTime,
        sentAmount: req.body.sentAmount,
        bitcoinAddress: req.body.bitcoinAddress,
        receivingAddress: req.body.receivingAddress,
        lat: req.body.lat,
        long: req.body.long,
    });
    console.log(status);
    status.save(function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: 'Error while saving data!'
            });
        }
        console.log("SUCCESS");
        console.log(result);
        res.status(201).json({
            message: 'Saved data successfully'
        });
    });
});

// Getting crypto profile from db
router.get('/login/profile/:username', function(req, res, next) {
    Profile.find(function(err, messages) {
        console.log(messages);
        if (err) {
            return res.status(500).json({
                message: 'Error while fetching data!'
            });
        }
        res.status(200).json({
            data: messages
        });
    });
});

// Middleware for authenication
var app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/authentication', authentication);

// Start Server: Listen on port 8080
app.listen(8080, () => {
    console.log('Listening on port 8080');
  });
// Middleware for authenication


// Patches below are for the Settings page
// Update Username
router.patch('/login/profile/user/:username', function (req, res) {
    console.log('PATCH request to homepage');
      var username = req.params.username;
      console.log(username);
    Products.update({username: username}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update About Me
router.patch('/login/profile/user/:aboutMe', function (req, res) {
    console.log('PATCH request to homepage');
      var aboutMe = req.params.aboutMe;
      console.log(aboutMe);
    Products.update({aboutMe: aboutMe}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update avatar
router.patch('/login/profile/user/:avatar', function (req, res) {
    console.log('PATCH request to homepage');
      var avatar = req.params.avatar;
      console.log(avatar);
    Products.update({avatar: avatar}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update Online status
router.patch('/login/profile/user/:isOnline', function (req, res) {
    console.log('PATCH request to homepage');
      var isOnline = req.params.isOnline;
      console.log(isOnline);
    Products.update({isOnline: isOnline}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

// Update bitcoin address
router.patch('/login/profile/user/:address', function (req, res) {
    console.log('PATCH request to homepage');
      var bitcoinAddress = req.params.bitcoinAddress;
      console.log(bitcoinAddress);
    Products.update({bitcoinAddress: bitcoinAddress}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });

  // Update bitcoin email
router.patch('/login/profile/user/:email', function (req, res) {
    console.log('PATCH request to homepage');
      var email= req.params.email;
      console.log(email);
    Products.update({email: email}, function(err, values) {
          if (!err) {
              res.json("okay");
          } else {
              res.write("fail");
          }
      });
  });
// Saving a new profile to mongo
router.post('/Register/Profile', function(req, res, next) {
    
     var profile = new Profile({
        username: req.body.username,
        aboutMe: req.body.aboutMe,
        avatar: req.body.avater,
        statusCount: req.body.statusCount,
        friendCount: req.body.friendCount,
        isOnline: req.body.isOnline,
        bitcoinAddress: req.body.bitcoinAddress,
        email: req.body.email,
        lat: req.body.lat,
        long: req.body.long
     });

     console.log(profile);
     profile.save(function(err, result) {
         if (err) {
             console.log("ERROR");
             return res.status(500).json({
                 message: 'Error while creating profile!'
             });
         }
         console.log("SUCCESS");
         console.log(result);
         res.status(201).json({
             message: 'Created profile successfully'
         });
     });
 });


/* Below are the calls to the blockchain API node,
run blockchain-wallet-service start --port 4000 to start this apps
node. We run it on port 4000 cause our app is already is using 3000
*/

// The call for creating the a new wallet, this can be linked to the registration page
router.post('http://localhost:4000/api/v2/create?password=:pass&email=:emailAddress&label=:username$api_code=' + apiCode, function (req, res) {
    console.log(req.body); 
    if (err) {
        return res.status(500).json({
            message: 'Error while fetching data!'
        });
    }
    res.status(200).json({
        data: wallet
    });
});

/*
router.get('/http://localhost:4000', function(req, res, next){
    console.log('Get request for all users');
    Profile.find({})
    .exec(function(err, profile){
        if(err){
            res.send("Error retrieving users");
        }else{
            res.json(profile);
        }
    })
}); */

router.patch('/URL/PATCH', function (req, res) {
    // Patch Something..
});

router.post('/URL/POST', function(req, res, next) {
    // Post Something
});

router.put('/URL/PUT', function (req, res) {
   // Put Something
});

router.delete('/URL/DELETE', function (req, res) {
    // Delete Something
});


module.exports = router;