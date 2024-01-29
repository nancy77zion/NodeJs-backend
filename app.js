//Node.js is a JavaScript runtime environment. It is an environment developed to make it possible to use JavaScript code for server-side scripting.

const http = require('http');
const userActive = require('./adduser');
const URL = require('url');
const retrieveFile = require('../backend/fs-file/dataSource.json');
//const cors = require('cors');

const data = [
  { user: 'eby', pass: '123'},
  { user: 'nancy', pass: '555'}
]

const server3 = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200), { 'Content-Type': 'text/html'};
    res.write('Welcome to our home page');
    res.end();
  }
  else if(req.url === '/users') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200), { 'Content-Type': 'application/json'};
    res.write(JSON.stringify(data));
    res.end();
  }

  else if (req.url == '/adduser?username=benita&password=ben10') {
    const newUrl = URL.parse(req.url, true)
    const params = newUrl.query
    let u_name = params.username;
    let u_password = params.password;
    userActive(u_name, u_password); // this function adds the params to the dataSource.json file {whenever you refresh the browser it adds the params again} 
    res.end("record added");
}
else if (req.url.startsWith('/addNewUser')) { //add it on the browser
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200), { 'Content-Type': 'application/json'};
    const newUrl = URL.parse(req.url, true)
    const params = newUrl.query
    let u_name = params.username;
    let u_password = params.password;
    userActive(u_name, u_password);
    res.end("record added Succesfully");
}
else if (req.url.startsWith('/getNames')) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200), { 'Content-Type': 'application/json'};
  res.write(JSON.stringify(retrieveFile));
  res.end('retrieved Succesfully');
}
else if(req.url === '/contact') {
    res.writeHead(200), { 'Content-Type': 'text/html'};
    res.write('Welcome to our contact page');
    res.end();
  } else {
    res.writeHead(200), { 'Content-Type': 'text/html'};
    res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`)
  }
  
})

server3.listen(5002, function () {
  console.log("server has started");
});