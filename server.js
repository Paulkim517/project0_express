// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

//tell app to use express
app.use(express.static(__dirname + '/public'));    

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});


//////////
//read new users
// app.get("/users", function (req, res) {
//   res.json(users);
// });

// //create a new post/user
// app.post("/users", function (req, res) {
//   var newUser = req.body;
//   user.push(newUser)
//   res.json(newUser)

// });

// //update an existing user
// app.put("/users/:id", function (req,res){
// 		//set the value of the id
// 		var userId = parseInt(req.params.id);
// 		//find item in 'user' array matchng the id
// 		var targetUser = _.findWhere(users, {id:userId})
// 		//update the username,firstname,lastname,age
// 	  targetUser.username = req.body.username;
// 		//update the firstname
// 		targetUser.firstname = req.body.firstname;
// 		//update the lastname
// 		targetUser.lastname = req.body.lastname;
// 		//update the age
// 		targetUser.age = req.body.age;
// 		//send back edited object
// 		res.json(targetUser)

// });

// //delete an existing user
// app.delete("/users/:id", function (req,res){
// 	// set the value of the id
//   var userId = parseInt(req.params.id);
//   // find item in `phrases` array matching the id
//   var targetUser = _.findWhere(users, {id:userId});
//   // get the index of the found item
//   var userIndex = users.indexOf(targetUser);
//   // remove the item at that index, only remove 1 item
//   users.splice(userIndex, 1);
//   // send back deleted object
//   res.json(targetUser)
// });
