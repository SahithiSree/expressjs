const mongoose=require('mongoose')
const db=require('../db')
const userSchema = new mongoose.Schema({
    name: String,
    college :String,
    password : String
  });
  const User = db.model('User', userSchema);
const createUser=(user)=>{
    const dbuser = new User(user);
    return dbuser.save()
    

}
const findUser=(name,password)=>{
    return User.findOne({name,password}).exec()
 
}
module.exports={createUser,findUser}
