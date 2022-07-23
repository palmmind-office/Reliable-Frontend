import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import {env} from '../../env';
export var askModule = {
    data: {},
    currentSlide: 0,
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
    },

    cacheDOM: function () {
        this.$message = $('#message-module');
        this.body=$('body');
    },

    generateDOM: function (tag, attribute, css, text) {
        let $dom = $(tag);
        attribute && $dom.attr(attribute);
        css && $dom.css(css);
        text && $dom.html(text);
        return $dom;
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, 'fast');
    },
    render: function () {
        if (this.$container) {
            this.$container.remove();
        }
       let drop= $(`<div class="modal-backdrop show"></div>`);
       drop.appendTo(this.body);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }
        this.$menuContainer=$(`<div class="queriesSlider modal"></div>`);
        let icon=$(`<i class="fas fa-times-circle"></i>`);
        icon.appendTo(this.$menuContainer);
        icon.click(()=>{
            this.$menuContainer.remove();
            drop.remove();
        })
        if(this.data.hasOwnProperty('subtitle')){
            let title=$(`<h6>${this.data.subtitle}</h6>`).appendTo(this.$menuContainer);
        }


        this.$homeslider=$(`<div class="owl-carousel owl-theme"></div>`);
       if(this.data.data.forEach(element=>{
        this.$homesliderItem=$(`<div class="queriessliderItem" ></div>`);
         let ul=$(`<ul></ul>`).appendTo(this.$homesliderItem);
         element.queries.forEach(elements=>{
            let li=$(`<li><i class="far fa-hand-point-right" style=" float: left; color:#e01a22;
            padding: 6px 12px 0px 0px;"></i><p>${elements.text}</p></li>`).appendTo(ul);
            li.click(()=>{
                if(elements.payload){
                    let payload=elements.payload;
                    socketModule.messageSend(payload);
                    drop.remove();
                }
                else{
                    return false
                }
            });
         })
         this.$homesliderItem.appendTo(this.$homeslider);
        }));
        this.$homeslider.appendTo(this.$menuContainer);
        this.$menuContainer.appendTo(this.$message);
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            dots: false,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            loop:true,
            singleItem : true,
            animateIn: 'fadeInRight',
            animateOut: 'fadeOut',
            freeDrag:false,
            touchDrag:false,
            pullDrag:false,
            mouseDrag:false,
            responsive:{
                0:{
                    items:1
                }
            }

        });
    },  
    clear: function () {
        this.currentSlide = 0;
        this.data = {
            data: []
        };
        if (this.$menuContainer) {
            this.$menuContainer.remove();
        }
    }
}