	//SETTING UP AN EXPRESS APP
	var express  = require('express');
    var app      = express();                               // create our app w/ express   
  
    //CONFIGURE EXPRESS
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
	
	//SETTING UP MONGO
	 var mongo = require('mongodb');                     
	 
	//DEFINE URL FOR CONNECTING TO YOUR MONGO DB	
	const url = 'mongodb://localhost/pizzadb';
	
	
	
	
	//DEFINE YOUR EXPRESS ROUTES IN THIS SECTION:
	//========

//'Get' operation for pizzas
app.get('/getPizzas', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db){
    
    var cursor = db.collection('pizzas').find();
    cursor.forEach(function(doc, err){    
      resultArray.push(doc);
    }, function(){
      db.close();
      console.log(resultArray);
      res.send(resultArray);
    });
  });
});

//'Get' operation for drinks
app.get('/getDrinks', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db){
    
    var cursor = db.collection('drinks').find();
    cursor.forEach(function(doc, err){    
      resultArray.push(doc);
    }, function(){
      db.close();
      console.log(resultArray);
      res.send(resultArray);
    });
  });
});

//END OF EXPRESS ROUTES SECTION
//=====================
	
	
	
	
	
	  //THIS MAKES SURE THAT WHEN YOU GO TO LOCALHOST:8080 IN BROWSER, IT LOADS THE RIGHT PAGE
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    //THIS CODE TELLS THE APP TO LISTEN ON PORT 8080, WHICH MEANS YOU CAN GO TO LOCALHOST:8080 IN BROWSER TO GET TO IT
    app.listen(8080);
    console.log("App listening on port 8080");
	