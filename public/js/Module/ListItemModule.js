import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import { catagoriesContext } from './catagoriesContext';
import { env } from '../../env';

export var ListItemModule = {
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
        this.$container = $(`<div id="Itemlist"></div>`);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }


        if (this.data.data) {
            let ul = $('<ul/>');
            let div = $('<div/>');
            div.addClass('d-flex justify-content-center');
            this.h5 = $(`<h6>${this.data.title}</h6>`).appendTo(ul)
            console.log("thhis is subtitle", this.data.title)
            this.h5.addClass('font-weight-bold')
            this.data.data.forEach(element => {
                console.log("this is buttontype", element.buttonType)
                if (!(element.buttonType == "back")) {
                       if(!(element.id === 'btn')){
                    console.log("this is a buttonType", element.buttonType)
                    this.li = $(`<li id="listId">${typeof this.data.multi == "undefined" ? `<i class="fas fa-chevron-circle-right"></i>` : ``}</li>`).appendTo(ul);
                    this.a = $(`<a href="#" id="list_itemVal" class="Litem">${element.subtitle}</a>`).appendTo(this.li);
                    if (this.data.multi) {
                        ul.css({
                            "margin-left": " -54px"
                        })
                    }
                }
                    if (element.id === 'btn') {
                        this.li = $(`<li id="listId">${typeof this.data.multi == "undefined" ? `<i class="fas fa-chevron-circle-left"></i>` : ``}</li>`).appendTo(ul);
                    this.a = $(`<a href="#" id="list_itemVal" class="Litem">${element.subtitle}</a>`).appendTo(this.li);                    }
                }
                if (element.buttonType == "back") {
                    this.buton = $(`<button id="backbtn">${element.subtitle}</button>`)
                    this.buton.addClass('btn text-center')
                    this.buton.css({ "background": "#0088CE", "color": "#fff", "border": "none", "font-size": "12px", "padding": "5px 10px", "margin": "20px 25px 0 42px" })
                    this.buton.appendTo(div)
                }
                if (element.hasOwnProperty('link')) {
                    if (!(element.buttonType === 'back')) {
                        this.a.click(function () {
                            let link2 = element.link;
                            window.open(link2, '_blank');
                            googleAnalytics.recordEvent({
                                eventCategory: element.subtitle,
                                eventAction: link2
                            });
                        })
                    }
                    else if (element.buttonType === 'back') {
                        this.buton.click(function () {
                            let link1 = element.link;
                            window.open(link1, '_blank');
                            googleAnalytics.recordEvent({
                                eventCategory: element.subtitle,
                                eventAction: link1
                            });
                        })

                    }
                }
                if (element.hasOwnProperty('payload')) {
                    if (!(element.buttonType === 'back')) {
                        this.a.click(function () {
                            let payload = element.payload;
                            googleAnalytics.recordEvent({
                                eventCategory: element.subtitle,
                                eventAction: payload
                            });
                            socketModule.messageSend(payload);
                        })
                    }
                    if (element.buttonType === 'back') {
                        this.buton.click(function () {
                            let payload1 = element.payload;
                            console.log(payload1)
                            googleAnalytics.recordEvent({
                                eventCategory: element.subtitle,
                                eventAction: payload1
                            });
                            socketModule.messageSend(payload1);
                        })
                    }

                }
            });

            if (this.data.hasOwnProperty("subtitle")) {
                let c = $(`<div class="Itemlist text-center"></div>`);
                let subtitle = $(`<h6>${this.data.subtitle}</h6><hr>`);
                subtitle.appendTo(c);
                c.appendTo(this.$container);
            }
            div.appendTo(ul);
            ul.appendTo(this.$container);

            if (this.data.hasOwnProperty("buttom")) {
                let but = $(`<a href="#" class="btn" id="seemorefacts">${this.data.buttom.title}</a>`);
                but.on("click", function () {
                    let payload = this.data.buttom.payload;
                    if (payload) {
                        socketModule.messageSend(payload)
                    }
                    else {
                        let link = this.data.buttom.link;
                        window.open(link, '_blank');
                    }
                }.bind(this))
                but.appendTo(this.$container);
            }

        }
        if (renderTextNode || this.data.data.length) {
            this.$container.appendTo(this.$message);
        }
        this.scrollBottom();
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    },

    bindEvents: function () {
        if (!this.$container) {
            return;
        }
    }
}















