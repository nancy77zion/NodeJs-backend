const fs = require('fs');

function adduser (username, password){

  const dataStruc = {
    username : null,
    password:null
  }
  
  const data = fs.readFileSync('./fs-file/dataSource.json','utf-8');
  let newData = JSON.parse(data)
  console.log(newData)
  
  let prop = Object.create(dataStruc);
  prop.username = username
  prop.password = password
  newData.push(prop)
  
  // write 
  fs.writeFileSync('./fs-file/dataSource.json',JSON.stringify(newData)); 
  }
  
  module.exports = adduser