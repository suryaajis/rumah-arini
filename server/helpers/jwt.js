const jwt = require("jsonwebtoken")

const secretJWT = "passwordjwtyangamansekali"

const generateToken = (payload) => {
  return jwt.sign(payload, secretJWT)
}

const verifyToken = (token) => {
  return jwt.verify(token, secretJWT)
}

module.exports = {
  generateToken, 
  verifyToken
}