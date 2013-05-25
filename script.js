var NODE_ENV = require("./index")

module.exports = envScript

function envScript() {
    return "window.NODE_ENV = " + JSON.stringify(NODE_ENV)
}
