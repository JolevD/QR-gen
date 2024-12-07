import inquirer from "inquirer"
import fs from "fs"
import qr from "qr-image"


inquirer.prompt([
    {
        message: "Enter URL",
        name: "URL"
    }
]).then((answer) => {
    const url = answer.URL
    const qr_img = qr.image(url, { type: "png" }) // default type is also png
    qr_img.pipe(fs.createWriteStream("qr-image.png"))

}).catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});