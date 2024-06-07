const WebSocket = require("ws");

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// When a client connects
wss.on("connection", (ws) => {
    console.log("Client connected");
    
    // When receiving a message from the client
    ws.on("message", (message) => {
        // Broadcast the message to all clients (except the sender)
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                console.log(message)
                client.send(message);
            }
        });
    });
});
