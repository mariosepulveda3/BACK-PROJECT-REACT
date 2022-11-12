const User = require("../api/users/users.model");
const { verifyJwt } = require("../utils/jwt/jwt");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next("Unauthorized");
    }
    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyJwt(parsedToken);
    const userLogged = await User.findById(validToken.id);

    userLogged.password = null;
    req.user = userLogged;
    next();
  } catch (error) {
    return next("You cannot access");
  }
};

module.exports = { isAuth };
