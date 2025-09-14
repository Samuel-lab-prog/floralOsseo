const { log } = require("console");
const fs = require("fs");
const path = require("path");

function staticController(req, res) {
  let url = req.url;
  if (url === "/") {
    const filePath = path.join(__dirname, "../", "../", "public", "html", "home.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
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
    let correctedUrl = url.startsWith("/") ? url.slice(1) : url;
    const contentType = mimeTypes[fileExtension] || "application/octet-stream";
    if (path.extname(correctedUrl) === ".html") {
      correctedUrl = path.join("html", correctedUrl);
    }
    const filePath = path.join(__dirname, "../", "../", "public", correctedUrl);
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
}
module.exports = staticController;
