// function greet() {
//   console.log('hello world');
// }

// function topic() {
//   console.log('learning node');
// }

// module.exports = {f1: greet, f2: topic}

const userlog = {
  login: function () {
    console.log("user logged in successfully");
  },
  loggedout: function () {
    console.log("User logged out completely");
  },
};
module.exports = userlog;

// http module

const http = require("http");

http
  .createServer(function (req, res) {
    res.end("Hello User");
    console.log("no console");
  })
  .listen(5555, function () {
    console.log("server has started");
  });

//0r

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write("[{'name':'userlogins','value':1}]");
  res.end();
  // res.end("Welcome page")
  // console.log("no console")
});

server.listen(5000, function () {
  console.log("server has started");
});

//if you want to display multiple pages

const server2 = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200), { 'Content-Type': 'text/html'};
    res.write('Welcome to our home page');
    res.end();
  }
  else if(req.url === '/about') {
    res.writeHead(200), { 'Content-Type': 'text/html'};
    res.write('Welcome to our about page');
    res.end();
  }
  else if(req.url === '/contact') {
    res.writeHead(200), { 'Content-Type': 'text/html'};
    res.write('Welcome to our contact page');
    res.end();
  } else {
    res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`)
  }
  
})

server2.listen(5001, function () {
  console.log("server has started");
});

//example2
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
    res.writeHead(200), { 'Content-Type': 'application/json'};
    res.write(JSON.stringify(data));
    res.end();
  }
  else if(req.url === '/contact') {
    res.writeHead(200), { 'Content-Type': 'text/html'};
    res.write('Welcome to our contact page');
    res.end();
  } else {
    res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`)
  }
  
})

server3.listen(5002, function () {
  console.log("server has started");
});
