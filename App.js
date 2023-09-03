const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 3001;
const ApiRoutes = require("./Routes/ApiRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", ApiRoutes);

app.use(
  "/api/phoneImage",
  express.static(path.join(__dirname, "./phoneImage"))
);

app.get("/api", (req, res) => {
  res.send("Api ready to use!");
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
