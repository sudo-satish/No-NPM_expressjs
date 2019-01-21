const server = {};
const config = require("../config.json");
const handler = require("../handlers/index");
const http = require("http");

server.init = function() {
    let port = config.port;

    this.app = http.createServer(handler.index.bind(handler));
    this.app.listen(port, () => {
        console.log(`Server listing on ${port}`);
    });
}

server.useRouter = function(router) {
    handler.setRouter(router);
}
module.exports = server;