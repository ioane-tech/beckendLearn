

const path = require("path")

const halfPath= path.join("/content","first.txt")

console.log(halfPath)


const fullPath1=path.join("content","first.txt")
const fullPat2=path.resolve(__dirname,"content","first.txt")

console.log(fullPat2)

module.exports = path