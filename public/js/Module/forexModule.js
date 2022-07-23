import { searchModule } from '../general/searchModule';
import { data as countryData } from '../data/countryData';
// import { tableModule } from '../general/tableModule';
import { generalReplyModule } from './generalReplyModule';
import { LoadingModule } from '../general/loading';
import { env } from '../../env';
import moment from 'moment';
import { TableModule } from './ShineModule/TableModule';

const axios = require('axios');


export var forexModule = {
    data: '',
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function () {
        this.$message = $('#message-module');
        this.$inputMsg=$('#message-input-module');
        this.$hideinput=$('#message-input-module .wrap');
        this.$keyboardSec=$('#outerDiv');
        this.$close=$('#outerDiv #context');
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

        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }

        if (Object.keys(this.data).length) {
            this.$container = $(`<div id="location-card"></div>`);

            if(this.data.hasOwnProperty("header")){
                $(`<span class="header">${this.data.header}</span>`).appendTo(this.$container);
            }
            if(this.data.date===true){
                let todaysdate=moment().format("YYYY-MM-DD");
                $(`<span class="text-center" style="display: block;">Today: ${todaysdate}</span>`).appendTo(this.$container);
            }

            let crosser=$(`<img src="images/banner/cancel3.png" style="position: absolute;width: 43px;right: 10px;top: -3px;cursor:pointer">`);
            crosser.appendTo(this.$container);
            crosser.click(()=>{
                this.clear();
                this.showContainer();
            })

            if(this.data.hasOwnProperty("img")){
                let header=$(`<img src="${this.data.img}" alt="loading..">`).appendTo(this.$container);
            }

            if (this.data.hasOwnProperty('subtitle')) {
                let text = Array.isArray(this.data.subtitle) ? this.data.subtitle.join('<br>') : this.data.subtitle;
                if (text) {
                    let $p = this.generateDOM('<p/>', { 'class': '' }, {}, text);
                    $p.appendTo(this.$container);
                }
            }

            if (this.data.hasOwnProperty('country')) {
                let countries = this.data.country;
                let $inputContainer = this.generateDOM('<div></div>', { 'class': 'form-group'});
                let $inputBox = this.generateDOM('<input/>', { 'id': 'search-input', 'placeholder': 'Search currency...' }, {});
                this.$errorContainer = this.generateDOM('<p/>', {'id': 'error-container'}, {'margin': '0', 'color': '#f20003'}, '');
                $inputBox.appendTo($inputContainer);
                this.$errorContainer.appendTo($inputContainer);
                $inputContainer.appendTo(this.$container);

                searchModule.clearModule();
                searchModule.init(countryData);
            }

            if (this.data.hasOwnProperty('button')) {
                let $btnContainer = this.generateDOM('<div></div>', {
                    'class': 'button-container'
                });
                this.data.button.contents.forEach((content, btnIndex) => {
                    let $btn = this.generateDOM('<button></button>', {}, {}, content.title);
                    $btn.appendTo($btnContainer);
                    if (content.type === 'exchange_rate') {
                        let _click = true; // set to prevent multiple click
                        $btn.on('click', function (event) {
                            if(!_click){
                                return;
                            }
                            _click = false;
                            let selectedCountry = searchModule.sendSelectedItem();                            
                            let url = `${env.protocol}://${env.server}:${env.port}${env.basePath}forex/${selectedCountry}?date=${moment().format("YYYY-MM-DD")}`;
                            // console.log("this is url",url)
                            if (selectedCountry) {
                                LoadingModule.init('#message-input-module');
                                this.clear();
                                this.showContainer();
                                $('#context img').attr('src', "images/banner/cancel.png");
                                // console.log("countery selected",)
                                axios.get(url)
                                    .then((result) => {   
                                        // console.log("forex result",result);                            
                                        TableModule.clear();
                                        TableModule.init(result.data);
                                        this.$errorContainer.html('');
                                        LoadingModule.clear();
                                        this.clear();
                                        _click = true;
                                    }).catch((err) => {
                                        generalReplyModule.init('Sorry there due to some technical problem forex is not fetched.');
                                        LoadingModule.clear();
                                        this.clear();
                                        _click = true;
                                    });                                
                            }
                            else{
                                _click = true;
                                this.$errorContainer.html('Please select country');
                            }
                        }.bind(this))
                    }
                });

                $btnContainer.appendTo(this.$container);
            }

            this.$container.appendTo(this.$inputMsg);
           this.hideContainer();

           $('#context img').click(function(){
                this.showContainer();
            }.bind(this));
            $('#context').click(function(){
                this.showContainer();
            }.bind(this));
        }

        this.scrollBottom();
    },
    showContainer:function(){
        this.clear();
        $('#frame .content .messages').css({"max-height":" calc(100% - 120px)","min-height":"calc(100% - 120px)"});
        this.$hideinput.css("display","flex"); 
        this.$close.css("display","none");
        // $('#context img').attr('src', 'images/banner/plus.png');
        // $('.initialForm').css("visibility", "visible");
        // $('.LiveFormBtn').css("visibility", "visible");
        $('#outerDiv').removeClass('without-after-element');
        this.$container.remove();
    },
    hideContainer:function(){
        this.$hideinput.css("display","none");
        $('#outerDiv').addClass('without-after-element');
        // $('.initialForm').css("visibility", "hidden");
        // $('.LiveFormBtn').css("visibility", "hidden");
        $('#frame .content .messages').css({"max-height":"376px","min-height":"376px"});
    },
    showContainer1:function(){
        this.clear();
        $('#frame .content .messages').css({"max-height":" calc(100% - 120px)","min-height":"calc(100% - 120px)"});
        $('#message-input-module .wrap').css("display","flex"); 
        $('#outerDiv #context').css("display","none");
        $('#outerDiv').removeClass('without-after-element');
        $('#location-card').remove();
    },
    clear: function () {
        this.init({});
        this.$errorContainer && this.$errorContainer.html('');
    }
}