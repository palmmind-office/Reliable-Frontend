export var env = {
  protocol: "http",
  server: "localhost",
  basePath: "/rest/v1/",
  port: "5050",
  analyticsId: "UA-157129409-1",
  source: "NCC Bank",
  Orgimg: "images/img/reliablelogo.png",
  clientimg: "images/ME.jpg",
  leadMail: "thanks for your response",
  salt_key: "123456789",
  detailCrosser: "images/cross.png",
  latitude: "",
  longtitude: "",

  //for checking if ONLiNE/Ofline Msg
  internetConnection: "Warning: make sure you have internet connections",
  //for not rendering text in chatbot while sending that string type of payload
  excludeRender: [
    "welcomeTop",
    "askme",
    "info",
    "welcome",
    "Get Started",
    "homehelper",
    "hamburger",
    "contextouter",
    "contextinner",
    "roomtype",
    "home",
    "help",
    "Hello Shine",
    "hello nepal",
  ],
};

export var cookieExpire = {
  month: 0,
  days: 0,
  hours: 12,
  minutes: 0,
  seconds: 5,
};

export var botStyle = {
  palmbotstyle: {
    styles: {
      "max-height": "90vh",
      width: "400px",
    },
  },
  iframe: {
    allow: "geolocation",
    title: "Palmbot",
    styles: {},
  },
};
export var chatHistoryExpire = 3 * 24 * 60 * 60 * 1000;
export var chatHistoryLimit = 20;
