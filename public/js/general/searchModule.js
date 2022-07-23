export var searchModule = {
    data: '',
    selectedItem: '',
    init: function (data) {
        this.data = data;
        // console.log("this is search module",this.data)
        $(document).ready(() => {
            $('#search-input').selectize({
                plugins: ['remove_button'],
                persist: false,
                maxItems: 1,
                valueField: ['iso3'],
                labelField: 'name',
                searchField: ['name'],
                sortField: 'name',
                create: false,
                options: this.data,
                render: {
                    item: function (item, escape) {
                        return '<div>' +
                            (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +
                            '</div>';
                    },
                },

                onChange: function(value){   
                  this.selectedItem = value;              
                }.bind(this)
            });
        });
    },
    sendSelectedItem: function(){        
        return this.selectedItem;
    },
    clearModule: function(){        
        this.data = '';
        this.selectedItem = '';
        $('#search-input').remove();        
    }
}