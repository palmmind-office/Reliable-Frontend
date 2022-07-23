export var socketModule = {
    socket: '',
    init: function (url) {
        this.socket = io.connect(url);
        this.socket.emit('join',"Agent")
    },
    messageSend: function (message) {
        this.socket.emit('user_message', message, uniqueID);
    }
};