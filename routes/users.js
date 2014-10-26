var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  	var user = req.query; 
  	console.log(user);
  	var fs = require('fs');
	var line = user.name+","+user.last+","+user.mail+"\n";
	fs.readFile("db.txt", function(err, data){
		if(err){
			console.log("Error File: "+err);
			console.log(line);
		}else{
		
			fs.writeFile("db.txt", data + line ,function(err){
				if(err){
					console.log("Error File: "+err);
					console.log(line);
				}

			});
		}
	});

	 
	

  	res.render('index', { err: "", title: 'Turnos, Facil y Rapido', send: ""});
});

module.exports = router;
