const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.register = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    await User.create({
      username: req.body.username,
      password: hash,
      role: req.body.role || "user"
    });

    res.redirect("/login");
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(400).send("Registration failed. Username might already exist.");
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return res.status(401).send("User not found");

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) return res.status(401).send("Wrong password");

    const token = jwt.sign(
      { id: user._id, role: user.role, username: user.username },
      config.JWT_SECRET,
      { expiresIn: config.JWT_EXPIRES_IN }
    );

    res.cookie("token", token, config.COOKIE_OPTIONS);
    res.redirect("/articles");
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Login failed");
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};