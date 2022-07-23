///*********
import { socketModule } from '../core/socket';
import { googleAnalytics } from '../general/googleAnalytics';

export var HomeModule = {
    data: {},
    init: function(data){        
        this.data = data;
        console.log('I AM INSIDE HAMBURGER MODULE',this.data)
        this.cacheDOM();
        this.render();
        this.bindEvents();
    },
    cacheDOM: function(){
        this.$element = $('#menu-container.ham');
        this.$button = this.$element.find('button'); 
        this.$frameContainer = $('#frame');               
    },
    bindEvents: function(){        
        let _this = this;
        this.$menuContainer.find('.call-out').on('click', {_this: this}, this.clickIcon);
        this.$button.off('click');
        this.$button.on('click', this.toggleContainer.bind(this));
    },
    render: function(){
        if(this.$menuContainer){
            this.$menuContainer.remove();
        }
        this.$menuContainer = $(`<div id="menu-container" class="ham zoomIn animated "></div>`);
        if(this.data.hasOwnProperty('Header')){
            this.$menuContainer.addClass("Fullbanner");
           $(`<div class="header font_century text-light">${this.data.Header}</div>`).appendTo(this.$menuContainer);
        }
        this.$bodyContainer=$('<div class="shadow-lg w-100 pt-5" style="background-color:#ffff;height:150vw; border-top-right-radius:44px; border-top-left-radius:44px; position:absolute;top:70px"></div>')

        this.$menuContainer.appendTo(this.$frameContainer);        
        let container = $(`<div class="call-out-container margin-20"></div>`);
        let contents = '';
        this.data.data.forEach(element => {
            contents += `<div class="call-out">
                <div><img src="${element.icon}" alt="Loading..." clsss="rotate linear infinites"></div><span>${element.title}</span>
            </div>`;
        });
        this.$contents = $(contents);
        this.$contents.appendTo(container);
        container.appendTo(this.$bodyContainer);             
        this.$bodyContainer.appendTo(this.$menuContainer);   
    },
    clickIcon: function(event){      
        let _this = event.data._this;
        console.log('this is this',_this)
        let index = $(this).index();
        let payload = _this.data.data[index].payload;
        console.log('this is payload',payload)
        googleAnalytics.recordEvent({
            eventCategory:  _this.data.title,
            eventAction: payload,
            eventLabel: _this.data.data[index].title
        });
        _this.$menuContainer.hide();
        socketModule.messageSend(payload);
        _this.renderMenuIcon('plus');       
    },
    toggleContainer: function(event){        
        this.$menuContainer.toggle();
    },
    hideContainer: function(event){        
        if(this.$menuContainer){
            this.$menuContainer.hide();
        }
    },
    renderMenuIcon: function(flag){
        let img = '';
        let minus = 'images/banner/cancel.png';
        let plus = 'images/banner/plus.png';
        if(flag === 'plus'){
            img = plus;
        }
        else{
            img = minus;
        }
        $('#context img').attr('src', img);
    }
}






// hamburger data format 
// let msg = {
//     title: "Hello world",
//     type: "hamburger",
//     data: [{
//       title: 'Banking Services',
//       payload: 'Banking Services',
//       icon: 'images/icons/product.png'
//     }]
//   }