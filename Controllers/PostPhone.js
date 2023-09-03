const db = require("../db");

const PostPhone = (req, res) => {
  const { name, brands, phone_image } = req.body;

  // Memasukkan data baru ke dalam tabel "brands"
  db.query(
    "INSERT INTO phone (name, brands, phone_image) VALUES (?, ?, ?)",
    [name, brands, phone_image],
    (error, results) => {
      if (error) {
        console.error("Error menambahkan data ke database: ", error);
        res
          .status(500)
          .send("Terjadi kesalahan dalam menambahkan data ke database");
      } else {
        // Mengirim respons bahwa data telah berhasil ditambahkan
        res.status(201).send("Data telah berhasil ditambahkan");
      }
    }
  );
};

module.exports = PostPhone;
