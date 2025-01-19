import inquirer from "inquirer";
import * as qrImage from "qr-image";
import * as fs from "fs";

let url = "";

const getValidURL = async () => {
  try {
    const answers = await inquirer.prompt([
      { name: "url", type: "input", message: "Enter the URL:" },
    ]);

    if (!answers.url.includes("www") || !answers.url.includes("com")) {
      console.log("Kindly enter a valid URL!!!");
    } else {
      url = answers.url;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

while (!url) {
  await getValidURL();
}

const qr_svg = qrImage.image(url, { type: "png" });
qr_svg.pipe(fs.createWriteStream("./QR/QR_Image.png"));

fs.writeFile("./QR/readme.txt", url, (err) => {
  if (err) throw err;
});

console.log("QR image generated successfully!!!, check the QR Folder");
