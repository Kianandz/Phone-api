const db = require("../db");

const GetPhonesByBrand = (req, res) => {
  const brands = req.params.brands;
  const query = "SELECT * FROM phone WHERE brands = ?";
  db.query(query, [brands], (err, results) => {
    if (err) {
      console.error("Error fetching phones:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
};

module.exports = GetPhonesByBrand;
