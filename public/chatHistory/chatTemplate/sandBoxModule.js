import { userList } from "./userList";
import { LocalStorage } from "./assets/localstorage";

/*
  A class which acts bridge between different modules if one module needs to call the
  functionality of another module it should call sandbox and sandbox should provide the required
  functionality so that one module should not be tightly coupled with another module.
*/
class SandBox {
  constructor() {}

  /**
   *
   * Fetch User List and if there are any visitor to be checked from localstorage
   * add notification icon to that visitor's DOM.
   */
  notifyVisitor(source) {
    let message = LocalStorage.getItem(source);
    let messageArr = [];
    if (message) {
      messageArr = message.split(",");
    }

    userList.fetchUserList().then(data => {
      if (data.data.header.status) {
        userList.clear();
        userList.data = data.data.data;
        userList.cacheDOM();
        userList.render();

        if (message) {
          let p = $("#contacts ul li");
          let node = userList.getvisitorElement(messageArr, p);
          if (node.found) {
            node.element.forEach(elem => {
              let mark = $(
                '<img id="notification" src="./img/notification.png" alt="notification">'
              );
              elem.find(".wrap").prepend(mark);
            });
          }
        }
      }
    });
  }

  /**
   * Check if there are any chatbot visitor in localstorage
   * if yes then notify in refresh icon its count.
   */
  notify(isFb) {
    if (isFb) {
      let totalItems = this.getCount("chatBotFbVisitor");
      $("#source-container .facebook .badge").text(totalItems);
    } else {
      let totalItems = this.getCount("chatBotWebVisitor");
      $("#source-container .web .badge").text(totalItems);
    }
  }

  getCount(id) {
    let totalItems = LocalStorage.getItem(id);
    if (totalItems) {
      totalItems = totalItems.split(",").length;
    } else {
      totalItems = "";
    }
    return totalItems;
  }
}

export const sandbox = new SandBox();
