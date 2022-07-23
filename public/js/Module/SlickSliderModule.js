import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import { env } from '../../env';
export var SlickSliderModule = {
    data: {},
    currentSlide: 0,
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
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
        }, 'fast');
    },
    render: function () {
        if (this.$container) {
            this.$container.remove();
        }
       
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }
        this.$menuContainer=$(`<div class="slickSlider"></div>`);
        this.$homeslider=$(`<div class="owl-carousel owl-theme"></div>`);
       if(this.data.data.forEach(element=>{
        this.$homesliderItem=$(`<div class="slicksliderItem"></div>`);
        let topitem=$(`<div class="topItem"><div>`);
        let subcontents=$(`<div id="slicksubContents"></div>`);
        let subcontents_one=$(`<div class="title"><span>${element.title}</span></div>`);
            let contents= $(`<div class="mainimg"><img src="${element.img}" alt="Loading..."></div>`);
            if(element.hasOwnProperty('imgtitle')){
                let bankContent=$(`<span class="slickContent">${element.imgtitle}</span>`).appendTo(contents);
            }
            subcontents_one.appendTo(topitem);
            if(element.hasOwnProperty('subtitle')){
                let subcontentsSubtitle=$(`<div class="subtitle"><p>${element.subtitle}</p></div></div>`);
                subcontentsSubtitle.appendTo(topitem);
            }
            topitem.appendTo(this.$homesliderItem);
            contents.appendTo(this.$homesliderItem);
            if(element.hasOwnProperty('callactionBtn')){
                let btn=$(`<button type="button" class="btn call-to-action">${element.callactionBtn.title}<i class="fas fa-external-link-alt"></i></button>`).appendTo(contents);
                btn.click(()=>{
                    let link=element.callactionBtn.link;
                    window.open(link, '_blank');
                });
            }

            if(element.hasOwnProperty("best_sellers")){
                if(element.best_sellers==""){
                    let img=$(``).appendTo(topitem);
                }
                else{
                    let img=$(`${element.best_sellers}`).appendTo(topitem);
                }
            }

            if(element.hasOwnProperty("contents")){
                    let leftrightcontent=$(`<div class="leftrightcontent"></div>`);
                    let leftcontent=$(`<p class="leftcontent"><span>${element.contents.leftrightcontent.count}</span><br>${element.contents.leftrightcontent.leftcontent}</p>`).appendTo(leftrightcontent);
                    let rightcontent=$(`<p class="rightcontent"><span>${element.contents.leftrightcontent.countright}</span><br>${element.contents.leftrightcontent.rightcontent}</p>`).appendTo(leftrightcontent);
                    leftrightcontent.appendTo(this.$homesliderItem);
                    if (element.contents.hasOwnProperty("geoLocation")){
                        let location=$(`<span class="latitude">${element.contents.geoLocation.latitude}</span>`).appendTo(this.$homesliderItem);
                    }
                    if(element.contents.hasOwnProperty("rating")){
                        let ratting=$(`<div class="rating" style="cursor:pointer"></div>`).appendTo(this.$homesliderItem);
                       let k=0;
                       ratting.click(()=>{
                        let linkrating=element.contents.rating.link;
                        if(linkrating){
                            window.open(linkrating, '__blank');
                        }
                        else {
                            return false;
                        }
                       });
                       for(k==0; k<element.contents.rating.value; k++){
                           $(`<span class="fa fa-star checked"></span>`).appendTo(ratting);
                       }
                       let badge=$(`<span class="badge badge-light">review: ${element.contents.rating.review}</span>`).appendTo(ratting);
                    }
            }


            if(element.hasOwnProperty('buttonverticle')){
                let $verticlebtn=this.generateDOM('<div></div>',{'class':'verticale-button-container'});
                element.buttonverticle.contents.forEach(btn=>{
                    let verticlebtn=this.generateDOM('<button></button>', { 'class': 'button-verticle' }, {}, btn.title);
                    verticlebtn.appendTo($verticlebtn);
                    verticlebtn.click(()=>{
                          googleAnalytics.recordEvent({
                            eventCategory: btn.title,
                            eventAction: btn.link || btn.payload
                        })
                        if(btn.link){
                          window.open(btn.link, '__blank');
                        }
                        if(btn.payload){
                            socketModule.messageSend(btn.payload);
                        }
                    });
                });
                $verticlebtn.appendTo(this.$homesliderItem);
                }


             //default btn horizental
            if(element.hasOwnProperty('button')){
                let buttoncontainer=$(`<div class="slickbuttoncontainer"></div>`);
                element.button.contents.forEach(elements=>{
                     this.$button=$(`<button type="button" class="btn btn-primary btn-item">${elements.title}</button>`);
                     this.$button.appendTo(buttoncontainer);
                     this.$button.click(function(){
                         if(elements.hasOwnProperty('link')){
                            let link1=elements.link;
                            window.open(link1, '_blank');
                            googleAnalytics.recordEvent({
                                eventCategory:"Home Banner",
                                eventAction: link1
                            });
                         }
                         else{
                            socketModule.messageSend(elements.payload);
                            googleAnalytics.recordEvent({
                                eventCategory:"Home Banner",
                                eventAction: elements.payload
                            });
                         }    
                    });
                });
                buttoncontainer.appendTo(subcontents);
            }


            if(element.hasOwnProperty('iconbutton')){
                let iconbuttoncontainer=$(`<div class="slickiconbuttoncontainer"></div>`);
                element.iconbutton.contents.forEach(elements=>{
                     this.$iconbutton=$(`<button type="button" class="btn btn-primary btn-item"><img src="${elements.img}"><span>${elements.title}</span></button>`);
                     this.$iconbutton.appendTo(iconbuttoncontainer);
                     this.$iconbutton.click(function(){
                        socketModule.messageSend(elements.payload);
                    });
                });
                iconbuttoncontainer.appendTo(subcontents);
            }
            subcontents.appendTo(this.$homesliderItem);
            this.$homesliderItem.appendTo(this.$homeslider)
        }));
        this.$homeslider.appendTo(this.$menuContainer);
        this.$menuContainer.appendTo(this.$message);
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            dots: false,
            margin:10,
            nav:true,
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