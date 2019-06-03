var mongo=require('mongoose');
var config=require('../config/database.js');
var bcyrt=require('bcryptjs')
 
var UserSchema=new mongo.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})
var User=module.exports=mongo.model('User',UserSchema);

module.exports.getUserByID=(id,cb)=>{
    User.findById(id,cb);
}
module.exports.getUserByEmail=(email,cb)=>{
    User.findOne({email:email},cb);
}
module.exports.createUser=(newUser,cb)=>{
    bcyrt.genSalt(10,(err,salt)=>{
        bcyrt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash
            newUser.save(cb);
        })
    })
}
module.exports.comparePasswrod=(myPassword,cb)=>{
    bcyrt.compare(myPassword,hash,(err,isMatch)=>{
        if(err) throw err;
        cb(null,isMatch);
    })
}