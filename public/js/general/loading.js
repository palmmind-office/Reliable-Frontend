/**
 * Used for loading data.
 */
export var LoadingModule = {
    data: {},
    init: function (parentID) {
        this.parentID = parentID;
        this.cacheDOM();
        this.render();
    },
    cacheDOM: function () {
        this.$parent = $(this.parentID);
    },
    render: function () {
        if (!$('#loading').length) {
            let $dotdot = $(`<span class="saving"><span>&#9679</span><span>&#9679</span><span>&#9679</span></span>`);
            let $loading = $('<div id="loading"></div>');
            this.$parent.append($loading);
            $loading.append($dotdot);
        }
    },
    clear: function () {
        $('#loading').remove();
    }
}