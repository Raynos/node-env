if (typeof window !== "undefined") {
    module.exports = window.NODE_ENV
} else if (typeof process !== "undefined") {
    module.exports = process.env.NODE_ENV
}
