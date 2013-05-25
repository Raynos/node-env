var window = require("global/window")
var process = require("process")

module.exports = process.env.NODE_ENV || window.NODE_ENV
