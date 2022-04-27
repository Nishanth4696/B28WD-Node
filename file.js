const fs = require("fs");


// fs.readFile("./welcome.txt",'utf-8' ,(err, data) => {
//     console.log(data);
// });

// const quote = "No beaty shines brghter than that a good heart";
// fs.writeFile("./welcome.txt2", quote, err => {
//     console.log("completed writing!!!!");
// });


const quote = "No beaty shines brghter than that a good heart";

function createQuotes(noOfFiles, quote){
for (let i = 1; i <= noOfFiles; i++) {
   
    fs.writeFile(`./ackup/welcome${i}.txt`, quote, (err) => {
        console.log("completed writing!!!!");
        
    });
    }
}

const [, ,noOfFiles] = process.argv 
createQuotes(noOfFiles, quote);


fs.unlink('./ackup');
