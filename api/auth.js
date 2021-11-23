const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
    return await fn(req, res)
}
  
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    urlEndpoint: process.env.REACT_APP_URL_END_POINT,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
    privateKey: process.env.REACT_APP_PRIVATE_KEY,
});

const handler = (req, res) => {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
}
  
module.exports = allowCors(handler)