import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import { env } from '../../env';

export var findtreksModule= {
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
        this.$container = $(`<div id="treks"></div>`);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }


        if (this.data.data) {
            let container = $(`<div class="card"></div>`);
            let trekscontainer=$(`<div class="card-body" id="findtreks"></div>`).appendTo(container);
            if(this.data.data.hasOwnProperty('img')){
                let img= $(`<img src="${this.data.data.img}" alt="Loading...">`);
                img.appendTo(trekscontainer);
            }
            if(this.data.hasOwnProperty("subtitle"))
            {
               let subtitle= $(`<h6 class="text-center">${this.data.subtitle}</h6>`);
               subtitle.appendTo(trekscontainer);
            }
            let text=$(`<p class="card-text">${this.data.data.subtitle}<span style="color:#d09d06;"><br>To know more please click button..</span></p>`).appendTo(trekscontainer);
            if(this.data.hasOwnProperty("buttom"))
            {
               let btn=$(`<a href="#" id="moretreks" class="btn" >${this.data.buttom.title}</a>`);
               btn.appendTo(trekscontainer);
            }
            let ul = $('<ul/>').appendTo(this.$message);
            let li = $('<li/>').appendTo(ul);
            container.appendTo(li);
            ul.appendTo(this.$container);
        }
        if(renderTextNode || this.data.data.length){
            this.$container.appendTo(this.$message);
        }
        // for giving href attribute for open another windowes
        this.scrollBottom();
    },
    clear: function () {
        if(this.$container){
            this.$container.remove();
        }
    },
    bindEvents: function () {
        if (!this.$container) {
            return;
        }
        $('#moretreks').on('click', this.btnClick.bind(this))
    },
    btnClick: function (event) {
            let payload = this.data.buttom.payload;
            let link= this.data.buttom.link;
            googleAnalytics.recordEvent({
                eventCategory: this.data.buttom.title,
                eventAction: link || payload
            });
            if (link) {
                window.open(link, '__blank');
            }
         if(payload){
            this.clear();
            socketModule.messageSend(payload);
            }
        }
}















