const express = require("express");
const router = express.Router();
const db = require("../db");
const multer = require("multer");
const path = require("path");
const GetAllPhone = require("../Controllers/GetAllPhone");
const GetPhoneById = require("../Controllers/GetPhoneById");
const GetPhonesByBrand = require("../Controllers/GetPhoneByBrands");
const SearchPhone = require("../Controllers/SearchPhone");
const GetBrandsWithPhoneCount = require("../Controllers/GetBrandsWithPhoneCount");
const GetAllPhoneRandom = require("../Controllers/GetAllPhoneRandom");
const GetPhonePagination = require("../Controllers/GetPhonePagination");
const PostPhone = require("../Controllers/PostPhone");

// Check DB Connection
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database");
  }
});

// Get All Phone
router.get("/allphone", GetAllPhone);

// Get All Phone Random
router.get("/allphone/random", GetAllPhoneRandom);

// Get Phone pagination
router.get("/phone", GetPhonePagination)

// Get Phone By id
router.get("/phone/:id", GetPhoneById);

// Get Brands with phoneCount
router.get("/brands", GetBrandsWithPhoneCount);

// Get phone by brands
router.get("/brands/:brands", GetPhonesByBrand)

// Search phone
router.get("/phones", SearchPhone);

// Post Phone
router.post("/postPhone", PostPhone);

// Save products from FrontEnd to Database
/*
const storage = multer.diskStorage({
  destination: "./imageProduct/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });
router.post("/saveProducts", upload.single("productImage"), saveProducts);
*/
module.exports = router;
