var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan=require('morgan');
var mongoose=require('mongoose');
var passport=require('passport');
var config=require('./config/database.js');

mongoose.connect(config.db,{
  useNewUrlParser:true
})
mongoose.Promise=global.Promise;
require('./config/passport.js')(passport);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(morgan('dev'));
// parse application/json
app.use(passport.initialize());
app.use(passport.session());

// var users = [{ username: "user1", password: "user1" }];
// var blacklist = [];
require('./routes/router')(app,passport);
// app.post("/api/register",(req,res)=>{
//   let data=req.body;
//   let username=data.username;
//   let password=data.password;
//   user={username:username,password:password}
//   console.log(user);
//   users.push(user);
//   jwt.sign({user},'secretkey',(err,token)=>{
//     if(err)
//     {
//       res.status(401).send({auth:false,token:null})
//     }
//     else{
//     res.status(200).send({auth:true,token:token})
//   }
//   })
// })
// app.post("/api/login", (req, res) => {
//   let data = req.body;
//   let username = data.username;
//   let password = data.password;
//   var user = users.find(
//     u => u.username === username && u.password === password
//   );
//   if (user) {
//     jwt.sign({ user }, "secretkey", (err, token) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         res.status(200).send({auth:true,token:token});
//       }
//     });
//   }
//   else
//   {
//     res.status(401).send({auth:false,token:null});
//   }
// });

// app.use((req, res, next) => {
//   const bearerHeader = req.headers["authorization"];
//   console.log(bearerHeader);
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     jwt.verify(req.token, "secretkey", err => {
//       if (err) {
//         res.sendStatus(403);
//       } else next();
//     });
//   } else {
//     res.sendStatus(403);
//   }
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Hello JWT in Web API" });
// });

// app.get("/api/user", (req, res) => {
//   res.json(user);
// });
// app.post("/api/logout", (req, res) => {
//   console.log(req.body);
//   res.end();
// });
app.listen(3000, () => {
  console.log("server listen port 3000");
});
