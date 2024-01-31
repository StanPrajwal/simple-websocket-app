const Server = require("ws").Server;

const server = new Server({ port: 5000 });

server.on("connection", (stream) => {
  console.log("someone connected!");
  stream.on("message", (data) => {
    if (data) {
      stream.send(`From Server ${data}`);
    }
  });
  stream.on("close", () => {
    console.log("I Lost Client....!");
  });
});
