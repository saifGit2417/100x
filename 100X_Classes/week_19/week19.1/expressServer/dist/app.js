import express from "express";
import { WebSocketServer, WebSocket } from "ws";
const app = express();
app.get('/', (req, res) => {
    res.send("hello from get api call");
});
const httpServer = app.listen(8080);
const wss = new WebSocketServer({ server: httpServer });
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data + "this string is added from server web socket", { binary: isBinary });
            }
        });
        console.log("message received", data);
    });
    ws.send("Hello! Message From Server!!");
});
