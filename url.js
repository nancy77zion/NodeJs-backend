const url = require('url');

const route = 'http://localhost:5002/adduser?username=Ebere&password=eby11' //this is just a string

let Ul = url.parse(route,true); //The url.parse() method takes a URL string, parses it, and returns a URL object.
console.log(Ul.hostname); //outputs the hostname- localhost
console.log(Ul.pathname); //outputs the pathname - adduser
console.log(Ul.search); //outputs the search - ?username=Ebere&password=eby11
console.log(Ul.query); //outputs the query
params = Ul.query
console.log(params.username);
console.log(params.password);