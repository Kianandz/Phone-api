const db = require("../db");

const UpdateView = (req, res) => {
  try {
    const { id } = req.params;

    // Periksa apakah id valid, misalnya, apakah id adalah angka bulat positif
    if (!parseInt(id)) {
      return res.status(400).json({ message: "ID tidak valid." });
    }

    // Ambil view_count saat ini dari database
    db.query(
      "SELECT view_count FROM phone WHERE id = ?",
      [id],
      (err, results) => {
        if (err) {
          console.error("Error:", err);
          return res.status(500).json({ message: "Terjadi kesalahan." });
        }

        if (results.length === 0) {
          return res.status(404).json({ message: "Item tidak ditemukan." });
        }

        const currentViewCount = results[0].view_count;

        // Tingkatkan view_count dengan 1
        const updatedViewCount = currentViewCount + 1;

        // Update view_count dalam database
        db.query(
          "UPDATE phone SET view_count = ? WHERE id = ?",
          [updatedViewCount, id],
          (err, results) => {
            if (err) {
              console.error("Error:", err);
              return res.status(500).json({ message: "Terjadi kesalahan." });
            }

            res.json({ message: "View count berhasil diupdate." });
          }
        );
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Terjadi kesalahan." });
  }
};

module.exports = UpdateView;
