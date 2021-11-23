const app = require("express")();
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    urlEndpoint: process.env.REACT_APP_URL_END_POINT,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
    privateKey: process.env.REACT_APP_PRIVATE_KEY,
});

// allow cross-origin requests
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/auth", function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});



module.exports = app;