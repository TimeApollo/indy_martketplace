const messages = require("./messages")
const { auth } = require("./auth")
const { artwork } = require("./artwork")
const { user } = require("./user")
const { artist } = require("./artist")

module.exports = {
  auth,
  messages,
  user,
  artwork,
  artist
}
