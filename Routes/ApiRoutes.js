const express = require("express");
const router = express.Router();
const db = require("../db");
const GetAllPhone = require("../Controllers/GetAllPhone");
const GetPhoneById = require("../Controllers/GetPhoneById");
const GetPhonesByBrand = require("../Controllers/GetPhoneByBrands");
const SearchPhone = require("../Controllers/SearchPhone");
const GetBrandsWithPhoneCount = require("../Controllers/GetBrandsWithPhoneCount");
const GetAllPhoneRandom = require("../Controllers/GetAllPhoneRandom");
const GetPhonePagination = require("../Controllers/GetPhonePagination");
const { PostPhone, upload } = require("../Controllers/PostPhone");
const GetUsers = require("../Controllers/GetUsers");
const LogIn = require("../Controllers/LogIn");
const GetUsersById = require("../Controllers/GetUsersById");
const UpdateView = require("../Controllers/UpdateView");
const { UpdatePhone, update } = require("../Controllers/Update");
const Delete = require("../Controllers/Delete");

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

// Get Users
router.get("/users", GetUsers);

// Get Users By ID
router.get("/users/:id", GetUsersById);

// Get All Phone Random
router.get("/allphone/random", GetAllPhoneRandom);

// Get Phone pagination
router.get("/phone", GetPhonePagination);

// Get Phone By id
router.get("/phone/:id", GetPhoneById);

// Get Brands with phoneCount
router.get("/brands", GetBrandsWithPhoneCount);

// Get phone by brands
router.get("/brands/:brands", GetPhonesByBrand);

// Search phone
router.get("/phones", SearchPhone);

// LogIn Users
router.post("/login", LogIn);

// Upload Data
router.post("/postPhone", upload.single("phone_image"), PostPhone);

// Update Data 
router.put("/updatePhone/:id", update.single("phone_image"), UpdatePhone);

// Update View Count
router.post("/update-view-count/:id", UpdateView);

router.delete("/delPhone/:id", Delete)

module.exports = router;