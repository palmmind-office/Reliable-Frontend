import { socketModule } from '../core/socket';
import { env } from '../../env';

export var Button = {
    data: '',
    init: function (data) {
        this.data = data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function () {
        this.$parentElem = $('#message-module .message-section ul');
        this.$MainElem =this.$message = $('#message-module');
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    render: function () {
        this.renderElem = $('<li class="sent"><img src='+env.Orgimg+' alt="" /><p>' + this.data.title + '</p></li>');
        // console.log("hello",this.data)
        this.renderElem.appendTo(this.$parentElem);
        this.scrollBottom();
          
     
    
        this.div=$(`<div></div>`)
        this.div.appendTo(this.$MainElem)
        // this.$div.appendTo(this.$MainElem)

        this.data.data.forEach(element => {
            let Botton=$(`<botton class="btn btn-outline-warning m-2" id=${element.id}> ${element.text} </botton>`)
            Botton.appendTo(this.div)
            // Botton.appendTo(this.$div)
           
    
            Botton.on('click', function(){
                if(element.name==="h1"){
                    // $(this).hide()
                    socketModule.messageSend(`<div class="alert alert-primary" role="alert">this button is h1</div>`)
                }
                else {
                    // $(this).hide()
                // socketModule.messageSend('this button is h2')
                socketModule.messageSend(`<div class="alert alert-primary">this button is h2</div>`)

                // this.$div=$(`<div class="alert alert-primary">this button is h2</div>`)

                }
                // alert('Button clicked')
            })
        });

    },
    clear: function () {
        if (this.div) {
            // $('#h1').hide();
            this.div.remove();
        }
    },
}