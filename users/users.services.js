const db = require("../helpers/db");

module.exports = {
  CreateNewUser,
  signIn,
};

async function CreateNewUser(params) {
  let user = new db.Users(params);
  await user.save();
  return user;
}
async function signIn(params) {
  let user = await db.Users.find({ mobile_no: params.mobile_no });
  console.log(user[0].password,params.password)
  if (user&&user[0].password === params.password) {
    console.log("i am running");
    let refreshToken = jwt.sign({
      sub: user.mobile_no,
      mobile_no: user.mobile_no,
    });
    return refreshToken;
  } else {
    throw "Invalid password or mobile number";
  }
}
