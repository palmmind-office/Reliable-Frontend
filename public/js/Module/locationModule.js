import { socketModule } from '../core/socket';
import { LoadingModule } from '../general/loading';
import { generalReplyModule } from './generalReplyModule';
import { locationmodule } from '../general/locationmodule';
import { env } from '../../env';
import { generalSliderModule } from '../general/generalSliderModule';
const axios = require('axios');

export var locationModule = {
    data: {},
    latude:'',
    longtude:'',
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function () {
        this.$message = $('#message-module');
        this.$inputMsg = $('#message-input-module');
        this.$hideinput = $('#message-input-module .wrap');
        this.$keyboardSec = $('#outerDiv');
        this.$close = $('#outerDiv #context');
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

            // this.$close.css("display","block");
            // $('#context img').attr('src', "images/banner/cancel.png");

            // $('.initialForm').css("visibility", "hidden");
            // $('.LiveFormBtn').css("visibility", "hidden");
            this.$container = $(`<div id="location-card"></div>`);
            if (this.data.hasOwnProperty("header")) {
                let header = $(`<span class="header">${this.data.header}</span>`).appendTo(this.$container);
            }

            let crosser = $(`<img src="images/cancel.png" style="position: absolute;width: 45px;right: 15px;top: 5px;cursor: pointer">`);
            crosser.appendTo(this.$container);
            crosser.click(() => {
                this.clear();
                this.showContainer();
            })

            if (this.data.hasOwnProperty("img")) {
                let header = $(`<img src="${this.data.img}" alt="loading..">`).appendTo(this.$container);
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
                    let dataTypeFor = this.data.for;
                    console.log("selected branch",dataTypeFor)
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
                                    locationModule.clear();
                                    locationModule.showContainer();

                                    let lat = position.coords.latitude;
                                    env.latitude=lat;
                                    let long = position.coords.longitude
                                    env.longtitude=long

                                    // localStorage.setItem("latitude", lat)
                                    // localStorage.setItem("longitude", long)
                                    axios({
                                        method: 'POST',
                                        url: `${env.protocol}://${env.server}:${env.port}${env.basePath}location/type?nearType=${dataTypeFor}`,
                                        data: {
                                            latitude: position.coords.latitude,
                                            longitude: position.coords.longitude
                                            
                                        }                                        
                                    })
                                        .then(response => {
                                            _click = true;

                                            let type = response.data.type;
                                            console.log("this is nearby location",response)
                                            // console.log("tjis is location",response.data)

                                            let value=response.data;
                                            let button=response.data.button;
                                            console.log("tjis is location",value)

                                            if (type === 'generalslider') {
                                                generalSliderModule.init(response.data);
                                                $('#context img').attr('src', "images/banner/plus.png");
                                            }
                                            else if (type === 'general-reply') {
                                                generalReplyModule.init(response.data);
                                                $('#context img').attr('src', "images/banner/plus.png");
                                            }
                                            else {
                                                // generalReplyModule.init('Sorry there due to some technical problem Location is not fetched.');

                                                let data = {
                                                    type: value.type,
                                                    for: value.for,
                                                    header: value.title,
                                                    title: `No atm location in this region`,
                                                    img: "images/img/placeholder.png",
                                                    subtitle: value.subtitle,
                                                    button: {
                                                        contents: [
                                                            {
                                                                title:button.contents[0].title,
                                                                type: button.contents[0].type
                                                            }
                                                        ]
                                                    }
                                                }
                                                locationmodule.init(data);
                                              
                                            }
                                            this.clear()
                                            LoadingModule.clear();
                                        })
                                        .catch(err => {
                                            _click = true;
                                            locationModule.clear();
                                            LoadingModule.clear();
                                        })
                                });
                            } else {
                                alert("Sorry, your browser does not support HTML5 geolocation.");
                            }
                        }.bind(this));
                    }

                    if (content.type === 'type_location') {
                        $btn.css({ "background": "none", "color": "#ed1c24", "border": "1px solid", "margin-top": "15px !important" });
                        $btn.on('click', function (event) {
                            $btn.remove();
                            if ($('.location-form')) {
                                $('.location-form').remove();
                            }
                            let $input = $(`<div class="form-group location-form clearfix">
                                <div class="left"><i id="locationsearch" class="fas fa-search"></i>
                                    <input type="text" autocomplete="off" class="form-control form-control-sm" id="input-location"
                                    aria-describedby="input location" placeholder="Type Location">
                                </div>                                
                            </div>`);
                            $input.appendTo($btnContainer);

                            $('#locationsearch').on('click', () => {
                                let inputLocation = $('#input-location').val();
                                this.searchLocation(event, this.data, inputLocation);
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

            $('#outerDiv #context').click(function () {
                this.showContainer();
            }.bind(this));
        }
        $('#removelocation').on('click', () => {
            $('#input-location').attr('value', '');
            $('#input-location').html("");

        })
        this.scrollBottom();
    },
    searchLocation: function (event, type, inputdata) {
        this.showContainer();
        LoadingModule.init('#message-input-module');
        let inputLocation = inputdata;
        // console.log(inputLocation);
        let url = '';
        if (type.for === 'atm') {
        //   let lat=  localStorage.getItem(latitude)
        //     let long=  localStorage.getItem(longitude)
            url = `${env.protocol}://${env.server}:${env.port}${env.basePath}location/search?type=atm&latitude=${env.latitude}&longitude=${env.longtitude}4&location=${inputLocation}`;
            // http://localhost:5050/rest/v1/location/search?type=atm&latitude=25.4545&longitude=85.3434&location=butwal
            console.log("url for atm", url)
        }
        else {
            url = `${env.protocol}://${env.server}:${env.port}${env.basePath}location/search?type=atm&latitude=${env.latitude}&longitude=${env.longtitude}&location=${inputLocation}`;
            console.log("this is url for branch",url)
        }

        axios.get(url)
            .then((response) => {
                console.log("response fron back", response.data);
                let type = response.data.type;
                if (type === 'generalslider') {
                    generalSliderModule.init(response.data);
                    $('#context img').attr('src', "images/banner/plus.png");
                }
                else if (type === 'location') {
                    locationmodule.init(response.data);
                }
                else {
                    generalReplyModule.init('Sorry there due to some technical problem ATM is not fetched.');
                }
                this.clear();
                LoadingModule.clear();
            })
            .catch((err) => {
                console.log("error from back", err.response);
                let data = {
                    type: 'location',
                    header: 'No ATM at this location',
                    title: `No atm location in this region`,
                    img: "images/cursor.png",
                    subtitle: `For results near you, please send us your current location by clicking button below.`,
                    button: {
                        contents: [
                            {
                                title: "Send Location",
                                type: "send_location"
                            }
                        ]
                    }
                }
                locationmodule.init(data);
                LoadingModule.clear();
                this.clear();
            })
            LoadingModule.clear();

    },
    showContainer: function () {
        this.clear();
        $('#frame .content .messages').css({ "max-height": " calc(100% - 103px)", "min-height": "calc(100% - 103px)" });
        this.$hideinput.css("display", "flex");
        this.$close.css("display", "none");
        // $('#context img').attr('src', "images/banner/plus.png");
        // $('.initialForm').css("visibility", "visible");
        // $('.LiveFormBtn').css("visibility", "visible");
        $('#outerDiv').removeClass('without-after-element');
        this.$container.remove();
    },
    hideContainer: function () {
        this.$hideinput.css("display", "none");
        $('#outerDiv').addClass('without-after-element');
        // $('.initialForm').css("visibility", "hidden");
        // $('.LiveFormBtn').css("visibility", "hidden");
        $('#frame .content .messages').css({ "max-height": "376px", "min-height": "376px" });
    },
    showContainer1: function () {
        this.clear();
        $('#frame .content .messages').css({ "max-height": " calc(100% - 103px)", "min-height": "calc(100% - 103px)" });
        $('#message-input-module .wrap').css("display", "flex");
        $('#outerDiv #context').css("display", "none");
        $('#outerDiv').removeClass('without-after-element');
        $('#location-card').remove();
    },
    clear: function () {
        this.data = {};
        if (this.$container) {
            this.$container.remove();
        }

    }
}
