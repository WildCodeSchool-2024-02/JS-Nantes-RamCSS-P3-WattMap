const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
// const Cookies = require('cookies');
const tables = require("../../database/tables");


const verifyPassword = async (password, hashedPassword) => {
    try {
      return await argon2.verify(hashedPassword, password);
    } catch (err) {
      console.error(err);
      return false;
    }
  };

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.email);

    if (!user) {
      res.sendStatus(401);
      return;
    }

    const isPasswordVerified = await verifyPassword(
      req.body.password,
      user.password
    );
    if (!isPasswordVerified) {
      res.sendStatus(401);
      return;
    }

    const payload = { sub: user.id };
    const token = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1h",
    });

    delete user.password;

    if (token) res.status(200).send({ token, user });
    else throw new Error("Token not created");
  } catch (err) {
    next(err);
  }
};


module.exports = {
  login,
};
