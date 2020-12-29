const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ensureCorrectUser, ensureLoggedIn } = require("../middleware/auth");

router.get("", async (req, res, next) => {
  // Showing all users
  try {
    const userData = await db.query("SELECT id, username FROM users");
    return res.json(userData.rows);
  } catch (e) {
    return next(e);
  }
});

router.post("", async (req, res, next) => {
  // Adding a new user
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = await db.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username",
      [req.body.username, hashedPassword]
    );
    return res.json(userData.rows[0]);
  } catch (err) {
    return next(err);
  }
});

router.post("/auth", async (req, res, next) => {
  try {
    // Checking if the username exists in the database
    const userData = await db.query("SELECT * FROM users WHERE username=$1", [
      req.body.username,
    ]);
    if (userData.rows.length > 0) {
      // If so, checking if the password matches
      const match = await bcrypt.compare(
        req.body.password,
        userData.rows[0].password
      );
      if (match) {
        const token = jwt.sign(
          {
            user_id: userData.rows[0].id,
            hello: "World!",
          },
          "SECRET_KEY"
        );
        return res.json({ token });
      } else {
        return res.json({ message: "Password is invalid!" });
      }
    } else {
      // If not, return res.json({message: Username is invalid})
      return res.json({ message: "Username is invalid!" });
    }
  } catch (err) {
    return next(err);
  }
});

router.post("/secret", ensureLoggedIn, (req, res, next) => {
  return res.json({ message: "Nice work!" });
});

router.post("/protected", ensureLoggedIn, (req, res, next) => {
  return res.json({ message: "Good job!" });
});

router.post("/secure/:id", ensureCorrectUser, (req, res, next) => {
  return res.json({ message: "Nice work!" });
});

router.post("/verysecure/:id", ensureCorrectUser, (req, res, next) => {
  return res.json({ message: "Authorized successfully." });
});

module.exports = router;
