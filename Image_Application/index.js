//importing server module
let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");

let handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/show"] = requestHandler.show;

server.start(router.route, handle);