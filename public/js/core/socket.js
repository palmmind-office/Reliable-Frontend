import { cookie } from '../general/cookie';
import { LoadingModule } from '../general/loading';
import { sandBox } from '../Module/sandBoxModule';
import { cookieExpire } from '../../env';
import { locationModule } from '../Module/locationModule';
const uuidv1 = require('uuid/v1');
const Fingerprint = require('fingerprintjs');
import { env } from "../../env";
import { NewHomeModule } from "../Module/ShineModule/NewHomeModule";

export var socketModule = {
    socket: '',
    excludeRenderMsg: env.excludeRender,
    init: function (url) {
        this.socket = io.connect(url);
    },
    fetchData: function () {
        return fetch(`${env.protocol}://${env.server}:${env.port}/rest/v1/Organization`).then(res => res.json());
    },

    checkconnection: function (message) {
        var status = navigator.onLine;
        // let status = true;
        if (status) {
            // $('#viewpolicy').remove();
            $("#autosuggest").html('');
            if (message === 'Hello Shine') {
                NewHomeModule.Show()
            }
            else {
                sandBox.showModules();
                locationModule.showContainer1();
                sandBox.clearAllModules();


            }
            let uniqueID = '';

            LoadingModule.init('#message-input-module');

            if (cookie.isCookieExists('uniqueID')) {
                uniqueID = cookie.getCookie('uniqueID');
                console.log("unique Id = ", uniqueID);
            } else {
                if (this.getfingerprint()) {
                    uniqueID = this.getfingerprint();
                }
                else {
                    uniqueID = this.getNewCookie();
                }
                console.log("unique id = ", uniqueID);
                cookie.setCookie('uniqueID', uniqueID, cookieExpire);
            }
            
            // for socket message send 
            this.socketmessageemit(message,uniqueID)
            if ($.trim(message) == '') {
                return false;
            }

            if (typeof (message) === 'object') {
                console.log("message",message)
                message = message.title;
            }
          

            if (message === "human") {
                this.fetchData().then(data => {
                    if (data.data.availability == true) {
                        this.socket.emit('join', uniqueID);
                        this.socket.emit("alert", uniqueID);
                        this.socket.chatHuman = true;
                        LoadingModule.clear();
                    }
                })
            }


            if (this.excludeRenderMsg.indexOf(message) < 0) {
                $('<li class="replies"><img src='+env.clientimg+' alt="" /><p>'+ message + '</p></li>').appendTo($('.message-section ul'));
                $('.contact.active .preview').html('<span>You: </span>' + message);
            }

            $('.message-input input').val(null);
            $(".messages").animate({
                scrollTop: $('#message-module')[0].scrollHeight
            }, "fast");
        } else {
            $.notify(env.internetConnection, "warn");
            return false
        }
    },
    socketmessageemit:function(message,uniqueID){
        if(typeof (message)==='object'){
            this.socket.emit('user_message', message.payload, uniqueID);
          }
          else{
            this.socket.emit('user_message', message, uniqueID);
          }
    },
    messageSend: function (message) {
        this.checkconnection(message);
    },
    getNewCookie: function () {
        return uuidv1();
    },
    getfingerprint: function () {
        var fingerprint = new Fingerprint().get();
        return fingerprint;
    }
};
