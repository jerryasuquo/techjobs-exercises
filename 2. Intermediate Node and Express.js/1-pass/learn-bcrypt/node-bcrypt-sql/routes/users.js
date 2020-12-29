const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const SECRET = "NEVER EVER MAKE THIS PUBLIC IN PRODUCTION";

// helpful middleware to make sure the user is logged in
function ensureLoggedIn(req, res, next) {
  try {
    const authHeaderValue = req.headers.authorization;
    let token;
    try {
      token = jsonwebtoken.verify(authHeaderValue, SECRET);
    } catch (e) {
      e.message = "Not logged in";
      throw e;
    }
    if (token.username === req.params.username) {
      req.token = token;
      return next();
    } else {
      const err = new Error("Unauthorized to access these details");
      err.status = 403;
      throw err;
    }
  } catch (e) {
    return res.status(e.status || 401).json({ message: e.message });
  }
}

router.get("/", async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM users");
    return res.json(result.rows);
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const existingUser = await db.query(
      "SELECT * FROM users WHERE username=$1 LIMIT 1",
      [req.body.username]
    );
    if (existingUser.rows.length === 1) {
      return res.json({ message: "Username already exists" });
    }
    const result = await db.query(
      "INSERT INTO users (username, password) VALUES ($1,$2) RETURNING *",
      [req.body.username, hashedPassword]
    );
    return res.json(result.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    // try to find the user first
    const foundUser = await db.query(
      "SELECT * FROM users WHERE username=$1 LIMIT 1",
      [req.body.username]
    );
    if (foundUser.rows.length === 0) {
      return res.json({ message: "Username does not exist" });
    }
    // if the user exists, let's compare their hashed password to a new hash from req.body.password
    const hashedPassword = await bcrypt.compare(
      req.body.password,
      foundUser.rows[0].password
    );
    // bcrypt.compare returns a boolean to us, if it is false the passwords did not match!
    if (hashedPassword === false) {
      return res.json({ message: "Invalid Password" });
    }

    // let's create a token using the sign() method
    const token = jsonwebtoken.sign(
      // the first parameter is an object which will become the payload of the token
      { username: foundUser.rows[0].username },
      // the second parameter is the secret key we are using to "sign" or encrypt the token
      SECRET,
      // the third parameter is an object where we can specify certain properties of the token
      {
        expiresIn: 60 * 60, // expire in one hour
      }
    );
    // send back an object with the key of token and the value of the token variable defined above
    return res.json({ token });
  } catch (e) {
    return res.json(e);
  }
});

router.get("/typicalProtectedRoute/:username", ensureLoggedIn, async function (
  req,
  res,
  next
) {
  try {
    // if so - awesome!
    // Make a sql query that would need some of the payload from decrypted token object
    return res.json({ message: "You made it!", token: req.token });
  } catch (e) {
    // otherwise send back a status code of 401 (Unauthorized) with a message
    return next(e);
  }
});

module.exports = router;
