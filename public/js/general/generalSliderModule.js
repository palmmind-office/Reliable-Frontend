import { socketModule } from '../core/socket';
import { googleAnalytics } from './googleAnalytics';
import { env } from '../../env';
export var generalSliderModule = {
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
    getIcon: function (key) {
        key = key.toLowerCase();
        let icon = '';
        switch (key) {
            case 'Address':
                icon = 'fas fa-map-marker-alt';
                break;
            case 'Phone':
                icon = '';
                break;
            case 'phone':
                icon = 'fas fa-phone-volume';
                break;
            case 'email':
                icon = 'fas fa-envelope';
                break;
            case 'Email':
                icon = '';
                break;
            case 'facebook':
                icon = 'fab fa-facebook';
                break;
            case 'viber':
                icon = 'fab fa-viber';
                break;
            case 'mobile':
                icon = 'fas fa-mobile';
                break;
            default:
                icon = '';
        }

        return icon;
    },
    render: function () {
        // if (this.$container) {
        //     this.$container.remove();
        // }
       
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }

        if (this.data.data.length) {
            this.$container = $(`<div id="generalslider"></div>`);
            this.$container.css('font-size', '14px');
            let $owlCarousel = $(`<div class="owl-carousel owl-theme"></div>`);
            this.data.data.forEach((element, index) => {
                let $slideContainer = $(`<div class="slide-container"></div>`);
                if (element.hasOwnProperty('img')) {
                    let $image = this.generateDOM('<img/>', {
                        'src': element.img,
                        'alt': 'Loading...',
                        'class': 'slider-image'
                    });
                    $image.appendTo($slideContainer);
                }

                if (element.hasOwnProperty('map')) {
                    let $mapContainer = $(`<iframe src="https://maps.google.com/maps?q=${element.map.latitude},${element.map.longitude}&hl=es;z=19&amp;output=embed" width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>`);
                    $mapContainer.css({
                        'border': '1px solid #ccc'
                    });
                    $mapContainer.appendTo($slideContainer);
                }
                if (element.hasOwnProperty('title')) {
                    let text = Array.isArray(element.title) ? element.title.join('<br>') : element.title;
                    let $h3 = this.generateDOM('<h3/>', {}, {}, text);
                    $h3.appendTo($slideContainer);
                }
                if (element.hasOwnProperty('subtitle')) {
                    let text = Array.isArray(element.subtitle) ? element.subtitle.join('<br>') : element.subtitle;
                    if (text) {
                        let $p = this.generateDOM('<p/>', { 'class': 'block-with-text' }, {}, text);
                        $p.appendTo($slideContainer);
                    }
                }
                if(element.hasOwnProperty("people")){
                  let people=$(`<p class="peoplerole"><i class="fas fa-user"></i>  ${ element.people.role}</p>`).appendTo($slideContainer);
                  let phone=$(`<p class="peoplerole"><i class="fas fa-phone"></i>${ element.people.phone}</p>`).appendTo($slideContainer)
                }
                if (element.hasOwnProperty('features')) {
                    for (let key of Object.keys(element.features)) {
                        if (element.features[key]) {
                            let text = Array.isArray(element.features[key]) ? `${key} : ${element.features[key].join('<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')}` : `${key} : ${element.features[key]}`;
                            if (text) {
                                let $p = this.generateDOM('<p/>', {}, { 'padding': '4px 10px 4px 10px' ,'margin-bottom': '0px'});
                                let $icon = this.generateDOM('<i/>', { 'class': this.getIcon(key) }, { 'margin': '5px' });
                                $icon.appendTo($p);
                                $p.append(text);
                                $p.appendTo($slideContainer);
                            }
                        }
                    }
                }
                if (element.hasOwnProperty('button')) {
                    let $btnContainer = this.generateDOM('<div></div>', {
                        'class': 'button-container'
                    });
                    element.button.contents.forEach((content, btnIndex) => {
                        let $btn = this.generateDOM('<button></button>', { 'class': 'button' }, {}, content.title);
                        $btn.click(()=>{
                          googleAnalytics.recordEvent({
                            eventCategory: content.title,
                            eventAction: content.link || content.payload,
                        })
                        });
                        $btn.appendTo($btnContainer);
                    });
                    $btnContainer.appendTo($slideContainer);
                }
                $slideContainer.appendTo($owlCarousel);
            });

            $owlCarousel.appendTo(this.$container);
            this.$container.appendTo(this.$message);

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
                    items: 1
                });
                owl.on('changed.owl.carousel', function (property) {
                    this.currentSlide = property.page.index;
                }.bind(this));

                owl.on('click', '.button', function (event) {
                    let btnIndex = $(event.currentTarget).index();
                    if (btnIndex > -1) {
                        let link = this.data.data[this.currentSlide].button.contents[btnIndex].hasOwnProperty('link') ? this.data.data[this.currentSlide].button.contents[btnIndex].link : '';
                        if (link) {
                            window.open(link, '__blank');
                        }

                        let payload = this.data.data[this.currentSlide].button.contents[btnIndex].payload;
                        if (payload) {
                            socketModule.messageSend(payload);
                            this.clear();
                        }
                    }
                }.bind(this));
                this.scrollBottom();
            });
        }
    },
    clear: function () {
        this.currentSlide = 0;
        this.data = {
            data: []
        };
        if (this.$container) {
            console.log('clear');
            this.$container.remove();
        }
    }
}

// let generalslider = {
//     type: 'generalslider',
//     data: [
//       {
//         title: ['Baglung Branch'],
//         subtitle: [],
//         features: {
//           'Address': ['Hospital Road-2', 'Baglung Dhaulagiri, 33300'],
//           'phone': '068-523090',
//           'email': 'baglung@laxmibank.com'
//         },
//         map: {
//           latitude: 28.2182405,
//           longitude: 83.986414
//         },
//         button: {
//           contents: [

//           ]
//         }
//       },
//       {
//         title: ['Auto Loan'],
//         img: 'https://yesrobot.yesbank.in//Content/Images/lap_yc4su1.png',
//         button: {
//           contents: [
//             {
//               title: "auto loan 1",
//               payload: "auto loan 1"
//             }
//           ]
//         }
//       },
//       {
//         title: ['Micro Finance Service'],
//         img: 'https://yesrobot.yesbank.in//Content/Images/afhl_nreofd.png',
//         button: {
//           contents: [
//             {
//               title: "Check Eligibility",
//               payload: "Check Eligibility"
//             }
//           ]
//         }
//       }
//     ]
//   };
