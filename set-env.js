//import { writeFile } from 'fs';
const fs = require('fs');
// Configure Angular `environment.ts` file path
const targetPathDev = './src/environments/environment.ts';
const targetPathProd = './src/environments/environment.prod.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();
const args = process.argv.slice(2);
console.log("Args", args);


function getConfig(data, production = false) {

    // `environment.ts` file structure
    return `export const environment = {

APPLICATION:'${data.title}',
API_URL: '${data.API_URL}',
COURSETRACKER_API_URL: '${data.COURSETRACKER_API_URL}',
production: ${production},
org:'${data.org}',
logoUrl:'${data.logoUrl}'
};
`;
}


const org = args[0];
fs.readFile("./" + org + ".json", "utf8", (err, data) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    const config = JSON.parse(data);
    console.log("File data:", config);


    const contentDev = getConfig(config, false);
    const contentProd = getConfig(config, true);
    console.log(contentDev);
    console.log(contentProd);
    writeFile(targetPathDev, contentDev);
    writeFile(targetPathProd, contentProd);


});


function writeFile(fileName, content) {
    fs.writeFile(fileName, content, function(err) {
        if (err) {
            throw console.error(err);
        } else {
            console.log(colors.magenta(`Angular environment file generated correctly at ${fileName} \n`));
        }
    });
}