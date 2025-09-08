const http = require("http");
const path = require("path");
const fs = require("fs");
const { insertEmail } = require("./db/db.js");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (method) {
    case "GET":
      if (url === "/") {
        const filePath = path.join(
          __dirname,
          "..",
          "public",
          "html",
          "index.html"
        );
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
        let correctedUrl = url.startsWith("/") ? url.slice(1) : url;
        const contentType =
          mimeTypes[fileExtension] || "application/octet-stream";
        if (path.extname(correctedUrl) === ".html") {
          correctedUrl = path.join("html", correctedUrl);
        }
        const filePath = path.join(__dirname, "..", "public", correctedUrl);
        console.log(filePath);
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
    case "POST":
      if (url === "/submit") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            const params = new URLSearchParams(body);
            const email = params.get("email");
            await insertEmail(email);
            res.writeHead(302, { Location: "/" });
            res.end("Email submitted");
          } catch (err) {
            console.error(err);
            res.writeHead(500);
            res.end("Internal Server Error haha");
          }
        });
      }
      break;
  }
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
