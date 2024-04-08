import bodyParser from "body-parser";
import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";

const __dirname =dirname(fileURLToPath(import.meta.url))

const app=express();
const port=3000;


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})
app.post("/submit",(req,res)=>{
    console.log(req.body)
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
})


// app.get("/",(req,res)=>{
//     res.send
//     (
//         `<h1>Hello, world!</h1>
//         <p><a href='/about'>got to About page</a></p>
//         <p><a href='/contact'>got to Contact page</a></p>
//         `
//     )
// })
// app.get("/about",(req,res)=>{
//     res.send
//     (
//         `<h1>This is About page</h1>
//         <p><a href='/'>got back to Home page</a></p>
//         <p><a href='/contact'>got to Contact page</a></p>
//         `
//     )
// })
// app.get("/contact",(req,res)=>{
//     res.send
//     (
//         `<h1>This is Contact page</h1>
//          <p><a href='/about'>got to About page</a></p>
//          <p><a href='/'>got back to Home page</a></p>
//         `
//     )
// })