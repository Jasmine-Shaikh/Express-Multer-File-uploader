const express = require("express");
const app = express();
const port = process.env.port || 8000;
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("avatar");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/profile", upload, function (req, res) {
  res.send("File uploaded sucessfully!");
});

app.listen(port, () => {
  console.log("SERVER RUNING AT", port);
});
