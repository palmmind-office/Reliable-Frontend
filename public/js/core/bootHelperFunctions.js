import { pouchDB } from "../general/pouchDB.Module";
import { chatHistoryExpire } from "../../env";
import { chatHistoryLimit } from "../../env";

/**
 * Extract response title from title response.
 * @param {*} data
 */
function getResponseTitle(data) {
  let title = "";
  try {
    if (data) {
      if (typeof data === "string") {
        title = data;
      } else if (data.title && typeof data.title === "string") {
        title = data.title;
      } else {
        if (typeof data.title === "object" && Object.keys(data.title).length) {
          if (data.title.hasOwnProperty("title")) {
            title = data.title.title;
          } else {
            title = data.title[Object.keys(data.title)[0]];
          }
          if (typeof title === "object" && Object.keys(title).length) {
            title = title[Object.keys(title)[0]];
          }
        }
      }
    }
  } catch (err) {}

  return title;
}

/**
 * Render chat bot history data to the bot.
 * @param {*} data
 */
function renderMessage(data) {
  let $titleContainer = $("#message-module");
  $titleContainer.find("ul").empty();
  let $ul = $titleContainer.find("ul")[0];
  data.forEach(element => {
    let msgClass = element.type === "incoming" ? "replies" : "sent";
    let imgSrc =
      element.type === "incoming"
        ? "images/img/user.jpg"
        : "images/img/tourism.png";
    let $elem = $(`<li class=${msgClass}>
            <img src="${imgSrc}" alt="" />
            <p>${element.title}</p>
        </li>`);

    $elem.prependTo($ul);
  });

  scrollBottom();
}

function scrollBottom() {
  $(".messages").animate(
    {
      scrollTop: $("#message-module")[0].scrollHeight
    },
    "fast"
  );
}

/**
 *
 */
function initializeChatHistory() {
  (async () => {
    if (
      Date.now() - parseInt(localStorage.getItem("initialTime")) >
      chatHistoryExpire
    ) {
      let destroy = await pouchDB.destroy();
      if (destroy === "success") {
        localStorage.setItem("initialTime", Date.now());
        pouchDB.init("chatHistory");
      }
    }

    let chatHistory = await pouchDB.fetch({
      include_docs: true,
      limit: chatHistoryLimit,
      descending: true
    });

    if (chatHistory && chatHistory.rows.length) {
      let data = chatHistory.rows.map(data => {
        return {
          title: data.doc.message,
          type: data.doc.type
        };
      });
      renderMessage(data);
    }
  })();
}

export { getResponseTitle, renderMessage, initializeChatHistory };
