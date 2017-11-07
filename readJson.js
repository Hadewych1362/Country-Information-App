const fs = require("fs")

module.exports = {
	readCountry: function(fileName, callback){
	  fs.readFile(fileName, function(err, data){
	  	if(err){
	  		throw err;
	  	} else {
	  		let text = JSON.parse(data)
	  		callback(text)
	  	}
      }
    )}
}
    

