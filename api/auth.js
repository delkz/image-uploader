const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    urlEndpoint: process.env.REACT_APP_URL_END_POINT,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
    privateKey: process.env.REACT_APP_PRIVATE_KEY,
});

module.exports = (req, res) => {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
};