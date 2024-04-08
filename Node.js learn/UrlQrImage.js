import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    {
        message:"Type in you website URL: ",
        name:"YourURL"
    }
  ])
  .then((answers) => {
    const url=answers.YourURL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('your_webSite_qrCode.png'));

    fs.writeFile("your_webSite_URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("webSite URL textFile created")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });