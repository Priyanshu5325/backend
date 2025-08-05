const express = require("express");
const app=express();
app.use(express.static(__dirname+"/static"))
app.use(express.urlencoded({extended: true}))
// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "../html.html"));
// })
app.post("/addUser",(req,res) => {
    console.log(req.body)
    let username=req.body.username;
    let password=req.body.password;
    res.json({
        username,
        password
    })
})

app.listen(3000, () => {
    console.log("Server is started on port",3000);
});