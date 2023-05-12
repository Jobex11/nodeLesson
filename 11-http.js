//time: 1:34:32
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Job is 22yrs old and would be full stack by 23yrs");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
/*
req-> requeest which is client
res-> which is form server
*/
