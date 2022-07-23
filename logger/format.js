const { format } = require("winston");
const { printf } = format;


const messageFormat = printf(({ level, message, label, timestamp }) => {
  level = level || null;
  timestamp = timestamp || null;
  message.botName = message.botName || null;
  message.userID = message.userID || null;
  message.ipAddress = message.ipAddress || null;
  message.title = message.title || null;
  message.isConnected = message.isConnected || null;
  message.socketID = message.socketID || null;

  return `${timestamp},${level},${message.botName},${message.isConnected},${message.socketID},${message.userID},${message.ipAddress},${message.title}`;
});

module.exports = messageFormat;