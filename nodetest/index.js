// const http = require('http');

// const myserver = http.createServer((req, res) => {

//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('This is my home page');
//   }

//   else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <h2>This is class of CSE of BTech 3rd year</h2>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsM6zsSVj3LttmwxNWDO-TC7EpxXKvABpog&s" width="300"/>
//     `);
//   }

//   else if (req.url === '/home') {
//     res.end('ABES ENGINEERING COLLEGE');
//   }

//   else if (req.url === '/contact') {
//     res.end('My contact no. is 8178198796');
//   }

//   else {
//     res.writeHead(404);
//     res.end('404 page not found');
//   }
// });

// myserver.listen(5000, () => console.log('Server is running on port 5000'));
// const fs = require("fs");

// const data = [{
//     name: "Vipul",
//     age: 22
// },
// {
//   name:"yash",
//   age:21
// }];

// fs.writeFileSync("data.json", JSON.stringify(data));

const fs = require("fs");

const data = 
{
  name : "vipul",
  age : 21

}

fs.writeFileSync("data.json", JSON.stringify(data));

