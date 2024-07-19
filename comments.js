// Create web server
// Create a simple web server using Node.js

// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

// Create a server
const server = http.createServer((req, res) => {
    // Set the content type
    res.setHeader('Content-Type', 'text/html');

    // Read the file
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal server error');
            return;
        }
        res.end(data);
    });
}