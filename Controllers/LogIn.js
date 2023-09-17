const db = require("../db");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

const LogIn = (req, res) => {
  const { uname, pass } = req.body;
  const query = "SELECT * FROM users WHERE uname = ? AND pass = ?";
  db.query(query, [uname, pass], (err, results) => {
    if (err) {
      console.error("Error executing : ", err);
      res.status(500).json({ success: false, message: "Server Error" });
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ userId: user.id }, secretKey, {
        expiresIn: "24h",
      });
      res.json({
        success: true,
        message: "Login Success",
        token,
        userId: user.id,
        userName: user.uname,
        nameUser: user.name,
        role: user.role,
      });
    } else {
      res.status(401).json({ success: false, message: "Login Failed" });
    }
  });
};

module.exports = LogIn;
