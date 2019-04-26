import * as http from "http";
import { parse } from "url";

http.createServer(reqFunc).listen(8081, function () { console.log("http run at 192.168.0.108:8081") });

function reqFunc(req: http.IncomingMessage, res: http.ServerResponse) {
    let parseUrl = parse(<string>req.url, true);
    let pathname = parseUrl.pathname;
    console.log(parseUrl);
    console.log("pathname", pathname);

    res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF8' });
    switch (pathname) {
        case "/login":
            res.write("{error:1}");
            console.log(parseUrl.query)
            break;
        default:
            res.write("{error:0}");
            break;
    }
    res.end();
}
