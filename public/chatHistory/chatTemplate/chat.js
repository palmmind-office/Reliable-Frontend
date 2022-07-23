import { loading } from './assets/loading';
import { env } from '../../env';
var moment = require('moment');

/**
 * data: store chat history of a user.
 * userId: used to store id of the particular user.
 *
 */
export var chatHistory = {
    data: {},
    pagination: {
        limit: 1,
        start: 1
    },
    userId: '',
    id: '',
    resetPagination: function () {
        this.pagination.limit = 1;
        this.pagination.start = 1;
    },
    init: function (id, userId) {
        this.id = id;
        this.userId = userId;
        this.resetPagination();
        this.getChatHistory();
    },
    getChatHistory: function () {
        loading.init('#message-container');
        this.fetchChatHistory().then(data => {
            this.data = data.data.data.data;
            console.log("fetched data",data);
            this.cacheDOM();
            this.render();
            loading.clear();
        })
            .catch((error) => {
                this.data = {};
                loading.clear();
            });
    },
    cacheDOM: function () {
        this.$messageContainer = $('#message-container');
        this.$header = $('#frame .contact-profile p');
    },
    render: function () {
        this.$header.text(`Visitor ${this.userId}`);
        this.$messageContainer.find('ul').empty();
        let $ul = this.$messageContainer.find('ul')[0];
        this.data.forEach(element => {
            let dateStr = moment(element.createdDate).format('hh:mm, MMM D');
            let userType = '';
            if (element.usertype === 'bot' || element.usertype === 'agent' || element.usertype === localStorage.getItem('userName')) {
                userType = element.usertype;
            } else {
                userType = 'customer';
            }

            let userName = element.senderId || userType;

            let msgClass = (element.usertype === 'human') ? 'replies': 'sent';
            let imgSrc = (element.usertype === 'human') ? './img/boy.png': './img/robot.jpg';
            let $elem = $(`<li class=${msgClass}>
            <img src="${imgSrc}" alt="" />
                <p><strong>${userName}</strong> <span>${dateStr}</span><br> ${element.text}</p>
        </li>`);

            $elem.prependTo($ul);
        });
    },
    scrollContainer: function () {
        $(".messages").scrollTop(Math.round($(window).height() / 4));
    },
    fetchChatHistory: function () {
        let url = `${env.protocol}://${env.server}:${env.port}${env.basePath}chat/messages?user_id=${this.id}&start=${this.pagination.start}`;
        console.log("start to fetching chathistory");
        return axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "accessToken": localStorage.getItem('token')
            }
        });
    },
    scrollChat: function () {
        let id = '#message-container';
        let fetchNext = true;

        //one register event only once.
        let mouseWheelEvent = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
        $(id).off(mouseWheelEvent).on(mouseWheelEvent, (event) => {
            let height = $(id).scrollTop();
            if ((height < 1) && fetchNext) {
                fetchNext = false;
                this.pagination.start += this.pagination.limit;
                loading.init('#message-container');
                this.fetchChatHistory().then(data => {
                    console.log("fetching chathistory",data);
                    fetchNext = true;
                    this.data = this.data.concat(data.data.data.data);
                    loading.clear();
                    this.cacheDOM();
                    this.render();
                    if (data.data.data.data.length) {
                        this.scrollContainer();
                    }
                })
                    .catch((error) => {
                        console.log(" fell fetching chathistory");
                        fetchNext = true;
                    });
            }
        });
    },
    clear: function () {

    }
}