let readJson = require("./readJson")
let userInput = process.argv[2]; 


readJson.readCountry("countries.json", function(data){
	  for(let i=0; i<data.length; i++){
      if(data[i].name == userInput){
        console.log(`Country: ${data[i].name}`)
        console.log(`Top Level Domain: ${data[i].topLevelDomain}`)
      }
    } 
})

