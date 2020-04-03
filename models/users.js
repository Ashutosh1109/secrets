
const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate')
const userSchema= new mongoose.Schema({
  email:{
    type:String,
  },
  password:{
    type:String,

  },
  googleId:String,
  displayName:String,
  secrets:String

});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
User=new mongoose.model('user',userSchema);

module.exports=Object.freeze({
userSchema:userSchema,
User:User
});
