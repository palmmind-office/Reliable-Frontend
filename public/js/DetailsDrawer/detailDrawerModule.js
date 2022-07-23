import { socketModule } from '../core/socket';
import { shairModule } from '../Services/shairModule'
import { sliderModule } from '../Module/sliderModule'
import { env } from '../../env';
export var Detaildrawer = {
    data: {},
    currentSlide: 0,
    init: sliderModule.init,
    cacheDOM: sliderModule.cacheDOM,
    scrollBottom: sliderModule.scrollBottom,

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

        if (this.data.data) {
            this.$frameContainer = $('.message-section');
            this.$container = $(`<div id="detailDrawer"></div>`);
            this.$container.css('font-size', '14px');
            let $owlCarousel = $(`<div class="owl-carousel owl-theme"></div>`);
            this.data.data.forEach((element, index) => {

                //main section
                let $slideContainer = $(`<div class="slide-container"></div>`);
                if (element.hasOwnProperty('img')) {
                    let $image = shairModule.generateDOM('<img/>', {
                        'src': element.img,
                        'alt': 'Loading...',
                        'class': 'slider-image'
                    });
                    $image.appendTo($slideContainer);
                }
                if (element.hasOwnProperty('title')) {
                    let text = Array.isArray(element.title) ? element.title.join('<br>') : element.title;
                    let $h3 = shairModule.generateDOM('<h3/>', {}, {}, text);
                    $h3.appendTo($slideContainer);
                }
                if (element.hasOwnProperty('subtitle')) {
                    let text = Array.isArray(element.subtitle) ? element.subtitle.join('<br>') : element.subtitle;
                    if (text) {
                        let $p = shairModule.generateDOM('<p/>', { 'class': 'block-with-text' }, {}, text);
                        $p.appendTo($slideContainer);
                    }
                }
                if (element.hasOwnProperty('button')) {
                    let $btnContainer = shairModule.generateDOM('<div></div>', {
                        'class': 'button-container'
                    });
                    $btnContainer.css({ 'padding-bottom': '10px' });
                    element.button.contents.forEach((content, btnIndex) => {
                        let target = content.id + "123";

                        //modelBox creating
                        let $popContainer = $(`<div class="popDetailsContainer modal fade" id=${target} aria-hidden="true"></div>`);
                        let $popdialog = $(`<div class="modal-dialog" role="document"></div>`).appendTo($popContainer);
                        let $popContent = $(`<div class="modal-content"></div>`).appendTo($popdialog);
                        let $popheader = $(`<div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span>
                            </button>
                            <h5 class="modal-title" id="exampleModalLongTitle">${content.Details.title}</h5></div>`).appendTo($popContent);
                        let $modelbody = $(`<div class="modal-body"></div>`).appendTo($popContent);
                        $(`<h3 class="subtitle">${content.Details.subtitle}</h3>`).appendTo($modelbody);

                        let text = $(`<p>${content.Details.paragraph}</p>`).appendTo($modelbody);


                        //for subtitle in side modelBody
                        if (content.Details.hasOwnProperty("imgtitle")) {
                            $(`<h6>${content.Details.imgtitle}</h6>`).appendTo($modelbody);
                        }
                        //for model body inside 
                        if (content.Details.hasOwnProperty("img")) {
                            content.Details.img.forEach(element1 => {
                                let $image1 = shairModule.generateDOM('<img/>', {
                                    'src': element1.img,
                                    'alt': 'Loading...',
                                    'class': 'slider-image',
                                });
                                $image1.appendTo($modelbody);
                                if (element1.hasOwnProperty("subtitle")) {
                                    let imageText = $(`<p>${element1.subtitle}</p>`).appendTo($modelbody);
                                }
                            });
                        }

                        //for model button inside body
                        if (content.Details.hasOwnProperty("button")) {
                            let $btn1container = $(`<div class="popDetailsButton"></div>`);
                            content.Details.button.contents.forEach(element2 => {
                                let $btn1 = $(`<button type="button" class="btn btn-primary" data-dismiss="modal">${element2.title}</button>`).appendTo($btn1container);
                                $btn1.click(() => {
                                    socketModule.messageSend(element2.payload);
                                    $('.popDetailsContainer').attr('data-dismiss', 'modal');
                                }).bind(this);
                                $btn1container.appendTo($modelbody);
                            })
                        }
                        let $modelfooter = $(`<div class="modal-footer" style="display:block;">
                            <button type="button" class="btn btn-secondary" style="float:left" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-secondary" style="float:right">Save changes</button>
                        </div>`).appendTo($popContent);
                        // $popContainer.appendTo(this.$frameContainer);
                        let $btn = shairModule.generateDOM('<button data-toggle="modal"></button>', { 'class': 'button pl-3 pb-0' }, {}, content.title);
                        $btn.attr("data-target", "#" + target);


                        // for new tab purposed
                        $btn.click(() => {
                            let win = $('#botinitialised');
                            let detailcontainer = $(`<div class="detailcontainer"></div>`);
                            if ($('#botinitialised .detailcontainer')) {
                                $('#botinitialised .detailcontainer').remove();

                                // here starting the code for remove detail container after clicking prev and next button
                                $('.owl-nav .owl-next').on('click', function () {
                                    // $('.owl-nav .owl-next').addClass('disabled');
                                    detailcontainer.remove();
                                })
                                $('.owl-nav .owl-prev').on('click', function () {
                                    // $('.owl-nav .owl-prev').addClass('disabled');
                                    detailcontainer.remove();
                                })
                            }
                            else {
                                return
                            }
                            detailcontainer.appendTo(win);
                            let detailheader = $(`<div class="header"></div>`).appendTo(detailcontainer);
                            let headercon = $(`<h3 class="title">${content.Details.title}</h3>`).appendTo(detailheader);
                            let closeicon = $(`<i class="fas fa-times-circle close" style="color: #063684;opacity: 1;"></i>`).appendTo(detailheader);
                            closeicon.click(() => {
                                detailcontainer.remove();
                            })
                            let detailbody = $(` <div class="bodysec"></div>`).appendTo(detailcontainer);
                            if (content.Details.hasOwnProperty("subtitle")) {
                                $(`<h4 class="subtitle">${content.Details.subtitle}</h4>`).appendTo(detailbody);
                            }
                            if (content.Details.hasOwnProperty("paragraph")) {
                                let bodycont = $(`<p style="color:#333;text-indent: 35px;">${content.Details.paragraph}</p>`).appendTo(detailbody);
                            }

                            if (content.Details.hasOwnProperty("subtitle1")) {
                                content.Details.subtitle1.forEach(element => {
                                    let bodycont = $(`<h4 style="color:#333">${element.title}</h4>`).appendTo(detailbody);
                                    if (element.hasOwnProperty("subtitle")) {
                                        $(`<p>${element.subtitle}</p>`).appendTo(detailbody);
                                    }
                                    if (element.hasOwnProperty("listitem")) {
                                        if (element.listitem[0].paragraph) {
                                            console.log("here is hit")
                                            let ul = $("<ul></ul>").appendTo(detailbody);
                                            element.listitem.forEach(element => {
                                                let li = $(`<li>${element.text}</li>`).appendTo(ul);
                                                li.css({ 'cursor': 'pointer' });
                                                console.log("this is hit", element.text)
                                                let listul = $('<ul></ul>').appendTo(li)
                                                let lists = $(`<li class="pt-3">${element.paragraph}</li>`).appendTo(listul)
                                                lists.css({ 'list-style': 'none' })
                                                listul.hide()
                                                li.click(function () {
                                                    listul.toggle()

                                                })
                                            })
                                        } else {
                                            let ul = $("<ul></ul>").appendTo(detailbody);
                                            element.listitem.forEach(el => {
                                                let li = $(`<li>${el.text}</li>`).appendTo(ul);
                                                li.css({ 'cursor': 'pointer' });
                                                if (el.hasOwnProperty("lists")) {
                                                    let listul = $("<ul></ul>").appendTo(li)
                                                    listul.css({ 'margin-top': '5px' })

                                                    el.lists.forEach(em => {
                                                        let lists = $(`<li>${em.text}</li>`).appendTo(listul)
                                                        lists.hide()
                                                        li.click(function () {
                                                            lists.toggle()

                                                        })
                                                    })

                                                }


                                            })
                                        }
                                    }
                                })
                            }
                            if (content.Details.hasOwnProperty("img")) {
                                content.Details.img.forEach(element1 => {
                                    let $image2 = shairModule.generateDOM('<img/>', {
                                        'src': element1.img,
                                        'alt': 'Loading...',
                                        'class': 'slider-image',
                                    });
                                    $image2.appendTo(detailbody);
                                    if (element1.hasOwnProperty("subtitle")) {
                                        let imageText1 = $(`<p style="color:#333" class="detailimgtext">${element1.subtitle}</p>`).appendTo(detailbody);
                                    }
                                })
                            }

                            if (content.Details.hasOwnProperty("button")) {
                                let $btn2container = $(`<div class="popDetailsButton"></div>`).appendTo(detailbody);
                                content.Details.button.contents.forEach(element3 => {
                                    let $btn2 = $(`<button type="button" class="btn btn-primary">${element3.title}</button>`);
                                    $btn2.appendTo($btn2container);
                                    $btn2.click(() => {
                                        let payload = element3.payload;
                                        if (payload) {
                                            socketModule.messageSend(element3.payload);
                                            detailcontainer.remove();
                                        }
                                        else if (payload == undefined) {
                                            let link = element3.link;
                                            window.open(link, '_blank');
                                        }
                                    });
                                })
                            }

                        }).bind(this)
                        $btn.appendTo($btnContainer);
                        // back button
                        if (content.hasOwnProperty("Back_icon")) {
                            let $btn_back = shairModule.generateDOM('<button data-toggle="modal"></button>', { 'class': 'button pl-3 pb-0' }, {}, content.Back_icon.title);
                            $btn_back.css({ 'float': 'right', 'margin-right': '12px' })
                            $btn_back.click(function () {
                                socketModule.messageSend(content.Back_icon.payload)
                            })
                            $btn_back.appendTo($btnContainer);
                        }
                        // let arrowLeft=$(`<i class="fas fa-long-arrow-alt-right" data-toggle="modal" data-target="${"#"+target}"></i>`).appendTo($btnContainer);
                    });
                    $btnContainer.appendTo($slideContainer);
                }
                $slideContainer.appendTo($owlCarousel);
            });
            $owlCarousel.appendTo(this.$container);
            this.$container.appendTo(this.$message);
            this.scrollBottom();


            $(document).ready(() => {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    lazyLoad: true,
                    loop: false,
                    rewind: false,
                    dots: false,
                    margin: 15,
                    smartSpeed: 800,
                    nav: true,
                    items: 1
                });
                owl.on('changed.owl.carousel', function (property) {
                    this.currentSlide = property.page.index;
                }.bind(this));
                this.scrollBottom();
            });
            $('#context').on('click', function () {
                $('.detailcontainer').remove();
            })
        }
    },

    poptastic: function (url) {
        // let newwindow=window.open(url,'__blank','height=500,width=500, top=80, left=250,resizable=yes,scrollbars=no,toolbar=yes,status=yes, right=200');
        // if (window.focus) {newwindow.focus()}   
        let frame = $(`<div id="detailIframe"></div>`);
        let icon = $(` <i style="float: right; margin: 14px;" class="fas fa-times detailsclosed"></i>`).appendTo(frame);
        let iframe = $(`<iframe title="detailiframe" src="${url}" id="iframe_a"></iframe>`).appendTo(frame);
        icon.click(() => {
            frame.remove();
        })
        // let win=window.parent.$('#palmbot');
        // frame.insertBefore(win);
        frame.insertBefore(this.$frameContainer);
    },

    clear: sliderModule.clear
}
