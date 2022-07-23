import { env } from '../../../env';
import { socketModule } from '../../core/socket';
import { googleAnalytics } from '../../general/googleAnalytics';

export var ListReplyModule = {
    data: '',
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
        this.bindEvents();
    },
   cacheDOM: function () {
        this.$parentElem = $('#message-module .message-section ul');
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    bindEvents:function(){
        let _this=this;
        this.$sub_card.find('.arrow').on('click', {_this: this}, this.btnClick);
        this.$parentElem.find('#cancel_btn').on('click', {_this: this}, this.backBtnClick);
    },
    render: function () {
        // if(this.$parentElem){
        //     $("#Back_btn").remove();
        // }
        this.renderElem = $('<li class="sent"><img src=' + env.Orgimg + ' alt="" /><p>' + this.data.title + '</p></li>');
        this.renderElem.appendTo(this.$parentElem);

 

        this.$sub_card = $('<div class="bg-white m-auto pl-4 pt-3 col-10 rounded-top rounded-bottom border border-none" id="sub_Card"></div>');
        this.cancel_img = $('<img class="float-right font_size " id="cancel_btn" src="../images/cross.png">')
        this.cancel_img.appendTo(this.$sub_card)     

        this.$div_container = $(`<h3 class="text-left ps-2 fw-bold">${this.data.title}</h3>`);
        this.$div_container.appendTo(this.$sub_card);

        this.$underline = $('<div class="box"></div>');
        this.$underline.appendTo(this.$sub_card);

        this.$Position = $('<div class="position_div"></div>');
        
        this.$text_wrapper = $('<div class="pt-3" id="listreply"></div>');

        let variable=this.data.data;

// mapping json array element 
        variable.map((element)=>{
        this.$arrow = $(`<div class="arrow sub_textHover p-0  d-flex">${element.prev}<p class="pl-3" ><a href="#">${element.title}</a></p></div>`);
        this.$arrow.appendTo(this.$text_wrapper);

        })
        this.$text_wrapper.appendTo(this.$Position);


        this.image_container = $('<div class="img_container img_position pt-3"></div>');

        this.img_icon = $(`<img src=${this.data.icon} alt="" class="img-fluid"/>`);
        this.img_icon.appendTo(this.image_container);
        this.image_container.appendTo(this.$sub_card);

        this.$Position.appendTo(this.$sub_card);

        this.$sub_card.appendTo(this.$parentElem);
        this.scrollBottom();

        // this.BackButton=$(`<button class="btn btn-secondary rounded-pill float-right mr-5 mb-2" id="Back_btn" > ${this.data.clickIcon.name} </button>`)
        // this.BackButton.appendTo(this.$parentElem);

        

// hide and show buttton after  page is loaded
        // $(document).ready(function(){
        // $("#Back_btn").hide();
        //     $(".sub_textHover").click(function(){
        //         $("#Back_btn").show();

        //     })
        // });
    },
// click event for back menu.
    backBtnClick:function(event){
        let _this = event.data._this;
        let payload = _this.data.clickIcon.payload;
        googleAnalytics.recordEvent({
            eventCategory: _this.data.title,
            eventAction: payload,
            eventLabel:_this.data.clickIcon.name
        });
        socketModule.messageSend(payload);
    },

// click event for sub menu content
    btnClick:function(event){
        let _this = event.data._this;
        let index = $(this).index();
        let payload = _this.data.data[index].payload;
        googleAnalytics.recordEvent({
            eventCategory: _this.data.title,
            eventAction: payload,
            eventLabel: _this.data.data[index].title
        });
        _this.$sub_card.hide();
        socketModule.messageSend(payload);
    },
    // clear the container
    clear: function () {
        if (this.$sub_card) {
            this.$sub_card.remove();
        }
    },
}

