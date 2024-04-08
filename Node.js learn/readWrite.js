const {readFileSync,writeFileSync, write}= require('fs')

const firstTextFile=readFileSync("./content/first.txt","utf8")
console.log(firstTextFile)

console.log("now we are creating new text file")

writeFileSync("./content/second.txt","hello, this is second text file.", {flag:'a'})

console.log("and now we console this second file")

const secontTextFile=readFileSync("./content/second.txt","utf8")
console.log(secontTextFile)



