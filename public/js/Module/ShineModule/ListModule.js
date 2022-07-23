const { env } = require("../../../env");


export const ListModule = {
    data:'',
    init:function(data){
        this.data=data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM:function(){
        this.$parentElem = $('#message-module .message-section ul');
    },
    scrollBottom: function () {
        $(".messages").animate({
            scrollTop: $('#message-module')[0].scrollHeight
        }, "fast");
    },
    render: function () {
        this.$container=$('<div class="detailhome modal zoomIn animated"></div>');
        this.$subcontainer=$('<div class="bg-secondary"></div>');

        this.renderElem = $('<li class="sent"><img src='+env.Orgimg+' alt="" /><p>' + this.data.title + '</p></li>');
        this.renderElem.appendTo(this.$parentElem);
        this.scrollBottom();

        this.$ul=$('<ul></ul>');
        let listTitle=this.data.data;

        listTitle.map((element)=>{
            this.$li=$(`<li>${element.title}</li>`)
            this.$li.appendTo(this.$ul);
    
        })
        let drop= $(`<div class="modal-backdrop show"></div>`);
        drop.appendTo(this.body);
         let icon=$(`<i class="fas fa-times-circle"></i>`);
         icon.appendTo(this.$container);
         icon.click(()=>{
             this.$container.remove(); 
             drop.remove();
         })
        this.$ul.appendTo(this.$container);
        this.$container.appendTo(this.$parentElem);





    }

}
