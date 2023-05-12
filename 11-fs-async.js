//time1:19:00 -
const { readFile, writeFile } = require("fs");
readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/subfolder/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");

//README
/*
writeFileSync it write or overwrite a file into any directory
In Async you need to run a call back

*/
