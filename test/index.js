var test = require("tape")

var nodeEnv = require("../index")

test("node-env is a string", function (assert) {
    assert.equal(typeof nodeEnv, "string")
    assert.end()
})
