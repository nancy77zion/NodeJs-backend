// fs module 
const fs = require('fs');

// fs.readFile('./fs-file/readme.txt', (err,data) => {
//   console.log(data);
// })

//readfilesync
  const data = fs.readFileSync('./fs-file/dataSource.json','utf-8');
  console.log(JSON.parse(data)); // json.parse output it as an object - value

//why to use parse
  let newData = JSON.parse(data);
  console.log(newData[0].username); 

//if not parsed, then we get undefined
  let newData2 = data
  console.log(newData2[0].username); 


//fs.writeFile writes into a file (if the file is available it writes the contents and if its not available it creates the file )

fs.writeFileSync('./fs-file/data.json', 'content to be stored');

// //To write into dataSource file without clearing the contents already in it

// function adduser (){

// const dataStruc = {
//   username : null,
//   password:null
// }

// const data = fs.readFileSync('./fs-file/dataSource.json','utf-8');
// let newData = JSON.parse(data)
// console.log(newData)

// let prop = Object.create(dataStruc);
// prop.username = "ada"
// prop.password = "88ada"
// newData.push(prop)

// write into it
// fs.writeFileSync('./fs-file/dataSource.json',JSON.stringify(newData)); 
// }

// module.exports = adduser