import { socketModule } from '../core/socket';
import {env} from '../../env';

export var accordanceModule= {
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
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt="Loading..."><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }
        if (this.data.data) {
            let container = $(`<div class="accordion-container"></div>`);
            if(this.data.hasOwnProperty('accordanceTitle')){
                let accordanceTitle=$(`<h6 class="text-center">${this.data.accordanceTitle}</h6>`).appendTo(container);
            }
            this.data.data.forEach(element => {
                let set=$(`<div class="set1">`);
                let tit=$(`<a href="#">${element.content.title} <i class="fa fa-plus"></i></a>`).appendTo(set);
                let accdiv=$(`<div class="content" style="float:none"></div>`).appendTo(set);
                if(element.content.hasOwnProperty('img')){
                    let img=$(`<img src="${element.content.img}" alt="Loading...">`).appendTo(accdiv);
                }
                if(element.content.hasOwnProperty('maintitle')){
                    let title=$(`<h6 class="text-center">${element.content.maintitle}</h6>`).appendTo(accdiv);
                }
                let text=$(`<p>${element.content.subtitle}</p>`).appendTo(accdiv);
                if(element.content.hasOwnProperty('button')){
                    let buttoncontainer=$(`<div class="buttoncontainer"></div>`).appendTo(accdiv);
                    element.content.button.contents.forEach((content, btnIndex) => {
                        let button=$(`<button type="button" class="btn btn-info">${content.title}</button>`).appendTo(buttoncontainer);
                        button.click(()=>{
                            if(content.hasOwnProperty('payload')){
                                let payload = content.payload;
                                socketModule.messageSend(payload);
                            }
                            else{
                                let link=content.link;
                                window.open(link, '_blank');
                            }
                        });
                    });
                }
                set.appendTo(container); 
            });
            let ul = $('<ul/>').appendTo(this.$message);
            let li = $('<li/>').appendTo(ul);
            container.appendTo(li);
            ul.appendTo(this.$container);
        }
        if(renderTextNode || this.data.data.length){
            this.$container.appendTo(this.$message);
        } 
        this.data1(this.scrollBottom);
        this.scrollBottom();
    },

    data1: function (scrollBottom) {
        $(".set1 > a").on("click", function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".set1 .content").slideUp(100);
            $(".set1 > a i").removeClass("fa-minus").addClass("fa-plus");
          } else {
            scrollBottom();
            $(".set1 > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set1 > a").removeClass("active");
            $(this).addClass("active");
            $(".set1 .content").slideUp(200);
            $(this).siblings(".set1 .content").slideDown(200);
          }
        });
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
    },
}















