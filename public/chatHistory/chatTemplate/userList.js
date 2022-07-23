import { chatHistory } from "./chat";
import { env } from "../../env";
import { socketModule } from "./socket.module";
import { loading } from "./assets/loading";
import { LocalStorage } from "./assets/localstorage";
import { sandbox } from "./sandBoxModule";

export var userList = {
  data: {},
  userList: {},
  userId: "",
  source: "web",
  pagination: {
    limit: 1,
    start: 1
  },
  resetPagination: function() {
    this.pagination.limit = 1;
    this.pagination.start = 1;
  },
  init: function(source) {
    this.source = source;
    this.resetPagination();
    this.getUserList();
    this.scrollUserList();
    chatHistory.scrollChat();
    /*this.bindEvents();*/
    // this.clickRefreshIcon();

    //checked if there is any pending notification.
    sandbox.notify();
  },
  LogOut: function(){
    let url = `${env.protocol}://${env.dashboardServer}:${env.dashboardPort}${env.basePath}Users/logout?access_token=${localStorage.getItem("token")}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        localStorage.removeItem("chatBotWebVisitor");
        localStorage.removeItem("chatBotFbVisitor");
        window.location.href = `${env.protocol}://${env.server}:${env.port}/chat`;
      })
      .catch(err => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        localStorage.removeItem("chatBotWebVisitor");
        localStorage.removeItem("chatBotFbVisitor");
        window.location.href = `${env.protocol}://${env.server}:${env.port}/chat`;
      });
  },
  bindEvents: function() {
    var $userName = $(`<a class="dropdown-item" href="#">${localStorage.getItem('userName')}</a>`);
    var $logout = $(`<a class="dropdown-item" href="#">Logout</a>`);
    $('#header .dropdown-menu').empty();
    $('#header .dropdown-menu').append($userName);
    $('#header .dropdown-menu').append($logout);

    $logout.click(function(event) {
      this.LogOut();
    }.bind(this));
  },
  getUserList: function() {
    loading.init("#contacts");
    this.fetchUserList()
      .then(data => {
        if (data.data.header.status) {
          this.data = data.data.data;
          this.removeUserListDOM();
          this.cacheDOM();
          this.render();
        } else {
        }
        loading.clear();
      })
      .catch(err => {
        let msg = "";
        try {
          if (
            data.data.header.statusCode === 403 ||
            data.data.header.statusCode === 401
          ) {
            msg = "Error in user authentication.";
            window.location.href = `${env.protocol}://${env.server}:${env.port}/chat`;
          }
        } catch (err) {}
        loading.clear();
      });
  },
  fetchUserList: function() {
    let url = `${env.protocol}://${env.server}:${env.port}${env.basePath}chat/visitors?start=${this.pagination.start}&source=${this.source}&duration=today&accessToken=${localStorage.getItem('token')}`;
    return axios.get(url);
  },
  cacheDOM: function() {
    if (!this.$container) {
      this.$container = $("#contacts");
    }
    if (!this.$header) {
      this.$header = $("#header");
    }
  },
  render: function() {
    this.data.forEach((element, index) => {
      let $li = $(`<li class="contact">
                <div class="wrap">
                    <img src="./img/visitor.png" alt="" />
                    <div class="meta">
                        <p class="name">Visitor ${element.user_id}
                        </p>
                    </div>
                </div>
            </li>`);

      $li.click(() => {
        $("#contacts>ul>li").removeClass("active");
        $li.addClass("active");

        //remove bell icon once clicked.
        $li.find("#notification").remove();
        let id = 'chatBotWebVisitor';
        if(this.source == 'fb'){
          id = 'chatBotFbVisitor';
        }

        LocalStorage.removeItem(id, element.user_id);
        sandbox.notify();

        this.userId = element.user_id;
        chatHistory.init(element.id, element.user_id);
        socketModule.socket.emit("agent_join", element.user_id);
      });

      let $ul = this.$container.find("ul")[0];
      $li.appendTo($ul);

      if(index == 0){
        $li.click();
      }
    });
  },
  scrollUserList: function() {
    let id = "#contacts";
    let fetchNext = true;

    //one register event only once.
    let mouseWheelEvent = /Firefox/i.test(navigator.userAgent)
      ? "DOMMouseScroll"
      : "mousewheel";

    $(document).ready(() => {
      $(id)
        .off(mouseWheelEvent)
        .on(mouseWheelEvent, event => {
          let elem = $(event.currentTarget);
          if (
            elem[0].scrollHeight === elem.scrollTop() + elem.outerHeight() &&
            fetchNext
          ) {
            fetchNext = false;
            this.pagination.start += this.pagination.limit;
            loading.init("#contacts");
            this.fetchUserList()
              .then(data => {
                fetchNext = true;
                loading.clear();
                if (data.data.header.status) {
                  this.data = data.data.data;
                  this.cacheDOM();
                  this.render();
                } else {
                }
              })
              .catch(error => {
                fetchNext = true;
              });
          }
        });
    });
  },
  clear: function() {
    this.data = {};
    this.resetPagination();
    this.removeUserListDOM();
  },
  removeUserListDOM: function() {
    $("#contacts ul").empty();
  },

  /**
   * add
   * @param {*} message
   */
  addNotificationIcon: function(message) {
    let p = $("#contacts ul li");
    for (let li of p) {
      let text = $(li)
        .find("p")
        .text()
        .trim();
      text = text.split(" ");
      text = text[text.length - 1];

      if (typeof message === "string" && message.trim() === text) {
        let mark = $(
          '<img id="notification" src="./img/notification.png" alt="notification">'
        );
        mark.css({ position: "relative", "z-index": "100" });
        li = $(li);
        li.find(".wrap").prepend(mark);
      }
    }
  },

  /**
     *
     * @param {*} message text message of type string.
     * @param {*} dom jquery dom
     * @return {*} {
            element: '',
            found: false
        }
     */
  getvisitorElement: function(message, dom) {
    let filteredElement = {
      element: [],
      found: false
    };

    for (let li of dom) {
      let text = $(li)
        .find("p")
        .text()
        .trim();
      text = text.split(" ");
      text = text[text.length - 1];

      if (typeof message === "string" && message.trim() === text) {
        filteredElement.element.push($(li));
        filteredElement.found = true;
        break;
      } else if (typeof message === "object" && Array.isArray(message)) {
        if (message.indexOf(text) > -1) {
          filteredElement.element.push($(li));
          filteredElement.found = true;
        }
      }
    }

    return filteredElement;
  },

  /**
   * Called when user click refresh icon on left panel.
   */
  // clickRefreshIcon: function() {
  //   let $notification = $("#profile .wrap .notification");
  //   $notification.unbind().click(function(event) {
  //     sandbox.notifyVisitor();
  //   }.bind(this));
  // }
};
