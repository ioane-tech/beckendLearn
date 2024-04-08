const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>Hello! This is my first http page</h1>")
    }
    if(req.url==="/about"){
        res.end(`<h1>This is about us page</h1>`)
    }
    res.end(`<h1>Oops! page doesnot exist</h1> <a href='/'>go back</a>`)
})


server.listen(3000)