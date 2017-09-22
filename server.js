const express = require("express");
const path = require("path");
const app = express();

app.use("/js", express.static(path.join(__dirname + "/js")));
app.use("/html", express.static(path.join(__dirname + "/html")));
app.use("/css", express.static(path.join(__dirname + "/css")));
app.use("/lib", express.static(path.join(__dirname + "/lib")));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(9999, function(){
    console.log("server listening on port 9999");
});