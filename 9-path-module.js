//time 1:04:38 - 1:10:46
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

//README
/*
path.resolve is very important cause it returns absolute path.
*/
