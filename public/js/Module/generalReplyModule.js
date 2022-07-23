import { socketModule } from '../core/socket';
import { env } from '../../env';

export var generalReplyModule = {
    data: '',
    init: function (data) {
        if(typeof(data) === 'object' && data !== null){
            this.data = data.message || '';
        }
        else{
            this.data = data;
        }
        
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function () {
        this.$parentElem = $('#message-module .message-section ul');
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    render: function () {
        this.renderElem = $('<li class="sent"><img src='+env.Orgimg+' alt="" /><p>' + this.data + '</p></li>');
        this.renderElem.appendTo(this.$parentElem);
        this.scrollBottom();
        $('.contact.active .preview').html('<span>You: </span>' + this.data);        
        socketModule.socket.emit('message', this.data);
    }
}