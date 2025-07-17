const fs = require("fs")
let users=[
    {
        id:1,
        name:"priyanshu",
        age:"20"
    },
    {
        id:2,
        name:"vansh",
        age:"19"
    }
]
fs.writeFile("..//users2.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err)
        console.log("sucess");
})