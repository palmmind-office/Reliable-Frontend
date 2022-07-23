import { socketModule } from '../core/socket';
import { env } from '../../env';

export var selectBoxmodule = {
    data: {},
    init: function(data){        
        this.data = data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function(){
        this.$message = $('#message-module');                                               
        this.$frameContainer = $('.message-section');                                                                               
    },
    render: function(){
        console.log(this.data,"data multicard support")
        if(this.$menuContainer){
            this.$menuContainer.remove();
        }
        let renderTextNode = Array.isArray(this.data.title) ? (this.data.title.length > 0) : this.data.title;
        if (renderTextNode) {
            let parentElem = this.$message.find('.message-section').find('ul');
            let text = Array.isArray(this.data.title) ? this.data.title.join('<br>') : this.data.title;
            let node = $(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }
        this.$menuContainer = $(`<div class="selectboxinsidebot"></div>`);
        if(this.data.hasOwnProperty("subtitle")){
            $(`<h4>${this.data.subtitle}</h4>`).appendTo(this.$menuContainer)
        }
        this.$menuContainer.appendTo(this.$frameContainer);      
        let container = $(`<div class="selectboxcantainer"></div>`);
        container.appendTo(this.$menuContainer); 

        //for select box rendering
        const card=$(`<div class="card"></div>`).appendTo(container).css({"border":"none"});          
        let Dropdowncontent=$(`<select class="selectbox-select md-form"></select>`).appendTo(card)
        // $(`<option value="" disabled selected>Please Select Ward</option>`).appendTo(Dropdowncontent);
        this.data.data.forEach(element => {
            $(`<option value="${element.payload}">${element.title}</option>`).appendTo(Dropdowncontent);
        });

        //for button rendering
        if(this.data.hasOwnProperty("button")){
            const btncontainer=$(`<div class="select-box-btn"></div>`)
            btncontainer.appendTo(card);
            this.data.button.forEach(em=>{
                const btn=$(`<button type="button" class="btn btn-sm">${em.title}</button>`).appendTo(btncontainer)
                btn.on('click',(event)=>{
                    event.preventDefault();


                //This is for sending payload of selected valued in the
                let selected_value=$(`.selectbox-select`).val();
                if(em.link){
                    let link=em.link+selected_value;
                    window.open(link, '_blank');
                    console.log(selected_value)
                   }
                else if(em.payload){
                    const payload=em.payload
                    socketModule.messageSend(payload);

                }
                   else{
                    socketModule.messageSend(selected_value)
                   }
                })
            });
        }



        this.$menuContainer.appendTo(this.$element) ;  
        $('.selectbox-select').materialSelect();           
    },
    

    hideContainer: function(event){        
        if(this.$menuContainer){
            this.$menuContainer.hide();
        }
    }
}

