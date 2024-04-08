import express from "express"
import bodyParser from "body-parser";

const app=express();
const port=3000;

const date=new Date()
const currentDay=date.getDay()

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{
        weekDay:'week day',
        advice:'advice',
    })
})

app.listen(port,()=>{
    console.log(`app ran on port ${port}`)
})