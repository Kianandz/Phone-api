const db = require("../db");

const GetPhonePagination = (req, res) => {
  const page = req.query.page || 1; // Halaman yang diminta
  const itemsPerPage = 2; // Jumlah item per halaman
  const startIndex = (page - 1) * itemsPerPage;

  const query = `
    SELECT * FROM phone
    LIMIT ${startIndex}, ${itemsPerPage}
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching phones:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};

module.exports = GetPhonePagination;
