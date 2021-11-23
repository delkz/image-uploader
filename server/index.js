const express = require("express");
const app = express();
const ImageKit = require("imagekit");
require("dotenv").config({ path: "../.env" });

const imagekit = new ImageKit({
    urlEndpoint: process.env.REACT_APP_URL_END_POINT,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
    privateKey: process.env.REACT_APP_PRIVATE_KEY,
});

// allow cross-origin requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/auth", function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(3001, function () {
  console.log("Live at Port 3001");
});
