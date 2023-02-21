const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userWithEmail = await User.findOne({ email }).catch((err) => {
    throw new Error(err);
  });

  if (!userWithEmail) {
    return res.status(400).json({ message: "Email or Pasword do not match!" });
  }

  if (userWithEmail.password !== password) {
    return res
      .status(400)
      .json({ message: "Email or Password does not match" });
  }

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );

  res
    .cookie("jwt", jwtToken, {
      httpOnly: true, //true stops browser to access cookie
      secure: false, //--> SET TO TRUE ON PRODUCTION
    })
    .status(200)
    .json({
      message: "You have logged in :D",
      token: jwtToken,
    });
  //   res
  //     .cookie("token", jwtToken)
  //     .status(200)
  //     .json({ message: "Welcome", token: jwtToken });
});

module.exports = router;
