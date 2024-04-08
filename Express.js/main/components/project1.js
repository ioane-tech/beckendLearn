import bodyParser from "body-parser";
import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";

const app = express()
const port =3000

const __dirname =dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/public/project1.html");
})
app.post("/submit",(req,res)=>{

    if(req.body.password=="ILovePrograming"){
        res.sendFile(__dirname+"/public/project1SecretFolder.html");
    }
    else{
        res.sendFile(__dirname+"/public/project1.html");
    }
    
 })


app.listen(port,()=>{
    console.log(`page ran on port ${port}`);
})


