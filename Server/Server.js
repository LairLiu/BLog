"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var url_1 = require("url");
http.createServer(reqFunc).listen(8081, function () { console.log("http run at 192.168.0.108:8081"); });
function reqFunc(req, res) {
    var parseUrl = url_1.parse(req.url, true);
    var pathname = parseUrl.pathname;
    console.log(parseUrl);
    console.log("pathname", pathname);
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF8' });
    switch (pathname) {
        case "/login":
            res.write("{error:1}");
            console.log(parseUrl.query);
            break;
        default:
            res.write("{error:0}");
            break;
    }
    res.end();
}
