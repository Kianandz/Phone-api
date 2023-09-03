const db = require("../db");

const SearchPhone = (req, res) => {
  const searchQuery = req.query.search;
  const query = "SELECT * FROM phone WHERE name LIKE ? OR brands LIKE ?";
  const searchValue = `%${searchQuery}%`; // Nilai pencarian yang akan dicocokkan dengan baik kolom "name" maupun "brands"

  db.query(query, [searchValue, searchValue], (err, results) => {
    if (err) {
      console.error("Error searching phones:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};

module.exports = SearchPhone;
