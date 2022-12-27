const mongoose= require('mongoose')

const schema= new mongoose.Schema({
  'displayName':{type: String},
  'email_id':{type: String}, 
  'mobile_no':{type: Number, unique:true}, 
  'password':{type: String}  
})

module.exports= mongoose.model('users', schema)