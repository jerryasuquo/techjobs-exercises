function ensureCorrectUser(req, res, next) {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "SECRET_KEY");
    console.log(decodedToken);
    if (decodedToken.user_id === +req.params.id) {
      return next();
    } else {
      return res.json({
        message: "Unauthorized!",
      });
    }
  } catch (err) {
    return res.json({
      message: "Unauthorized!",
    });
  }
}

function ensureLoggedIn(req, res, next) {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "SECRET_KEY");
    return next();
  } catch (err) {
    return res.json({
      message: "Unauthorized!",
    });
  }
}

module.exports = { ensureCorrectUser, ensureLoggedIn };
