//time1:19:00 -
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

writeFileSync(
  "./content/subfolder/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next");
//README
/*
writeFileSync it write or overwrite a file into any directory
In Async you need to run a call back

*/
