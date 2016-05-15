var express  = require("express"),
    path = require("path"),
    dotenv = require("dotenv");
    
dotenv.load();
    
var app = express();

//db setup

//middleware setup

//routes

app.get("/", function(req, res, next){
  //console.log(req.headers);
  return res.json({
    "ipaddress": req.headers["x-forwarded-for"],
    "language": req.headers["accept-language"].split(",")[0],
    "software" : /^.*?\((.*?)\).*$/.exec(req.headers["user-agent"])[1]
  });
});

app.listen(process.env.PORT || 8080, function(){
  console.log("express sevrver is listing on port " + process.env.PORT || 8080);
});