const db = require("../db");

const GetBrandsWithPhoneCount = (req, res) => {
  const query = `
    SELECT brands, COUNT(*) AS phoneCount
    FROM phone
    GROUP BY brands
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching brands:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};

module.exports = GetBrandsWithPhoneCount;
