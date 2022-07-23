import { socketModule } from "../core/socket";
// import { formLeadModule } from "../Module/formLeadModule";
import { genericTable } from "./genericTableModule";
import { googleAnalytics } from '../general/googleAnalytics';
import { catagoriesContext } from '../Module/catagoriesContext';
import { env } from '../../env';

/**
 * Module to Support multiple title. 
 */
export var multipleTitleCopy = {
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function () {
        this.$message = $('#message-module');
        this.$parentElem = this.$message.find('.message-section').find('ul');
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    generateDOM: function (tag, attribute, css, text) {
        let $dom = $(tag);
        attribute && $dom.attr(attribute);
        css && $dom.css(css);
        text && $dom.html(text);
        return $dom;
    },
    render: function () {
        // formLeadModule.clear();
        let textData = Array.isArray(this.data.title) ? {
            'type': 'array',
            'data': this.data.title
        } : {
            'type': 'string',
            'data': this.data.title
        };

        if (textData.type === 'string') {
            let node = $(`<li class="sent sending"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${textData.data}</p></li>`);
            node.appendTo(this.$parentElem);
        }

        if (textData.type === 'array') {
            let counter = 0;
            let intervalId = setInterval(() => {
                if (counter >= textData.data.length) {
                    clearInterval(intervalId);
                    this.renderButton();
                    return;
                }
                let text = textData.data[counter];
                if (typeof (text) === 'string') {
                    let node = $(`<li class="sent sending"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
                    node.appendTo(this.$parentElem);
                }
                else if (typeof (text) === 'object') {
                    let node = $(`<li class="sent sending" style="margin-bottom: -10px;"><img src="${env.Orgimg}" alt="" style="margin-top: -16px;"></li>`);
                    let $div = $('<div></div>');
                    $div.css({
                        'overflow': 'hidden', "margin-bottom": "20px"
                        , "position": "relative",/*'padding': '0 15px',*/ 'background': 'var(--Sent-li)', "max-width": "46vh", 'color': 'var(--Sent-li-color)', 'font-size': '13px', "border-radius": "10px", "font-family": "'Lato', sans-serif", "animation": "opactyblinkleft",
                        "animation-duration": "0.7s"
                    });
                    $div.appendTo(node);
                    text.title.forEach((title) => {
                        let $li = $(`<li>${title}</li>`);
                        $li.appendTo($div);
                        if (text.hasOwnProperty("listItem")) {
                            let ul = $('<div/>');
                            text.listItem.forEach(element => {
                                let li = $(`<li><i class="fas fa-chevron-circle-right" style="font-size: 15px;"></i></li>`).appendTo(ul);
                                let a = $(`<a href="#" class="Litem">${element.title}</a>`).appendTo(li);
                                let ico = $(``).appendTo(a);
                                if (element.type === "payload") {
                                    a.addClass("listitempayload");
                                }
                                if (element.type === "link") {
                                    a.addClass("listitemlink");
                                }
                                li.click(() => {
                                    let payload1 = element.payload;
                                    let link = element.link;
                                    if (link) {
                                        window.open(link, '_blank');
                                    }
                                    else if (payload1) {
                                        socketModule.messageSend(payload1);
                                    }
                                    else {
                                        return false
                                    }
                                })
                                li.css({
                                    "float": "left",
                                    "display": "block",
                                    "font-size": "15px",
                                    "margin": "2px"
                                });
                            })
                            ul.appendTo($li);
                            ul.css({
                                "float": "left",
                                "display": "contents"
                            });
                        }
                        if (text.hasOwnProperty("link")) {
                            $li.addClass("link");
                            let link1 = text.link;
                            let link = $(`<i class="fas fa-arrow-right"></i>`).appendTo($div);
                            link.css({
                                "position": "absolute",
                                "top": "9px",
                                "bottom": "0",
                                "right": "0",
                                "cursor": "pointer",
                                "font-size": "13px"
                            })
                            $li.click(function () {
                                window.open(link1, '_blank');
                            })
                        }
                    })
                    node.appendTo(this.$parentElem);
                }
                $('.message-section li.sending span').click(function () {
                    window.open($(this).text(), '_blank');
                });
                this.scrollBottom();
                counter++;
            }, 1000);
        }
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
        this.data = {};
    },
    hideContainer: function (event) {
        if (this.$menuContainer) {
            this.$menuContainer.hide();
        }
    },
    // for submenu
    renderButton: function () {
        if (this.data.hasOwnProperty('submenu')) {
            let contents = [];
            if (Array.isArray(this.data.submenu)) {
                contents = this.data.submenu;
            }
            else if (Array.isArray(this.data.submenu.contents)) {
                contents = this.data.submenu.contents;
            }
            if (contents && contents.length) {
                this.$frameContainer = $('.message-section');
                this.$container = $(`<div class="menu"></div>`);
                this.$container.appendTo(this.$frameContainer);
                let $menuContainer = $(`<div class="submenu-container-c" style="margin-top:5px;"></div>`);
                contents.forEach((element, index) => {
                    let $c = $(`<div class="submenu container"></div>`);
                    let $d = $(`<div><img src="${element.icon}" alt="Image not found"><span style="margin: auto; class="text" value="${element.title}">${element.title} </span></div>`);
                    $d.appendTo($c);
                    $c.appendTo($menuContainer);

                    $c.on('click', function (event) {
                        let payload = element.payload;
                        if (payload) {
                            socketModule.messageSend(payload);
                            this.clear();
                        }
                        if (payload == undefined) {
                            let link = element.link;
                            // window.open(link, '_blank');
                            window.location.href = link;
                        }
                        googleAnalytics.recordEvent({
                            eventCategory: Element.title,
                            eventAction: payload
                        });
                        // socketModule.messageSend(payload);
                    }.bind(this));
                });

                $menuContainer.appendTo(this.$container);
                this.$container.appendTo(this.$message);
            }
            this.scrollBottom();
        };
        if (this.data.hasOwnProperty('iconbutton')) {
            let contents = [];
            if (Array.isArray(this.data.iconbutton)) {
                contents = this.data.iconbutton;
            }
            else if (Array.isArray(this.data.iconbutton.contents)) {
                contents = this.data.iconbutton.contents;
            }

            if (contents && contents.length) {
                this.$container = $(`<div id="quick_reply"></div>`);
                let $ul = $('<ul/>');
                contents.forEach(element => {
                    let $li = $('<li/>').appendTo($ul);
                    let a = $('<p class="bot" style="font-size:12px;padding:10px;">').appendTo($li);
                    let b = $('<div class="ico">').text(element.title).appendTo(a)
                    let ico = $(element.icon).appendTo(b);
                    let payload = element.payload;
                    $li.on('click', function (event) {
                        googleAnalytics.recordEvent({
                            eventCategory: element.title,
                            eventAction: payload
                        });
                        socketModule.messageSend(payload);
                        this.clear();
                    }.bind(this));
                });
                $ul.appendTo(this.$container);
                this.$container.appendTo(this.$message);
            }
            this.scrollBottom();
        };
        // for form
        if (this.data.hasOwnProperty('formModule')) {
            //  formLeadModule.init(this.data.formModule);  
            this.scrollBottom();
        }

        if (this.data.hasOwnProperty('catagoriesContext')) {
            catagoriesContext.init(this.data.catagoriesContext);
            this.scrollBottom();
        }



        if (this.data.hasOwnProperty('innercontenttab')) {
            let contents = [];
            if (Array.isArray(this.data.innercontenttab)) {
                contents = this.data.innercontenttab;
            }
            else if (Array.isArray(this.data.innercontenttab.contents)) {
                contents = this.data.innercontenttab.contents;
            }

            if (contents && contents.length) {
                this.$container = $(`<div id="innercontenttab"></div>`);
                let $ul = $('<ul/>');
                contents.forEach(element => {
                    let $li = $('<li/>').appendTo($ul);
                    $('<a/>').text(element.title).appendTo($li);

                    let payload = element.payload;
                    $li.on('click', function (event) {
                        googleAnalytics.recordEvent({
                            eventCategory: element.title,
                            eventAction: payload
                        });
                        socketModule.messageSend(payload);
                        this.clear();
                    }.bind(this));
                });
                $ul.appendTo(this.$container);
                this.$container.appendTo(this.$message);
            }
            this.scrollBottom();
        }

        if (this.data.hasOwnProperty('table')) {
            genericTable.init(this.data.table);
            this.scrollBottom();
        }
        //    for button
        if (this.data.hasOwnProperty('button')) {
            let contents = [];
            if (Array.isArray(this.data.button)) {
                contents = this.data.button;
            }
            else if (Array.isArray(this.data.button.contents)) {
                contents = this.data.button.contents;
            }

            if (contents && contents.length) {
                this.$container = $(`<div id="quick_reply" style="margin: auto;"></div>`);
                let $ul = $('<ul/>');
                contents.forEach(element => {
                    let $li = $('<li/>').appendTo($ul);
                    $('<a/>').text(element.title).appendTo($li);

                    let payload = element.payload;
                    $li.on('click', function (event) {
                        googleAnalytics.recordEvent({
                            eventCategory: element.title,
                            eventAction: payload
                        });
                        socketModule.messageSend(payload);
                        this.clear();
                    }.bind(this));
                });
                $ul.appendTo(this.$container);
                this.$container.appendTo(this.$message);
            }
            this.scrollBottom();
        }
    },
}