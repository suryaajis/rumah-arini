const bcrypt = require("bcrypt")

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

const comparePassword = (pass, hashPass) => {
  return bcrypt.compareSync(pass, hashPass)
}

module.exports = {
  hashPassword,
  comparePassword
}