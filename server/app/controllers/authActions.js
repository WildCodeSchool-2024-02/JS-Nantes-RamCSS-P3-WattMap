const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Cookies = require("cookies");
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

    // COOKIE credentials
    const cookie = new Cookies(req, res);
    cookie.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      expires: new Date(Date.now() + 4 * 60 * 60 * 1000),
    });

    res.status(200).send({ user });
  } catch (err) {
    next(err);
  }
};

// This function erases the content of 'token' in the cookie and sets its expiry date to now.
// which is the equivalent to log out
const logout = (req, res) => {
  const cookie = new Cookies(req, res);
  cookie.set("token", '', {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
    expires: new Date(Date.now()),
    path: '/',
  });
  res.status(200).send("Logged out successfully");
};

module.exports = {
  login,
  logout,
};
