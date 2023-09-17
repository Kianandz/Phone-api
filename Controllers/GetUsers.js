const db = require("../db");

const GetUsers = (req, res) => {
  const query = "SELECT id, uname, name, role FROM users";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};

module.exports = GetUsers;