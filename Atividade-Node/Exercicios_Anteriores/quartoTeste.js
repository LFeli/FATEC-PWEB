// Sincrono
const fs = require("fs");
const data = fs.readFileSync("arquivosTXT/cidade.txt");
console.log(data.toString());
