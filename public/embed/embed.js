
class BotEmbeded {
    constructor() {
        this.showBot = false;
        this.botLoaded = false;
        this.baseUrl = "";
        this.init = function (botStyle, url) {
            this.bindIframe(botStyle);
            this.baseUrl = url;
            this.cacheDOM();
            this.render();
            this.clickEvents();
        };
        Element.prototype.setAttributesiframe = function (attrs) {
            for (var idx in attrs) {
                if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
                    for (var prop in attrs[idx]) {
                        this.style[prop] = attrs[idx][prop];
                    }
                } else if (idx === 'html') {
                    this.innerHTML = attrs[idx];
                } else {
                    this.setAttribute(idx, attrs[idx]);
                }
            }
        };
        this.bindIframe = function (botStyle) {
            var webBody = document.getElementsByTagName("BODY")[0];
            let iframediv = document.createElement("div");
            let iframeprop = document.createElement("iframe");
            iframeprop.setAttribute("id", "palmind");
            iframediv.appendChild(iframeprop);
            webBody.appendChild(iframediv);
            iframediv.setAttribute("id", botStyle.bot_id);
            iframediv.setAttributesiframe(botStyle.style);
            iframeprop.setAttributesiframe(botStyle.allow);
            iframeprop.setAttribute("title", "Palmbot");
        },
            this.getBasePath = function () {
                return document.getElementById("palmbot").getElementsByTagName("iframe")[0].src;
            };
        this.cacheDOM = function () {
            this.$palmBot = document.getElementById("palmbot");
            this.loadBot();
            this.$crossBtn = document.createElement("button");
            this.$roundBtn = document.createElement("div");
            this.$d1 = document.createElement("div");
            this.$roundBtnImg = document.createElement("img");
        };
        this.render = function () {
            this.$roundBtn.id = "round-btn";

            document.body.appendChild(this.$roundBtn);
            this.$roundBtnImg.classList.add("round-btn-img");
            this.$roundBtnImg.setAttribute(
                "src",
                `${this.baseUrl}/images/img/family.png`
            );
            this.$d1.classList.add("round-btn-div");
            this.$d1.appendChild(this.$roundBtnImg);
            this.$roundBtn.appendChild(this.$d1);

            this.$crossBtn.classList.add("cross-btn");
            let $img = document.createElement("img");
            $img.setAttribute("src", `${this.baseUrl}/images/embed/cssd.png`);
            $img.setAttribute("alt", "cross button");
            this.$crossBtn.appendChild($img);

            this.$palmBot.appendChild(this.$crossBtn);
        };
        this.clickEvents = function () {
            this.$roundBtn.addEventListener("click", this.roundBtnClicked.bind(this));
            this.$crossBtn.addEventListener("click", this.crossBtnClicked.bind(this));
        },
            this.roundBtnClicked = function (event) {
                if (event) {
                    event.stopPropagation();
                }
                // this.loadBot();
                this.showBot = !this.showBot;
                this.toggleBot();
                if (!this.botLoaded) {
                    try {
                        $("#round-btn .popup-banner").append(
                            `<img src="${this.baseUrl}/images/embed/loading.gif" class="loading" alt="Loading..."  width="60" height="60" style="position: absolute; top: 40px; left:50px;">`
                        );

                        $("#palmbot iframe").on('load', this.initToggle.bind(this));
                        this.botLoaded = true;
                    } catch (err) {
                        console.error(err.message);
                    }
                } else {
                    this.toggleBot();
                }
            },
            this.initToggle = function () {
                this.toggleBot();
            },
            this.toggleBot = function () {
                if (this.showBot) {
                    this.$palmBot.classList.add("toggle");
                    this.$roundBtn.classList.add("toggle");
                    document.getElementById("round-btn").style.visibility = "hidden";
                } else {
                    this.$palmBot.classList.remove("toggle");
                    this.$roundBtn.classList.remove("toggle");
                    this.$roundBtnImg.setAttribute(
                        "src",
                        `${this.baseUrl}/images/img/family.png`
                    );
                    document.getElementById("round-btn").style.visibility = "visible";
                }
            },
            this.crossBtnClicked = function (event) {
                if (event) {

                    event.stopPropagation();
                }
                try {
                    let $img = $("#round-btn .loading");
                    if ($img.length) {
                        $img.remove();
                    }
                } catch (err) {
                    console.log(err.message);
                }

                this.showBot = false;
                this.toggleBot();
            },
            this.loadBot = function () {
                var iframe = this.$palmBot.getElementsByTagName("iframe")[0];
                if (!iframe.src) {
                    iframe.setAttribute("src", this.baseUrl);
                }
            }
    };
}
let ObjEmbeded = new BotEmbeded();
function Botfunction(id, height, width, allow, url) {
    let clientConfig = {
        bot_id: id,
        style: {
            "max-height": height,
            "width": width,
        },
        allow: {
            'allow': allow,
        }
    }
    ObjEmbeded.init(clientConfig, url);
}



