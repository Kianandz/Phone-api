const db = require("../db");

const PostPhone = (req, res) => {
  const { name, brands, phone_image } = req.body;
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
        res.status(201).send("Data telah berhasil ditambahkan");
      }
    }
  );
};

module.exports = PostPhone;
