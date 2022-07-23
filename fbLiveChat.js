const adapter = require("socket.io-redis");
const redis = require("redis");
const sub = redis.createClient({ host: process.env.SOCKET_HOST, disable_resubscribing: true });

function connection(io) {
  io.adapter(
    adapter({
      subClient: sub,
      key: "socket.io"
    })
  );

  sub.subscribe("chat");

  return sub;
};

module.exports = connection;