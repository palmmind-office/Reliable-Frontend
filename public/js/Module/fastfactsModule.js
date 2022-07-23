import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import { env } from '../../env';
export var fastfactsModule = {
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
        this.$container = $(`<div id="weather"></div>`);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }
        
        if (this.data.data) {
            let container1=$(`<div class="card" id="trekscard"></div>`);
            let container2=$(`<div class="card-body" style="padding: 10px;"></div>`);
            if(this.data.hasOwnProperty("subtitle"))
            {
               let subtitle=$(`<h6 class="text-center">${this.data.subtitle}</h6><hr>`);
               subtitle.appendTo(container2);
            }
            if(this.data.hasOwnProperty("mainTitle"))
            {
               let mainTitle=$(`<p class="text-center">${this.data.mainTitle}</p><br>`);
               mainTitle.appendTo(container2);
            }
            container2.appendTo(container1);
            let ul = $('<ul/>').appendTo(this.$message);
            let li = $('<li/>').appendTo(ul);
            this.data.data.forEach(element => {
            let container = $(`<li><i class="far fa-arrow-alt-circle-right" style="margin-left: -16px;"></i> <span>${element.subtitle}</span></li>`);
            container.appendTo(container2);
            container1.appendTo(li);
        });
        // if(this.data.hasOwnProperty("catagoriesContext"){

        // }
        if(this.data.hasOwnProperty('buttom')){
            let but=$(`<a href="#" class="btn" id="seemorefacts">${this.data.buttom.title}</a>`).appendTo(container1);
            if (this.data.buttom.hasOwnProperty('link')){
              let link= this.data.buttom.link;
                but.on('click',function(){
                    googleAnalytics.recordEvent({
                        eventCategory: this.data.buttom.title,
                        eventAction: link
                    });
                    window.open(link, '_blank');
                });}
            if(this.data.buttom.hasOwnProperty('payload')){
                let payload= this.data.buttom.payload;
                but.on('click',function(){
                    googleAnalytics.recordEvent({
                        eventCategory: this.data.buttom.title,
                        eventAction: payload
                    });
                   socketModule.messageSend(payload);
                }); 
            }
        }
          ul.appendTo(this.$container);
        }
        if(renderTextNode || this.data.data.length){
            this.$container.appendTo(this.$message);
        } 
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

    }
    
}















