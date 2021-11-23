// required parameter to fetch images
const urlEndpoint = process.env.REACT_APP_URL_END_POINT;
// optional parameters (needed for client-side upload)
const publicKey = process.env.REACT_APP_PUBLIC_KEY; 
const authenticationEndpoint = process.env.REACT_APP_AUTHENTICATION_ENDPOINT;
const imagekitId = process.env.REACT_APP_IMAGEKIT_ID;

export {urlEndpoint,publicKey,authenticationEndpoint,imagekitId}