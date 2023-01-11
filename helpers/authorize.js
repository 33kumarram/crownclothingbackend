const jwt = require("jsonwebtoken");

function authorize (req, res, next){
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(401).json({ msg: "Please login to perform this task" });
    }

    isAuthorized = jwt.verify(token, process.env.JWT_SECRET);

    if (!isAuthorized) {
      return res.status(401).json({ msg: "Unauthorized user, Access Denied" });
    }
    next();

  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
};

module.exports = authorize
