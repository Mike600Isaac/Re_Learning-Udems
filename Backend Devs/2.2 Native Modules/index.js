const fs = require("fs");
// import { fs } from 'fs';


// fs.writeFile("index.html", "Hello Node JS! we are gonna be friends soon enough", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }
// );

fs.readFile("index.html", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });