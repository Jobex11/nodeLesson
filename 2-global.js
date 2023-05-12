//GLOBALS - NO WINDOW !!!

// _dirname - path to current directory
// _filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where th program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
