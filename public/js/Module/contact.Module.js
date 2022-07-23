import { socketModule } from '../core/socket';
import { env } from '../../env';

export var contactmodule = {
    data: {},
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function () {
        this.$message = $('#message-module');
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
        this.$container = $(`<div id="contactmodule"></div>`);
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }


        if (this.data.data) {
            console.log(this.data, "contact module")
            let container = $(`<div class="contactcard"></div>`);
            container.appendTo(this.$container);
            let name=$(`<h6 class="font-weight-bold text-center">${this.data.data.Name}</h6>`)
            name.css({'color':'#0088CE'})
            name.appendTo(container)
            let subtitle = $(`<p class="text-center">${this.data.data.subtitle}</p>`);
            subtitle.css({ "border-bottom": "2px solid #EB5B28",'padding-bottom':'10px','font-size':'14px','font-weight':'500' });
            subtitle.appendTo(container);
            const listinfo = $(`<div class="contactlist"></div>`).appendTo(container);
            const ul = $(`<ul></ul>`).appendTo(listinfo);
            this.data.data.info.forEach(element => {
                const list = $(`<li style="display:flex"><span style="font-size: 16px;
                font-weight: 700;">${element.key}:</span> <span style="font-size: 14px;
                padding: 0px 6px;">${element.value}</span></li>`);
                list.appendTo(ul);
            });
            if (this.data.data.hasOwnProperty("button")) {
                const btn = $(`<button class="btn">${this.data.data.button.title}</button>`);
                btn.css({"background-color":'#0088CE'})
                btn.appendTo(container);
                btn.click(em => {
                    em.preventDefault();
                    const payload = this.data.data.button.payload
                    console.log(payload , "contact us payload")
                    if (payload) {
                        socketModule.messageSend(payload);
                    }
                    if (payload === undefined) {
                        let link = this.data.data.button.link;
                        window.open(link, '_blank');
                    }
                })
            }

            // for social media link <a target="_blank" href=fab fa-facebook-f  aria-hidden="true" ></a>
            this.social_div=$('<div class="d-flex justify-content-center"></div>').appendTo(this.$container)
            this.data.data.socialmedia.map(elem=>{
                this.Social_fb=$('<div class="m-2"></div>').appendTo(this.social_div)
                this.social_link=$(`<a target="_blank" href=${elem.link}><img src=${elem.img} class="" style="width:30px"></a>`).appendTo(this.Social_fb)
            })

        }
        if (renderTextNode || this.data.data.length) {
            this.$container.appendTo(this.$message);
        }
        this.scrollBottom();
    },
    clear: function () {
        if (this.$container) {
            this.$container.remove();
        }
    },
}















