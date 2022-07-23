// import { socketModule } from '../core/socket';
// import { cookie } from '../general/cookie';

// export var contextouter = {
//     data: {},
//     loaded: false,
//     init: function (data) {
//         this.context = $('.message-section #context-container');
//         if (this.context) {
//             this.context.remove();
//         }
//         this.data = data;
//         this.cacheDOM();
//         this.render();
//         this.bindEvents();
//         $('.LiveFormBtn').css("visibility", "hidden");
//         $('#context img').attr('src', "images/banner/cancel.png");
//         this.loaded = true;
//     },
//     cacheDOM: function () {
//         this.$element = $('#context-menu');
//         this.$button = this.$element.find('button');
//         this.$frameContainer = $('#frame');
//     },
//     bindEvents: function () {
//         let _this = this;
//         this.$contextContainer.find('.callout').on('click', { _this: this }, this.clickIcon);
//         this.$contextContainer.find('.callout1').on('click', { _this: this }, this.clickIcon2);
//     },
//     render: function () {
//         if (this.$contextContainer) {
//             this.$contextContainer.remove();
//         }
//         let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
//         // <button id="toggleOuter"><i class="fas fa-times 2x"></i><i class="fas fa-bars 2x"></i></button>
//         this.$contextContainer = $(`<div id="context-container" class="outercontext"></div>`);

//         if (this.data.hasOwnProperty("maintitle")) {
//             let maintitle = $(`<p class="contextOuterManititle">
//             <span style="font-size: 18px;
//             font-weight: 600;
//             padding: 0px 0px 4px 0px;"><img src="images/img/ajod.jpg" style="width: 35px;"> ${this.data.maintitle.top_title}</span>
//             <span style=" font-size: 12px;">${this.data.maintitle.buttom_title}</span>
//              </p>`);
//             maintitle.appendTo(this.$contextContainer);
//         }
//         let username = cookie.getCookie('userName');
//         if (this.data.hasOwnProperty("title")) {
//             let outerTitleImg = $(`<div id="outerTitleImg"></div>`);
//             // if (username) {
//             //     let cookiesname = $(`<span class="welcometit">Welcome! ${username}</span>`).appendTo(outerTitleImg);
//             // }
//             // else {
//             //     let cookiesname = $(`<span class="welcometit">Welcome! Customer</span>`).appendTo(outerTitleImg);
//             // }
//             let textp = $(`<p id="outerTitle">${text}</p>`).appendTo(outerTitleImg);
//             outerTitleImg.appendTo(this.$contextContainer);
//         }

//         this.$contextContainer.appendTo(this.$frameContainer);
//         let container = $(`<div class="call-out-container"></div>`);
//         let container2 = $(`<div class="call-out-container2"></div>`);
//         let contents = '';
//         let contents_one = '';
//         this.data.data.forEach(element => {
//             contents += `<div class="call-out callout">
//                             <div class="img">
//                                 <img src="${element.icon}" alt="Loading">
//                             </div>
//                             <div class="descrp">
//                                 <p class="title">${element.title}</p>
//                                 <p class="subtitle">${element.subtitle}</p>
//                             </div>
//                             <i class="fas fa-chevron-right"></i>
//                         </div>`;
//         });

//         if (this.data.hasOwnProperty('submenuContents')) {
//             this.data.submenuContents.forEach((submenudata) => {
//                 contents_one += `<div class="call-out callout1">
//                             <div class="img">
//                                 <img src="${submenudata.icon}" alt="Loading">
//                             </div>
//                             <div class="descrp">
//                                 <p class="title">${submenudata.title}</p>
//                                 <p class="subtitle">${submenudata.subtitle}</p>
//                             </div>
//                         </div>`;
//             });
//         }
//         this.contents_one = $(contents_one);
//         this.contents_one.appendTo(container2)
//         container2.appendTo(this.$contextContainer);

//         this.$contents = $(contents);
//         this.$contents.appendTo(container);
//         container.appendTo(this.$contextContainer);

//         $('#context').click(function () {
//             $('.initialForm').css("visibility", "visible");
//             $('.LiveFormBtn').css("visibility", "visible");
//         })
//         container2.hide();
//         $('#toggleOuter .fa-times').hide();
//         $('#toggleOuter').on('click', () => {
//             $('#toggleOuter .fa-bars,#toggleOuter .fa-times').toggle(700);
//             $('.call-out-container, .call-out-container2').toggle(500);
//         }).bind(this);
//     },
//     clickIcon: function (event) {
//         let _this = event.data._this;
//         let index = $(this).index();
//         let payload = _this.data.data[index].payload;
//         _this.$contextContainer.hide();
//         _this.renderMenuIcon('plus');
//         socketModule.messageSend(payload);
//         $('.initialForm').css("visibility", "visible");
//         $('.LiveFormBtn').css("visibility", "visible");

//     },
//     clickIcon2: function (event) {
//         let _this = event.data._this;
//         let index = $(this).index();
//         let payload = _this.data.submenuContents[index].payload;
//         _this.$contextContainer.hide();
//         _this.renderMenuIcon('plus');
//         socketModule.messageSend(payload);
//     },
//     hideContainer: function (event) {
//         if (this.$contextContainer) {
//             this.$contextContainer.remove();
//         }
//     },
//     show: function () {
//         if (this.$contextContainer) {
//             this.$contextContainer.show();
//         }
//     },
//     renderMenuIcon: function (flag) {
//         let img = '';
//         let minus = 'images/banner/cancel.png';
//         let plus = 'images/banner/plus.png';
//         if (flag === 'plus') {
//             img = plus;
//             $('.initialForm').css("visibility", "visible");
//             $('.LiveFormBtn').css("visibility", "visible");
//         }
//         else {
//             img = minus;
//         }
//         $('#context img').attr('src', img);
//     }
// }


import { socketModule } from '../core/socket';
import { cookie } from '../general/cookie';

export var contextouter = {
    data: {},
    loaded: false,
    init: function (data) {
        this.context = $('.message-section #context-container');
        if (this.context) {
            this.context.remove();
        }
        this.data = data;
        this.cacheDOM();
        this.render();
        this.bindEvents();
        $('.initialForm').css("visibility", "hidden");
        $('.LiveFormBtn').css("visibility", "hidden");
        $('#context img').attr('src', "images/banner/cancel.png");
        this.loaded = true;
    },
    cacheDOM: function () {
        this.$element = $('#context-menu');
        this.$button = this.$element.find('button');
        this.$frameContainer = $('#frame');
    },
    bindEvents: function () {
        let _this = this;
        this.$contextContainer.find('.callout').on('click', { _this: this }, this.clickIcon);
        this.$contextContainer.find('.callout1').on('click', { _this: this }, this.clickIcon2);
    },
    render: function () {
        if (this.$contextContainer) {
            this.$contextContainer.remove();
        }
        let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
        // <button id="toggleOuter"><i class="fas fa-times 2x"></i><i class="fas fa-bars 2x"></i></button>
        this.$contextContainer = $(`<div id="context-container"></div>`);

        // if (this.data.hasOwnProperty("maintitle")) {
        //     let maintitle = $(`<p class="contextOuterManititle">${this.data.maintitle} </p>`);
        //     maintitle.appendTo(this.$contextContainer);
        // }
        let username = cookie.getCookie('userName');
        console.log("loginUserName = ", username);
        if (this.data.hasOwnProperty("title")) {
            let outerTitleImg = $(`<div id="outerTitleImg"></div>`);
            if (username) {
                let cookiesname = $(`<span class="welcometit">Welcome! ${username}</span>`).appendTo(outerTitleImg);
            }
            else {
                let cookiesname = $(`<span class="welcometit">Welcome! Customer</span>`).appendTo(outerTitleImg);
            }
            let textp = $(`<p id="outerTitle">${text}</p>`).appendTo(outerTitleImg);
            outerTitleImg.appendTo(this.$contextContainer);
        }

        this.$contextContainer.appendTo(this.$frameContainer);
        let container = $(`<div class="call-out-container"></div>`);
        let container2 = $(`<div class="call-out-container2"></div>`);
        let contents = '';
        let contents_one = '';
        this.data.data.forEach(element => {
            contents += `<div class="call-out callout">
                            <div class="img">
                                <img src="${element.icon}" alt="Loading">
                            </div>
                            <div class="descrp">
                                <p class="title">${element.title}</p>
                                <p class="subtitle">${element.subtitle}</p>
                            </div>
                            <i class="fa fa-chevron-right"></i>
                        </div>`;
        });

        if (this.data.hasOwnProperty('submenuContents')) {
            this.data.submenuContents.forEach((submenudata) => {
                contents_one += `<div class="call-out callout1">
                            <div class="img">
                                <img src="${submenudata.icon}" alt="Loading">
                            </div>
                            <div class="descrp">
                                <p class="title">${submenudata.title}</p>
                                <p class="subtitle">${submenudata.subtitle}</p>
                            </div>
                        </div>`;
            });
        }
        this.contents_one = $(contents_one);
        this.contents_one.appendTo(container2)
        container2.appendTo(this.$contextContainer);

        this.$contents = $(contents);
        this.$contents.appendTo(container);
        container.appendTo(this.$contextContainer);

        $('#context').click(function () {
            $('.initialForm').css("visibility", "visible");
            $('.LiveFormBtn').css("visibility", "visible");
        })
        container2.hide();
        $('#toggleOuter .fa-times').hide();
        $('#toggleOuter').on('click', () => {
            $('#toggleOuter .fa-bars,#toggleOuter .fa-times').toggle(700);
            $('.call-out-container, .call-out-container2').toggle(500);
        }).bind(this);
    },
    clickIcon: function (event) {
        let _this = event.data._this;
        let index = $(this).index();
        let payload = _this.data.data[index].payload;
        _this.$contextContainer.hide();
        _this.renderMenuIcon('plus');
        socketModule.messageSend(payload);
        $('.initialForm').css("visibility", "visible");
        $('.LiveFormBtn').css("visibility", "visible");

    },
    clickIcon2: function (event) {
        let _this = event.data._this;
        let index = $(this).index();
        let payload = _this.data.submenuContents[index].payload;
        _this.$contextContainer.hide();
        _this.renderMenuIcon('plus');
        socketModule.messageSend(payload);
    },
    hideContainer: function (event) {
        if (this.$contextContainer) {
            this.$contextContainer.remove();
        }
    },
    show: function () {
        if (this.$contextContainer) {
            this.$contextContainer.show();
        }
    },
    renderMenuIcon: function (flag) {
        let img = '';
        let minus = 'images/banner/cancel.png';
        let plus = 'images/banner/plus.png';
        if (flag === 'plus') {
            img = plus;
            $('.initialForm').css("visibility", "visible");
            $('.LiveFormBtn').css("visibility", "visible");
        }
        else {
            img = minus;
        }
        $('#context img').attr('src', img);
    }
}

