import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import {env} from '../../env';
export var detailModule = {
    data: {},
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
        this.renderMenuIcon('plus');
        if (this.$menuContainer) {
            this.$menuContainer.remove();
        }
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }
        this.$menuContainer=$(`<div class="detailhome modal zoomIn animated"></div>`);
       let drop= $(`<div class="modal-backdrop show"></div>`);
       drop.appendTo(this.body);
        let icon=$(`<i class="fas fa-times-circle"></i>`);
        icon.appendTo(this.$menuContainer);
        icon.click(()=>{
            this.$menuContainer.remove(); 
            drop.remove();
        })
        if(this.data.data.hasOwnProperty('subtitle')){
            let title=$(`<h6>${this.data.data.subtitle}</h6>`).appendTo(this.$menuContainer);
        }

        if(this.data.data.hasOwnProperty('img')){
            let img=$(`<img src=${this.data.data.img}>`).appendTo(this.$menuContainer);
        }

        if(this.data.data.hasOwnProperty('paragraph')){
            let div=$(`<div class="paragraphdiv"></div>`);
            let paragraph=$(`<p>${this.data.data.paragraph}</p>`).appendTo(div);
            div.appendTo(this.$menuContainer);
        }

        if(this.data.data.hasOwnProperty('button')){
            let btncontainer=$(`<div class="btncontainer"></div>`);
            this.data.data.button.forEach(e=>{
                let btn=$(`<button type=button class="btn btn-denger">${e.title}</button>`).appendTo(btncontainer);
                btn.click(()=>{
                    let link=e.link;
                    let payload=e.payload;
                    link==='undefined' ? socketModule.messageSend(payload) : window.open(link, '_blank');
                })
            })
            btncontainer.appendTo(this.$menuContainer);
        }

        this.$menuContainer.appendTo(this.$message);
    },  
    clear: function () {
        this.data = {
            data: []
        };
        if (this.$menuContainer) {
            this.$menuContainer.remove();
        }
    },
    renderMenuIcon: function(flag){
        let img = '';
        let minus = 'images/banner/cancel.png';
        let plus = 'images/banner/plus.png';
        if(flag === 'plus'){
            img = plus;
        }
        else{
            img = minus;
        }
        $('#context img').attr('src', img);
    }
}