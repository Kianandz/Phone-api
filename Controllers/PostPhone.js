const db = require("../db");
const multer = require("multer");
const path = require("path");

// Konfigurasi multer untuk mengelola file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./ImageData"); // Menyimpan file di folder
  },
  filename: function (req, file, cb) {
    // Menyimpan file dengan nama yang unik 
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const PostPhone = (req, res) => {
  const {
    name,
    brands,
    phone_network,
    phone_sim,
    phone_sim_type,
    material,
    dimensions,
    weight,
    color,
    resolution,
    screen_size,
    technology,
    os,
    os_version,
    chipset,
    cpu,
    gpu,
    ram,
    storage,
    storage_type,
    main_camera,
    selfie_camera,
    nfc,
    usb,
    bluetooth,
    gps,
    wifi,
    battery,
    battery_type,
  } = req.body;
  const phone_image = req.file.filename; // Mengambil nama file dari req.file

  db.query(
    "INSERT INTO phone (name, brands, phone_image, phone_network, phone_sim, phone_sim_type, material, dimensions, weight, color, resolution, screen_size, technology, os, os_version, chipset, cpu, gpu, ram, storage, storage_type, main_camera, selfie_camera, nfc, usb, bluetooth, gps, wifi, battery, battery_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      brands,
      phone_image,
      phone_network,
      phone_sim,
      phone_sim_type,
      material,
      dimensions,
      weight,
      color,
      resolution,
      screen_size,
      technology,
      os,
      os_version,
      chipset,
      cpu,
      gpu,
      ram,
      storage,
      storage_type,
      main_camera,
      selfie_camera,
      nfc,
      usb,
      bluetooth,
      gps,
      wifi,
      battery,
      battery_type,
    ],
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

module.exports = { PostPhone, upload }; // Menyertakan upload middleware