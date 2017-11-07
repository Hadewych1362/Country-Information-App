const fs = require("fs")
let readJson = require("./readJson")
let userInput = process.argv[2]; 

function readCountry(country){
  fs.readFile('countries.json', function(err, data){
    if(err){
       console.log(err)
    } 
  let text = JSON.parse(data)
    for(let i=0; i<text.length; i++){
      if(text[i].name == userInput){
        console.log(`Country: ${text[i].name}`)
        console.log(`Top Level Domain: ${text[i].topLevelDomain}`)
      }
    } 

  })
}


readCountry(userInput)