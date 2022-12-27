const mongoose = require("mongoose");
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.set('strictQuery', false);
mongoose.connect(process.env.connectionString);
mongoose.Promise = global.Promise;

module.exports={
    Users:require('../users/users.model')
}