const fs=require("fs")

fs.writeFile("messageWrite.txt","hello i wrote in this",(err)=>{
    if(err) throw err;
    console.log("text flie created")
})
fs.readFile("./messageWrite.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data)
    console.log("you read the file")
})