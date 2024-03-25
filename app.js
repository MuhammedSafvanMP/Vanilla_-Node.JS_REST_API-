const http = require('http');

// const PORT = process.env.PORT || 4000

const server = http.createServer((req, res) => {
    if(req.url === "/api" && req.method === "GET"){
        res.writeHead(200, {"Content-Text" : "application|json"})
        res.write("hello all");
        res.end()
    }
})

server.listen(3000, () => console.log("server is running"))