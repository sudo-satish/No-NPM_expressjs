const router = require("./routers/index");
const server = require("./lib/server");
server.useRouter(router);
server.init();
