import { socketModule } from '../../core/socket';
import { googleAnalytics } from '../../general/googleAnalytics';

export var NewHomeModule = {
    data: '',
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
        this.bindEvents();
    },
    cacheDOM: function () {
        this.$frameContainer = $('#frame');
        this.$language_wrap = $('#language_nepali');
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    bindEvents: function () {
        let _this = this;
        this.$container.find('.box_click').on('click', { _this: this }, this.clickIcon);
        // this.$button.off('click');
        // this.$button.on('click', this.toggleContainer.bind(this));
    },
    render: function () {
        this.$container = $('<div class="container-fluid p-0 font_century"></div>');
        this.scrollBottom();

        this.$htmls = $(`<div class="container-fluid col-12 p-0 d-flex" id="homeModule"></div>`);

        this.$col_spand = $('<div class="col-6 pl-1 bg_col1"></div>');

        this.$text = $(`<h5 class=" text-white font_century p-3" id="wrap_header"> ${this.data.Header}</h5>`);
        this.$text.appendTo(this.$col_spand);

        this.$sub_col = $('<div class="d-flex text_hover justify-content-center margin_col"></div>')
        this.$img1 = $('<a target="_blank" href="https://reliablelife.com.np/introduction"><img src="../../images/img/insurance1.png" alt="" id="Rotate_img" class="img-fluid shine_img"/></a>')
        this.$img1.appendTo(this.$sub_col);
        this.$sub_col.appendTo(this.$col_spand);

        this.$para = $(`<p class="text-align-justify z_index text_size p-2 font_century"> ${this.data.subHeader}</p>`);
        this.$para.appendTo(this.$col_spand);
        this.$col_spand.appendTo(this.$htmls)



        this.$secCol = $('<div class="col-6 second_col"></div>');
        this.$textCenter = $('<div class="text-center"></div>')


        this.$imgDiv = $('<div class="img_bluck"></div')
        
        this.$img2 = $(`<img src="../../images/img/reliablelogo.png" alt="" class="img-fluid" />`);
                this.$img2.appendTo(this.$imgDiv);
                this.$imgDiv.appendTo(this.$textCenter);

                this.$headingDiv = $('<div class=" p-0 margin_left"></div>');

                let imgArray=this.data.data;
        imgArray.map(element=>{
                    this.$blockDiv = $('<div class="d-block box_click text_hover"></div>');
                this.$flexDiv = $('<div class="d-flex mb-2"></div>');
                this.$circle = $('<div class="circle bg-white"></div>');
                this.$text_center = $('<div class="text-center icon pt-2"></div>');
                this.$img3 = $(`<img src=${element.icon} alt=${element.title} />`);

                this.$img3.appendTo(this.$text_center);
                this.$text_center.appendTo(this.$circle);
                this.$circle.appendTo(this.$flexDiv);

                this.$relPosition = $('<div class="text-danger position-relative"></div>');
                this.$heading6 = $(`<p class="textNew font_size mb-0">${element.title}</p>`);
                this.$heading6.appendTo(this.$relPosition);
                this.$underline = $('<div class="line"></div>');
                this.$underline.appendTo(this.$relPosition);


                this.$relPosition.appendTo(this.$flexDiv);
                this.$flexDiv.appendTo(this.$blockDiv);
                this.$blockDiv.appendTo(this.$headingDiv);
                this.$headingDiv.appendTo(this.$textCenter);
                this.$textCenter.appendTo(this.$secCol);
                this.$secCol.appendTo(this.$htmls);
        })
                this.$htmls.appendTo(this.$container);
                this.$container.appendTo(this.$frameContainer);

                if(this.data.languagetype==="nep"){
                    this.$text.css("fontSize", "17px")
                    this.$para.css("fontSize","15px")
                 }
                else{
                    this.$text.css("fontSize", "18px")
                }
    },
                clickIcon: function (event) {
                    let _this = event.data._this;
                // console.log('this is this',_this)
                let index = $(this).index();
                // console.log("this is index",index
                let payload = _this.data.data[index].payload;
                let payload1={title:_this.data.data[index].title,payload:_this.data.data[index].payload}
                _this.$container.hide();
                socketModule.messageSend(payload1);
                _this.renderMenuIcon('minus');

     
      
        
    },
    // toggleContainer: function (event) {
                    //     this.$container.toggle();
                    // },
                    Show: function(event){        
        if(this.$Container){
                    this.$Container.show();
       }
    },
                hideContainer: function (event) {
        if (this.$container) {
                    this.$container.remove();
        }
    },
                renderMenuIcon: function (flag) {
                    let img = '';
                let minus = 'images/banner/plus.png';
                let plus = 'images/banner/list.png';
                if (flag === 'plus') {
                    img = plus;
        }
                else {
                    img = minus;
          
        }
                $('#context img').attr('src', img);
    }
}