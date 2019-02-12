var mongoose=require('mongoose');
var UsersSchema=new mongoose.Schema({
    uid:String,
    name:String,
    email:String,
    password:String,
    content:String,
    registerTime:{type:Date,default:Date.now}
});
var Users=mongoose.model('Users',UsersSchema);