import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
export var sliderButtonWithSlider = {
    data: {},
    init: function(data){        
        this.data = data;
        this.cacheDOM();
        this.render();
        this.bindEvents();
    },
    cacheDOM: function(){
        this.$message = $('#message-module');                                               
        this.$frameContainer = $('.message-section');                                                                               
    },
    bindEvents: function(){        
        let _this = this;
        
    },
    render: function(){
        if(this.$sliderButtonWithSliderContainer){
            this.$sliderButtonWithSliderContainer.remove();
        }
        this.$sliderButtonWithSliderContainer = $(`<div id="context-container12" class="context-container sliderwithbtnslider"></div>`);
        let topslider=$(`<div class="topslider"></div>`);
        topslider.appendTo(this.$sliderButtonWithSliderContainer);
        let ul = $(`<div class="owl-carousel owl-theme first-owl-sliderbtn"></div>`);
        let p=$(`<p>${this.data.subtitle}</p>`).appendTo(topslider)
        let hr=$(`<hr>`).appendTo(topslider);

        let btngroup=$(`<div class="btn-group" role="group" aria-label="Basic example"></div>`).appendTo(topslider);


       this.data.data.forEach((element, i) => {
           let li = $(`<div class="item"></div>`);
           let icondiv=$(`<div class="iconDiv"></div>`);
           let img=$(`<img src="${element.img}">`).appendTo(icondiv);
           let $title=$(`<p>${element.title}</p>`).appendTo(icondiv);
           icondiv.appendTo(li);
           li.appendTo(ul);
           let btn=$(` <button type="button" class="btn btn-secondary">${element.title+' ' +(i+1)}</button>`).appendTo(btngroup);
           btn.on('click',function(){
               $('.secondsliderButtom').remove();
               if($('.topslider button').attr("class","active_one_btn"))
                 {
                     $('.topslider button').removeClass("active_one_btn");
                 }
                 if($('.iconDiv img').attr("class","active_one"))
                 {
                     $('.iconDiv img').removeClass("active_one");
                 }
               btn.addClass("active_one_btn");
               img.addClass("active_one");
               if(element.slider){
                this.lowerSlider(element.slider);
               }
               return false   
           }.bind(this));
       });
       ul.appendTo(this.$sliderButtonWithSliderContainer);
       this.$sliderButtonWithSliderContainer.appendTo(this.$frameContainer);
       this.OwlGenerator({
            dots: false,
            margin:0,
            items:4,
            nav:true
        });
        //for initialising first slider to show slider 
        $('.iconDiv img:first').attr("class","active_one");
        $('.topslider button:first').attr("class","active_one_btn");
        this.lowerSlider(this.data.data[0].slider);
        this.renderMenuIcon('minus');
    },   
    hideContainer: function(event){        
        if(this.$sliderButtonWithSliderContainer){
            this.$sliderButtonWithSliderContainer.hide();
        }
    },
    generateDOM: function (tag, attribute, css, text) {
        let $dom = $(tag);
        attribute && $dom.attr(attribute);
        css && $dom.css(css);
        text && $dom.html(text);
        return $dom;
    },

    OwlGenerator:function(d1){
        var owl = $('.owl-carousel');
        owl.owlCarousel(d1);
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
    },

    lowerSlider:function(data){
        let ul1 = $(`<div class="owl-carousel owl-theme secondsliderButtom"></div>`);
        data.forEach(element=>{
            let li1 = $(`<div class="item"></div>`);
            if (element.hasOwnProperty('img')) {
                let $image =$(`<img src="${element.img}">`);
                $image.appendTo(li1);
            };
            if(element.hasOwnProperty('callactionBtn')){
                let btn=$(`<button type="button" class="btn call-to-action">${element.callactionBtn.title}<i class="fas fa-external-link-alt"></i></button>`).appendTo(li1);
                btn.click(()=>{
                    let link=element.callactionBtn.link;
                    window.open(link, '_blank');
                });
            }
            if(element.hasOwnProperty('contents')){
                let leftcontent=$(`<p class="leftcontent">${element.contents.leftrightcontent.leftcontent}</p>`).appendTo(li1);
                let rightcontent=$(`<p class="rightcontent">${element.contents.leftrightcontent.righcontent}</p>`).appendTo(li1);
                let iconcontainer=$(`<div class="iconcontainer"></div>`).appendTo(li1);
                if(element.contents.hasOwnProperty('icon')){
                    element.contents.icon.forEach(icons=>{
                        let icon=$(`<img src="${icons.icon}">`).appendTo(iconcontainer);
                    });
                }
             }
            if (element.hasOwnProperty('title')) {
                let $titletag = $(`<span>${element.title}</span>`);
                $titletag.appendTo(li1);
            };
            if (element.hasOwnProperty('subtitle')) {
                let $subtitletag = $(`<p>${element.subtitle}</p>`);
                $subtitletag.appendTo(li1);
            };
            if(element.hasOwnProperty("subtitlemain")){
                let $subtitletag = $(`<p style="margin-top: -28px;">${element.subtitlemain}</p>`);
                $subtitletag.appendTo(li1);
            }
            if(element.hasOwnProperty("button")){
                let btncontainer=$(`<div class="buttonContainer"></div>`);
                element.button.contents.forEach(elements=>{
                    let $btn = this.generateDOM('<button></button>', { 'class': ' btn', 'type':'button'},  {"color": "#f8f8f8","background": "var(--buttons)"
                    ,'margin' : '5px', 'border-radius' : '40px'} , elements.title  );
                    $btn.appendTo(btncontainer);
                    btncontainer.appendTo(li1);
                    $btn.click(function(){
                        if(elements.payload){
                            socketModule.messageSend(elements.payload);
                            googleAnalytics.recordEvent({
                                eventCategory: elements.title,
                                eventAction: elements.payload
                            });
                        }
                        else{
                            window.open(elements.link, '_blank');
                            googleAnalytics.recordEvent({
                                eventCategory: elements.title,
                                eventAction: elements.link
                            });
                        }
                    });
                });

            
            }

            if(element.hasOwnProperty('cardsection')){
                let cardsectionbody=$(`<div class="cardsectionbody"></div>`).appendTo(li1);
                element.cardsection.forEach(e=>{
                    let card=$(`<div class="cardsection"></div>`).appendTo(cardsectionbody);
                    let cardimg=$(`<img src="${e.image}">`).appendTo(card);
                    let cardbody=$(`<p class="card">${e.text}</p>`).appendTo(card)
                })
               
            }

            if(element.hasOwnProperty("cardwithicon")){
                let btncontainer=$(`<div class="cardbuttonContainer"></div>`);
                element.cardwithicon.contents.forEach(elements=>{
                   let div=$(`<div class=""></div>`);
                   let cardbody=$(`<img src="${elements.image}">`).appendTo(div);
                   let cardp=$(`<p>${elements.title}</p>`).appendTo(div)
                    div.appendTo(btncontainer);
                    btncontainer.appendTo(li1);
                    div.click(function(){
                        if(elements.payload){
                            socketModule.messageSend(elements.payload);
                            googleAnalytics.recordEvent({
                                eventCategory: elements.title,
                                eventAction: elements.payload
                            });
                            this.renderMenuIcon('plus');
                        }
                        else{
                            window.open(elements.link, '_blank');
                            googleAnalytics.recordEvent({
                                eventCategory: elements.title,
                                eventAction: elements.link
                            });
                        }
                    }.bind(this));
                });

            }


            if(element.hasOwnProperty('footertext')){
                let footertext=$(`<ul class="footercard" style="font-size:13px"><span>For claim settlement, please send us an email at:</span></ul>`).appendTo(li1);
                 element.footertext.forEach(em=>{
                      let li=$(`<li><i class="fas fa-envelope" style="font-size:16px"></i>${em.text}</li>`).appendTo(footertext);
                      let link=em.link;
                      li.click(function(e){
                        e.preventDefault();
                        window.location.href = (link.match('@')) ? "mailto:" + link : link;
                      })
                })
            }

            li1.appendTo(ul1);
        });
        ul1.appendTo(this.$sliderButtonWithSliderContainer);
        this.OwlGenerator({
            dots: false,
            items:1,
            margin:10
        });
          $('#context').click(function () {
           $(`#context-container12`).remove();
        })
    }
}
