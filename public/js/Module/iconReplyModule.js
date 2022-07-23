import { socketModule } from '../core/socket';

export var iconReplyModule = {
    data: {},
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
        this.bindEvents();
    },
    cacheDOM: function () {
        this.$message = $('#message-module');
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    render: function () {
        if (this.$container) {
            this.$container.remove();
        }
        this.$container = $(`<div id="quick_reply"></div>`);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="images/img/reliablelogo.png" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }

        if (this.data.data.length) {
            let ul = $('<ul/>');
            this.data.data.forEach(element => {
                let li = $('<li/>').appendTo(ul);
                let a = $('<p class="bot" style="font-size:12px;padding:10px;">').appendTo(li);
                let b =$('<div class="ico">').text(element.title).appendTo(a)
                let ico=$(element.icon).appendTo(b);
            });
            ul.appendTo(this.$container);
        }

        if(renderTextNode || this.data.data.length){
            this.$container.appendTo(this.$message);
        }

        this.scrollBottom();
    },
    clear: function () {
        this.data = {
            title: '',
            data: []
        }
        this.render();
    },
    bindEvents: function () {
        if (!this.$container) {
            return;
        }
        this.$container.find('ul li').on('click', this.btnClick.bind(this))
    },
    btnClick: function (event) {
        let $item = $(event.target).closest('li');
        let index = this.$container.find('ul li').index($item);
        if (index > -1) {
            let payload = this.data.data[index].payload;
            this.clear();
            socketModule.messageSend(payload);
        }
    },
     Show: function(event){        
         if(this.$Container){
             this.$Container.show();
        }
     }
}
