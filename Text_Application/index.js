//importing server module
let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");

let handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;

server.start(router.route, handle);