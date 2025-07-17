const fs = require("fs")
let users=[
    {
        id:1,
        name:"love",
        age:"20"
    },
    {
        id:2,
        name:"kush",
        age:"19"
    }
]
fs.writeFile("..//users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err)
        console.log("sucess");
})