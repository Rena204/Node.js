const http = require('http');
const url = require('url');

let count = { "/": 0, "/about": 0 };

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/') {
     
        count["/"]++;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Welcome to the Home Page</h1><p>View count: ${count["/"]}</p><a href="/about">Go to About Page</a>`);

        res.end();
    } 

    else if (path === '/about') {
        count["/about"]++;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Welcome to the About Page</h1><p>View count: ${count["/about"]}</p><a href="/">Go to Home Page</a>`);

        res.end();
    } 
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<h1>404 Not Found</h1><a href="/">Go to Home Page</a>`);

        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
