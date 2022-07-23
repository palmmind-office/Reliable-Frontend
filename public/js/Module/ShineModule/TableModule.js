import { env } from "../../../env";

export var TableModule = {
    data:'',
    init: function(data){
        this.data=data;
        this.cacheDOM();
        this.render();
    },
    cacheDOM:function(){
        this.$parent=$('#message-module');
    },
    generateDOM:function (tag,attribute,css,text){
        let $dom=$(tag);
        attribute && $dom.attr(attribute);
        css && $dom.css(css);
        text && $dom.html(text);
        return $dom;
    },
    render: function(){
        if (this.$container) {
            this.$container.remove();
        }
        let renderTextNode=Array.isArray(this.data.title) ? (this.data.title.length>0): this.data.title;
        if(renderTextNode){
            let parentElem=this.$parent.find('.message-section').find('ul');
            let text=Array.isArray(this.data.title) ? this.data.title.join('<br>'):this.data.title;
            let node=$(`<li class="sent"><img src="${env.Orgimg}" alt=""><p style="margin-bottom:5px;">${text}</p></li>`);
            node.appendTo(parentElem);
        }
        this.$container = this.generateDOM('<div/>', {'id': 'container'}, {'width': '84%', 'margin': 'auto', 'margin-bottom': '40px'});

        let $table = this.generateDOM('<table/>', {'class': 'table'});
        let $thead = this.generateDOM('<thead/>', {}, {'background': '#0088CE','color': '#ef5350'});
        let $tr1 = this.generateDOM('<tr/>', {}, {'color': '#f8f8f8'});
        let $th01 = this.generateDOM('<th/>', {'scope': 'col'}, {'width': '50%','font-size': '15px'},this.data.country);
        let $th02 = this.generateDOM('<th/>', {'scope': 'col'}, {'font-size': '13px'}, this.data.forexdate);
        $th01.appendTo($tr1);
        $th02.appendTo($tr1);
        $tr1.appendTo($thead);
        $thead.appendTo($table);

        let $tbody = this.generateDOM('<tbody/>');

        let $tr2 = this.generateDOM('<tr/>');
        let $td11 = this.generateDOM('<td/>', {}, {'background':'#EAEDED','text-align': 'center'}, 'Unit');
        let Unit = this.data.data.length ? this.data.data[0].unit: '';
        let $td12 = this.generateDOM('<td/>', {}, {'background':'#EAEDED','text-align': 'center'}, Unit);
        $td11.appendTo($tr2);
        $td12.appendTo($tr2);
        $tr2.appendTo($tbody);

        let $tr3 = this.generateDOM('<tr/>');
        let $td21 = this.generateDOM('<td/>', {}, {'background':'#EAEDED','text-align': 'center'}, 'Buying');
        let buyingValue = this.data.data.length ? this.data.data[0].buying: '';
        let $td22 = this.generateDOM('<td/>', {}, {'background':'#EAEDED','text-align': 'center'}, buyingValue);
        $td21.appendTo($tr3);
        $td22.appendTo($tr3);
        $tr3.appendTo($tbody);

        let $tr4 = this.generateDOM('<tr/>');
        let $td31 = this.generateDOM('<td/>', {}, {'background':'#EAEDED','text-align': 'center'}, 'Selling');
        let sellingValue = this.data.data.length ? this.data.data[0].selling: '';
        let $td32 = this.generateDOM('<td/>', {}, {'background':'#EAEDED','text-align': 'center'}, sellingValue);
        $td31.appendTo($tr4);
        $td32.appendTo($tr4);
        $tr4.appendTo($tbody);

        $tbody.appendTo($table);
        
        $table.appendTo(this.$container);
        this.$container.appendTo(this.$parent);

    },
    clear: function(){
        this.data = '';
        $('#container').remove();
    }
}