import { socketModule} from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import { env } from '../../env';
export var filterDateModule = {
    data: {},
    currentSlide: 0,
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
        this.filterType();
    },

    cacheDOM: function () {
        this.$message = $('#message-module');
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
        }, "fast");
    },

    render: function () {
        if (this.$container) {
            this.$container.remove();
        }
        this.$container = $(`<div id="filterdate"></div>`);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }

        if (this.data.data) {
            let ul = $('<ul/>');
            let tab_one = $('<div class="tab"></div>')
            let tab_two = $('<div class="tab2"></div>')
            let tab = $(`<div></div>`);
            var i;
            let buttony = $(`<button class="tablinks active " value="${this.data.data[0].label_y}" >${this.data.data[0].label_y}</button>`);
            if(this.data.hasOwnProperty('contents')){
                let buttonx=$(`<span >${this.data.contents}</span>`);
                buttonx.appendTo(tab_two);
            }
            tab_two.appendTo(ul);
            buttony.appendTo(tab_one);
            tab_one.appendTo(ul);

            for (i = 1; i < 5; i++) {
                let buttons_y = $(`<button class="tablinks" value="${this.data.data[i].label_y}">${this.data.data[i].label_y}</button>`);
                buttons_y.appendTo(tab_one);
                tab_one.appendTo(ul);
            }

            for (i = 5; i <= 9; i++) {
                let buttons_x = $(`<button class="tablinks" value="${this.data.data[i].label_x}">${this.data.data[i].label_x}</button>`);
                buttons_x.appendTo(tab_two);
                tab_two.insertAfter(tab_one);
            }

            this.tabcontent = $(`<div id="Jan" class="tabcontent" style="display:block"> </div> `);
            this.tabcontent.appendTo(tab);
            tab.insertAfter(tab_two);
            ul.appendTo(this.$container);
            
       

        }

        if (renderTextNode || this.data.data.length) {
            this.$container.appendTo(this.$message);  
            this.scrollBottom();  
        }

        // initiall value assign in tabitems
        if ($('.tabcontent').attr("id", "Jan")) {
            this.imgDom(this.data.data[0].slider);
        }

        $('.tablinks').click(function (event) {
            let p = $(event.target).attr('value');
            this.filterType(p);
            $('.tabcontent').attr("id", p);
            openDate(event, p, this.scrollBottom);

            function openDate(evt, cityName, scroll) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                    scroll();
                }
                document.getElementById(cityName).style.display = "block";
                evt.currentTarget.className += " active";
            }
        }.bind(this));
    },


    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    },


    filterType: function (p) {
        let type = p;
        switch (type) {
            case this.data.data[0].label_y:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[0].slider);
                break;

            case this.data.data[1].label_y:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[1].slider);
                break;

            case this.data.data[2].label_y:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[2].slider);
                break;

            case this.data.data[3].label_y:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[3].slider);
                break;

            case this.data.data[4].label_y:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[4].slider);
                break;

            case this.data.data[5].label_x:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[5].slider);
                break;

            case this.data.data[6].label_x:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[6].slider);
                break;

            case this.data.data[7].label_x:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[7].slider);
                break;

            case this.data.data[8].label_x:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[8].slider);
                break;

            case this.data.data[9].label_x:
                $('.owl-slider').remove();
                this.imgDom(this.data.data[9].slider);
                break;

            default:
                $('.tabcontent').attr("id", "");
        }
    },



    imgDom: function (ima) {
        console.log("yo img dom", ima);
        let filterSlider = $(`<div class="owl-slider"></div>`);
        this.filterSlider_one = $(`<div id="carousel" class="owl-carousel owl-theme"></div>`);
        ima.forEach(element => {
            this.$imgdiv = $(`<div class="item"></div>`);

            if (element.hasOwnProperty('img')) {
                let $image = this.generateDOM('<img/>', {
                    'src': element.img,
                    'alt': 'Loading..',
                    'class': 'owl-lazy'
                }, );
                $image.appendTo(this.$imgdiv);
            };
            let $subdiv = $(`<div class="filtercontents"></div>`);

            if (element.hasOwnProperty('title')) {
                let $titletag = $(`<span>${element.title}</span>`);
                $titletag.appendTo($subdiv);
                $subdiv.appendTo(this.$imgdiv);
            };

            if (element.hasOwnProperty('subtitle')) {
                let $subtitletag = $(`<p>${element.subtitle}</p>`);
                $subtitletag.appendTo($subdiv);
                $subdiv.appendTo(this.$imgdiv);
            };

            if (element.hasOwnProperty('button')) {
                let $btnContainer = this.generateDOM('<div></div>', {
                    'class': 'button-container'
                });
                element.button.contents.forEach((content, btnIndex) => {
                    let $btn = this.generateDOM('<button> </button>', { 'class': 'btn btn-info',   'type':'button',  'value':content.paylink },  {} , content.title );
                    $btn.appendTo($btnContainer); 
                });
                $btnContainer .appendTo($subdiv);
                $subdiv.appendTo(this.$imgdiv);
            };
            if (element.hasOwnProperty('icon_button')) {
                let $btnContainer = this.generateDOM('<div></div>', {
                    'class': 'icon-button-container'
                });
                element.icon_button.contents.forEach((content, btnIndex) => {
                    let $btn = this.generateDOM('<button> </button>', { 'class': ' btn btn-outline-info',   'type':'button',  'value':content.paylink },  {'margin' : '5px', 'border-radius' : '10px'} , content.icon  );
                    let icon_title=$(`<span> ${content.title} </span>`);
                    icon_title.appendTo($btn);
                    $btn.appendTo($btnContainer); 
                });
                $btnContainer .appendTo($subdiv);
                $subdiv.appendTo(this.$imgdiv);
            };
            this.$imgdiv.appendTo(this.filterSlider_one);
            this.filterSlider_one.appendTo(filterSlider);
            filterSlider.appendTo(this.tabcontent);

            $(document).ready(() => {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    lazyLoad: true,
                    loop: false,
                    rewind: false,
                    dots: true,
                    margin: 15,
                    responsiveClass: true,
                    autoHeight: true,
                    smartSpeed: 800,
                    nav: true,
                    items: 1,
                });
                $('.owl-carousel').on('changed.owl.carousel', function (property) {
                    this.currentSlide = property.page.index;
                }.bind(this));
            });
        });
        this.btnClick();
    },


    btnClick : function(){
          //for click event render another window
          $('.filtercontents button').click(function () {
            let p = $(event.target).attr('value');
            googleAnalytics.recordEvent({
                eventCategory:  p,
                eventAction: p
            })
            if( p.startsWith('https:') || p.startsWith('http:')){
                window.open(p, '_blank');
            }
           else{
               socketModule.messageSend(p);
           }
            })
            
    }

}
