const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.end('It works!');

});

server.listen(3000);
