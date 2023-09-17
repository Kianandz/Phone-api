const db = require("../db");

const GetUsersById = (req, res) => {
  const id = req.params.id;
  const query = "SELECT id, uname, name FROM users WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "404 Not Found" });
      } else {
        res.json(results[0]);
      }
    }
  });
};

module.exports = GetUsersById;
