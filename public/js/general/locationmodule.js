import { socketModule } from '../core/socket';
import { LoadingModule } from '../general/loading';
import { generalReplyModule } from '../Module/generalReplyModule';
import { env } from '../../env';
import { generalSliderModule } from './generalSliderModule';
const axios = require('axios');

export var locationmodule = {
    data: {},
    init: function (data) {
        this.data = data;
        console.log('locationmodule init', data);
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
                let header=$(`<span class="header">${this.data.header}</span>`).appendTo(this.$container);
            }

            let crosser=$(`<img src="images/crs.png" style="position: absolute;width: 43px;right: 6px;top: 3px;cursor:pointer">`);
            crosser.appendTo(this.$container);
            crosser.click(()=>{
                this.clear();
                this.showContainer();
            })

            if(this.data.hasOwnProperty("img")){
                let header=$(`<img src="${this.data.img}" alt="loading..">`).appendTo(this.$container);
            }
            if(this.data.hasOwnProperty("notfoundimg")){
                let header=$(`<img src="${this.data.notfoundimg}" class="notfoundimg" alt="loading..">`).appendTo(this.$container);
            }
            if(this.data.hasOwnProperty("imgtext")){
                let imgtext=$(`<span class="imgtext">${this.data.imgtext}</span>`).appendTo(this.$container);
            }
            if (this.data.hasOwnProperty('subtitle')) {
                let text = Array.isArray(this.data.subtitle) ? this.data.subtitle.join('<br>') : this.data.subtitle;
                if (text) {
                    let $p = this.generateDOM('<p/>', { 'class': '' }, {}, text);
                    $p.appendTo(this.$container);
                }
            }

            if (this.data.hasOwnProperty('button')) {
                let $btnContainer = this.generateDOM('<div></div>', {
                    'class': 'button-container'
                });
                this.data.button.contents.forEach((content, btnIndex) => {
                    let $btn = this.generateDOM('<button></button>', {}, {}, content.title);
                    $btn.appendTo($btnContainer);
                    let dataTypeFor =this.data.for;
                    console.log('aaaa',dataTypeFor);
                    if (content.type === 'send_location') {
                        let _click = true; //set for multiple click prevent.
                        $btn.on('click', function (event) {
                            if (!_click) {
                                return;
                            }
                            _click = false;

                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(function (position) {
                                    LoadingModule.init('#message-input-module');
                                    locationmodule.clear();
                                    locationmodule.showContainer();
                                    axios({
                                        method: 'POST',
                                        url: `${env.protocol}://${env.server}:${env.port}${env.basePath}location/type?neartype=${dataTypeFor}`,
                                        data: {
                                            latitude: position.coords.latitude,
                                            longitude: position.coords.longitude
                                        }
                                    })
                                        .then(response => {
                                            _click = true;

                                            let type = response.data.type;
                                            if (type === 'generalslider') {
                                                generalSliderModule.init(response.data);
                                                $('#context img').attr('src', "images/banner/plus.png");
                                            }
                                            else if (type === 'general-reply') {
                                                generalReplyModule.init(response.data);
                                                $('#context img').attr('src', "images/banner/plus.png");
                                            }
                                            else {
                                                generalReplyModule.init('Sorry there due to some technical problem Location is not fetched.');
                                            }
                                            this.clear();
                                            LoadingModule.clear();
                                        })
                                        .catch(err => {
                                            _click = true;
                                            locationmodule.clear();
                                            LoadingModule.clear();
                                        })
                                });
                            } else {
                                alert("Sorry, your browser does not support HTML5 geolocation.");
                            }
                        }.bind(this));
                    }

                    if (content.type === 'type_location') {
                        $btn.css({"background": "none","color": "#ed1c24","border": "1px solid", "margin-top": "15px !important"});
                        $btn.on('click', function (event) {
                            $btn.remove();
                            if ($('.location-form')) {
                                $('.location-form').remove();
                            }
                            let $input = $(`<div class="form-group location-form clearfix">
                                <div class="left"><i id="locationsearch" class="fas fa-search"></i>
                                    <input type="text" autocomplete="off" class="form-control form-control-sm" id="input-location"
                                    aria-describedby="input location" placeholder="Enter Location">
                                </div>                                
                            </div>`);
                            $input.appendTo($btnContainer);
                            
                            $('#locationsearch').on('click',()=>{
                                let inputLocation = $('#input-location').val();
                                this.searchLocation(event,this.data,inputLocation);
                            }).bind(this);
                            $('#input-location').keyup(function (event) {
                                if (event.keyCode == 13) {
                                    $('#locationsearch').click();
                                    document.getElementById("errorinputtext").style.display = "none";
                                }
                            }.bind(this));
                        }.bind(this));
                    }
                });

                $btnContainer.appendTo(this.$container);
            }

            this.$container.appendTo(this.$inputMsg);
             this.hideContainer();

             $('#outerDiv #context').click(function(){
               this.showContainer();
            }.bind(this));
        }
        $('#removelocation').on('click',()=>{
            $('#input-location').attr('value', '');
            $('#input-location').html("");

        })
        this.scrollBottom();
    },
    searchLocation:function(event,type,inputdata) {
        console.log("searchLocation",type)
        this.showContainer();
        LoadingModule.init('#message-input-module');
        let inputLocation =inputdata;
        console.log(inputLocation);
        console.log("type of location",type.for);
        let url = '';
        if (type.for === 'atm') {
            url = `${env.protocol}://${env.server}:${env.port}${env.basePath}location/search?type=atm&latitude=${env.latitude}&longitude=${env.longtitude}&location=${inputLocation}`;
            console.log("url",url);
        }
        else {
            url = `${env.protocol}://${env.server}:${env.port}${env.basePath}location/search?type=branch&latitude=${env.latitude}&longitude=${env.longtitude}&location=${inputLocation}`;
            console.log("this is branch url",url);
        }

        axios.get(url)
            .then((response) => {
                console.log("response",response.data);
                let type = response.data.type;
                console.log("this isz",type);
                if (type === 'generalslider') {
                    generalSliderModule.init(response.data);
                    $('#context img').attr('src', "images/banner/plus.png");
                }
                else if (type === 'location') {
                    locationmodule.init(response.data);
                }
                else {
                    console.log("error",response.data);
                    generalReplyModule.init('Sorry there due to some technical  ATM is not fetched.');
                }
                // this.clear();
                LoadingModule.clear();
            })
            .catch((err) => {
                let errors=err.response.data.message
                generalReplyModule.init(errors);

                // let data = {
                //     type: 'location',
                //     for: 'atm',
                //     header:'No ATM at this location',
                //     title: `No atm location in this state`,
                //     img:"images/cursor.png",
                //     subtitle: `For results near you, please send us your current location by clicking button below.`,
                //     button: {
                //         contents: [
                //           {
                //             title: "Send Location",
                //             type: "send_location"
                //           }
                //         ]
                //       }
                // }
                // locationmodule.init(data);
                LoadingModule.clear();
                this.clear()
            })
    

    },
    showContainer:function(){
        this.clear();
        $('#frame .content .messages').css({"max-height":" calc(100% - 103px)","min-height":"calc(100% - 103px)"});
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
    clear: function () {
        this.data = {};
        if (this.$container) {
            this.$container.remove();
        }
    }
}