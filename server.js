
re("http");

var server = http.createServer(function(req, res) {
        // write Header
    res.writeHead(200, {"Content-Type": "text/html"});

        // write HTML
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello Node.js</title>
        </head>
        <body>
            <h1>Hello, Node.js</h1>
            <p>${req.url}</p>
            <p>${req.method}</p>
        </body>
        </html> 
    `);
});

server.listen(3000);  // port listen

console.log("Server listening on port 3000");

