const express = require("express");

const app = express();

app.get("/" , function(request,response){
    response.send("Harsh");
});

app.get("/contact" , function(request,response){
    response.send("harshvirat894@gmail.com");
});

app.listen(3000,function(){
    console.log("Server started at 3000");
});