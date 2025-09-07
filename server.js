const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (method) {
    case "GET":
      if (url === "/") {
        const filePath = path.join(__dirname, "index.html");
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end("Error loading index.html");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        });
      } else {
        const fileExtension = path.extname(url);
        const mimeTypes = {
          ".html": "text/html",
          ".css": "text/css",
          ".js": "application/javascript",
          ".png": "image/png",
          ".jpg": "image/jpeg",
          ".gif": "image/gif",
          ".svg": "image/svg+xml",
        };
        const correctedUrl = url.startsWith("/") ? url.slice(1) : url;
        const contentType =
          mimeTypes[fileExtension] || "application/octet-stream";
        const filePath = path.join(__dirname, correctedUrl);
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end("File not found");
          } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
          }
        });
      }
      break;
  }
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
