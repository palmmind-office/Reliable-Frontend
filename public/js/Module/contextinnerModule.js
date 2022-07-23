import { socketModule } from '../core/socket';
import { multipleTitle } from '../general/multipleTitleModule';
import { cookie } from '../general/cookie';

export var contextinner = {
    data: {},
    loaded: false,
    init: function (data) {
        this.context = $('#context-container');
        if (this.context) {
            this.context.remove();
        }
        this.data = data;
        this.cacheDOM();
        this.render();
        this.bindEvents();
        this.loaded = true;
    },
    cacheDOM: function () {
        this.$message = $('#message-module');
        this.$frameContainer = $('.message-section');
    },
    bindEvents: function () {
        let _this = this;
        this.$innerContainer.find('.call-in').on('click', { _this: this }, this.clickIcon);

    },
    render: function () {
        $('.LiveFormBtn').css("visibility", "hidden");
        if (this.$innerContainer) {
            this.$innerContainer.remove();
        }
        let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
        this.$innerContainer = $(`<div id="context-container" style="padding:20px"></div>`);
        let username = cookie.getCookie('userName');
        let texttit = $(`<div class="context-title"></div>`);
        if (this.data.hasOwnProperty("clickIconPrev")) {
            let clickIconPrev = $(`<i id="back" class="fa fa-arrow-left" aria-hidden="true"></i>`).appendTo(texttit);
            clickIconPrev.click(function () {
                socketModule.messageSend(this.data.clickIconPrev.payload);
            }.bind(this));
        }
        // if(username){
        //     let cookiesname=$(`<span class="welcometit">Welcome! ${username}</span>`).appendTo(texttit);
        // }
        // if(!username){
        //     let cookiesname=$(`<span class="welcometit">Welcome! customer</span>`).appendTo(texttit); 
        // }
        let textp = $(`<p>${text}</p>`).appendTo(texttit);
        texttit.appendTo(this.$innerContainer);
        if (this.data.hasOwnProperty('maintitle')) {
            let subtext1 = $(`<p class="subtext" style="text-align:justify">${this.data.maintitle}</p>`);
            subtext1.appendTo(this.$innerContainer);
        }
        if (this.data.hasOwnProperty('subtitle')) {
            let subtext = $(`<p class="subtext">${this.data.subtitle}</p>`);
            subtext.appendTo(this.$innerContainer);
        }
        this.$innerContainer.appendTo(this.$frameContainer);
        let container = $(`<div class="call-in-container"></div>`);
        let contents = '';
        this.data.data.forEach(element => {
            contents += `<div class="call-in">
                            <p class="title">${element.title}</p>
                            <i class="fa fa-chevron-right"></i>
                        </div>`;
        });

        this.$contents = $(contents);
        this.$contents.appendTo(container);
        container.appendTo(this.$innerContainer);
        $('#context').click(function () {
            $('.initialForm').css({ "visibility": "visible", "display": "block !important" });
            $('.LiveFormBtn').css({ "visibility": "visible", "display": "block !important" });
        })
        this.renderMenuIcon('minus');
    },
    clickIcon: function (event) {
        let _this = event.data._this;
        let index = $(this).index();
        let payload = _this.data.data[index].payload;
        if (payload) {
            _this.$innerContainer.hide();
            _this.renderMenuIcon('plus');
            socketModule.messageSend(payload);
            $('.initialForm').css({ "visibility": "visible", "display": "block !important" });
            $('.LiveFormBtn').css({ "visibility": "visible", "display": "block !important" });
        }
        else {
            _this.$innerContainer.hide();
            _this.renderMenuIcon('plus');
            let innercontent = _this.data.data[index].innercontent;
            multipleTitle.init(innercontent);
            $('.initialForm').css({ "visibility": "visible", "display": "block !important" });
            $('.LiveFormBtn').css({ "visibility": "visible", "display": "block !important" });
        }


    },
    hideContainer: function (event) {
        if (this.$innerContainer) {
            this.$innerContainer.remove();
        }
    },
    show: function (event) {
        if (this.$innerContainer) {
            this.$innerContainer.show();
        }
    },
    renderMenuIcon: function (flag) {
        let img = '';
        let minus = 'images/banner/cancel.png';
        let plus = 'images/banner/plus.png';
        if (flag === 'plus') {
            img = plus;
        }
        else {
            img = minus;
        }
        $('#context img').attr('src', img);
    }
}

// contextinner data format 
// let msg = {
//     title: "Hello world",
//     type: "contextinner",
//     data: [{
//       title: 'Banking Services',
//       payload: 'Banking Services',
//       icon: 'images/icons/product.png'
//     }]
//   }