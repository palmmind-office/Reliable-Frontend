import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';
import { env } from '../../env';

class QuickReplyModule1 {
    constructor() {
        this.data = {};
        this.init = function (data) {
            this.data = data;
            let type = data.catagoriesContext
            this.cacheDOM();
            this.render();
            this.bindEvents();
            this.related(type);
            

        };
        this.cacheDOM = function () {
            this.$message = $('#message-module');
        };
        this.scrollBottom = function () {
            $(".messages").animate({
                scrollTop: $('#message-module')[0].scrollHeight
            }, "fast");
        };
        this.render = function () {
            if (this.$container) {
                this.$container.remove();
            }
            this.$container = $(`<div id="quick_reply"></div>`);
            let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
            if (renderTextNode) {
                let parentElem = this.$message.find('.message-section').find('ul');
                let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
                let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p><li></li></li>`);
                node.appendTo(parentElem);
            }

            if (this.data.data.length) {
                this.ul = $('<ul/>');

                this.data.data.forEach(element => {
                    this.li = $('<li/>').appendTo(this.ul);
                    this.a = $('<a/>').text(element.title).appendTo(this.li);
                });
                this.ul.appendTo(this.$container);
            }

            if (renderTextNode || this.data.data.length) {
                this.$container.appendTo(this.$message);
            }
            this.scrollBottom();
        };
        this.related=function(data){
            if(data){
            this.container=$(`<div  id="related_container" class=" ml-2 border border-1 p-1"></div>`);
            this.container.css({borderRadius:'15px',backgroundColor: '#D8F7FE'});
            let related_Data=$(`<h6 class="pl-3">${data.subtitle}</h6>`)
            related_Data.appendTo(this.container)
            this.ul=$(`<ul class="fa-ul"></ul>`).appendTo(this.container)
            data.data.forEach(element => {
                this.li=$(`<li class="m-0 pl-1 pb-2 h1 text-mute"><span class="fa-li"><i class="p-1 fa fa-search"></i></span>${element.title}</li>`)
                this.li.css({fontSize:'13px',color:'#000',cursor:'pointer',margin:'0 0 1px 0 !important',})
                this.li.appendTo(this.ul)
                this.li.on('click',function(e){
                    let $item1 = $(e.target).closest('li');
                    // console.log("this is item",$item1)
                    let index1 = $('.h1').index($item1);
                    console.log("index",index1)
                                       let payload2={title:data.data[index1].title,payload:data.data[index1].payload}
                                    //    console.log("payload",payload2)
                            socketModule.messageSend(payload2);   
                })
            });

            this.container.appendTo(this.$message);
            this.scrollBottom();

        }
    }

        this.clear = function () {
            this.data = {
                title: '',
                data: []
            }
            this.render();
            $('#related_container').remove();

        };

        this.bindEvents = function () {
            if (!this.$container) {
                return;
            }
             this.$container.find('ul li').on('click', this.btnClick.bind(this))
            //  this.container.find('ul li').on('click', this.li_click.bind(this))
        };

        this.btnClick = function (event) {
            let $item = $(event.target).closest('li');
            let index = this.$container.find('ul li').index($item);
                let payload1={title:this.data.data[index].title,payload:this.data.data[index].payload}
                let value=this.data.data[index]
                if(value.payload){
                    socketModule.messageSend(payload1);    
                }else{
                let url=value.link 
                    const a = document.createElement('a')
                    a.href = url
                    a.target = '_blank'
                    a.download = url.split('/').pop()
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                  
            }
        }
        

    }
}

export let quickReplyModule = new QuickReplyModule1();