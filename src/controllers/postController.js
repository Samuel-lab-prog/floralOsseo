const fs = require("fs");
const path = require("path");
const { insertEmail } = require("../models/emailModel.js");

function submitController(req, res) {
  if (req.url === "/submit") {
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
}
module.exports = submitController;
