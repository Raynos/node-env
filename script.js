var NODE_ENV = require("./index")

module.exports = envScript

function envScript() {
    return ";(function () {" +
        "    window.NODE_ENV = '" + JSON.stringify(NODE_ENV) + "'" +
        "}());"
}
