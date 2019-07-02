const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`A request was maed to: ${req.url}`);

  if(req.url === '/') {
    res.writeHead(200, {
      
    })
  }


})
