const db = require("../db");

const GetPhoneById = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM phone WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching phone:", err);
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

module.exports = GetPhoneById;
