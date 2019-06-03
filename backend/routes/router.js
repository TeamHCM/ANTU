// var passport=requrie('../node_modules/passport');
var jwt=require('jsonwebtoken');
var User=require('../model/User');
var config=require('../config/database');
module.exports=(app,passport)=>{
    app.get("/",(req,res)=>{
        res.send('Wellcome Json Web Token vs Passport')
      })
      app.post("/signup",(req,res)=>{
          var newUser=new User({
              email:req.body.email,
              password:req.body.password
          })
          User.createUser(newUser,(err,user)=>{
              if(err) res.json({success:false,message:'User is not register'});
              else res.json({success:true,message:"User is success register"});
          });
      })
}