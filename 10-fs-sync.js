//time 1:04:38 - 1:10:46
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

//README
/*
writeFileSync it write or overwrite a file into any directory
*/
