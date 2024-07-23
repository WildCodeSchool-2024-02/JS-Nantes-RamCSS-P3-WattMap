const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const Cookies = require("cookies");
// Import access to database tables
const tables = require("../../database/tables");

// this middleware verifies that the email "looks" like an email.
const verifyEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).send("Email is required");
    }

    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      next();
    } else {
      res.status(400).send("Email is not valid");
    }
  } catch (err) {
    next(err);
  }
};

// this middleware verifies that the password chosen by the user is strong enough
const verifyPassword = (req, res, next) => {
  try {
    const { password } = req.body;

    if (!password) {
      res.status(400).send("Password is required");
    }

    // constraints imposed on the password
    const minLength = 12;
    const containsLowerCase = /[a-z]/.test(password);
    const containsUpperCase = /[A-Z]/.test(password);
    const containsDigit = /[0-9]/.test(password);
    const containsSpecial = /[^a-zA-Z0-9]/.test(password);

    if (
      password.length >= minLength &&
      containsUpperCase &&
      containsLowerCase &&
      containsDigit &&
      containsSpecial
    ) {
      next();
    } else {
      res.status(400).send("Password is too weak");
    }
  } catch (err) {
    next(err);
  }
};

// Options de hachage (voir documentation : https://github.com/ranisalt/node-argon2/wiki/Options)
// Recommandations **minimales** de l'OWASP : https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;

    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);

    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
    req.body.hashedPassword = hashedPassword;

    // Suppression du mot de passe non haché de la requête par mesure de sécurité
    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

// This middleware checks for the validity of JWT inside the header of the request.
// Authorization = ${JsonWebToken}

const verifyToken = (req, res, next) => {
  try {
    // Check that resquest has authorization header
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    // Check that the header resembles "Bearer <token>"
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    // Check that token is valid, otherwise respond 401
    req.auth = jwt.verify(token, process.env.APP_SECRET);

    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

// This method checks for validity of a JWT contained in a cookie
// the parameter req.user.sub contains the user id from the database

const verifyCookie = (req, res, next) => {
  const cookies = new Cookies(req, res);
  const token = cookies.get("token");

  if (!token) {
    res.status(401).send("Access denied. No token provided.");
  }

  try {
    // decypher jwt and add its contents to request
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
};

// this middleware needs to be preceded by verifyCookie as it relies on the property req.user
const verifyAdmin = async (req, res, next) => {
  // read the user in the database from the id contained inside of the cookie (the sub of the JWT)
  const user = await tables.user.readById(req.user.sub);

  // this acts as an authentication wall, but for admin rights
  if (user.isAdmin) {
    next();
  } else {
    res.status(401).send("You don't have sufficient rights.");
  }
};

module.exports = {
  verifyEmail,
  verifyPassword,
  hashPassword,
  hashingOptions,
  verifyToken,
  verifyCookie,
  verifyAdmin,
};
