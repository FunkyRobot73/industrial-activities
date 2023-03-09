const http = require("http");

const server = http.createServer((request, response) => {
    response.write("What's up?");
    response.end();
})

server.listen(3000);