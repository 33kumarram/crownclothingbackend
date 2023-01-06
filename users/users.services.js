const db = require("../helpers/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  CreateNewUser,
  signIn,
};

async function CreateNewUser(params) {
  let user = new db.Users(params);
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(params.password, salt);
  await user.save();
  return user;
}
async function signIn(params) {
  let user = await db.Users.findOne({ mobile_no: params.mobile_no });
  const isMatch= await bcrypt.compare(params.password,user.password)
  if(!isMatch){
    throw 'Incorrect password'
  }

  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

  return {token,
    user:{
      id:user._id,
      mobile_no:user.mobile_no,
      displayName:user.displayName,
      email_id:user.email_id
    }
  }
}
