function notFoundController(req, res) {
    if(!res.writableEnded) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1><p>A rota que você está procurando não existe.</p>");
    }
}
module.exports = notFoundController;
