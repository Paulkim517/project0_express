// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

//tell app to use express
app.use(express.static(__dirname + '/public'));    

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));


// read new users
app.get("/users", function (req, res) {
  res.json(users);
});

//create a new post/user
app.post("/users", function (req, res) {
  var newUser = req.body;
  user.push(newUser)
  res.json(newUser)

});


// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});



