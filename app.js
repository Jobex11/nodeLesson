//time: 2:01:13
// npm - global command, comes with node
// npm --version

// local dependency- use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm instal -g <packagename>
//sudo install -g <packagename> (mac)

//package.json - manifest file (stores important info about project/package)
//manual  approach (create package.json n the root, create propterties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]]; //array of arrays
const newItems = _.flattenDeep(items);
console.log(newItems);
