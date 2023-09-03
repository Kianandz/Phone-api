const db = require("../db");

const GetAllPhoneRandom = (req, res) => {
  const query = "SELECT * FROM phone ORDER BY RAND()";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};

module.exports = GetAllPhoneRandom;