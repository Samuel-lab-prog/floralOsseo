const fs = require("fs");
const path = require("path");
const staticController  = require("../controllers/getController.js");
const submitController  = require("../controllers/postController.js");
const notFoundController = require("../controllers/notFound.js");

const routes = {
  GET: {
    "/": staticController,
    "*": staticController 
  },
  POST: {
    "/submit": submitController,
  },
};

const router = (req, res) => {
  const method = req.method;
  const url = req.url;

  if (routes[method][url]) {
    return routes[method][url](req, res);
  }

  if (method === "GET" && routes.GET["*"]) {
    return routes.GET["*"](req, res); 
  }

  return notFoundController(req, res);
};

module.exports = router;
