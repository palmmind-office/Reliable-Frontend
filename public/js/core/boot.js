import { contentRender } from "../Module/content-render";
import { socketModule } from "./socket";
import { LoadingModule } from "../general/loading";
import { contextinner } from "../Module/contextinnerModule";
import {contextouter} from "../Module/contextouterModule";
// import {outerFormValidation} from "../Module/outerFormValidation.module";
import { googleAnalytics } from '../general/googleAnalytics';
import { SpeechRecognitionrun } from './speechReecognizer';
// import { pouchDB } from "../general/pouchDB.Module";
// import { getResponseTitle, initializeChatHistory } from "./bootHelperFunctions";
import { env } from "../../env";
// import { on } from "events";
// import { HomeModule } from "../Module/HomeModule";
// import { hamburger } from "../Module/hamburgerModule";
import { NewHomeModule } from "../Module/ShineModule/NewHomeModule";
import {localrundata} from "../../../localDataJson/localrundata";


export class Boot {

  constructor() { };

  ChatbotBooter() {
    let socketUrl = `${env.protocol}://${env.server}:${env.port}`;
    socketModule.init(socketUrl);
    console.log('the socketUrl used by socketModule is ---------->>>>>>>>', socketUrl);
    ///--------->>>>>>>>> old start-up screen query
    ///socketModule.messageSend("start_menu");



    ///---------->>>>>>>>> shine resunga new start-up query
    socketModule.messageSend("menu")


    //  Context Outer
    $('#context').click(function () {
      console.log(' i have clicked on context----------');
      socketModule.messageSend("menu")
      $('#autosuggest').html('');
      var plus = 'images/banner/plus.png';
      var minus = 'images/banner/list.png';
      $('#buttonSlider').remove();
      $('#generalslider').remove(); 
      $('#detailDrawer').remove();
      $('.wrap').css("display", "flex");
      $("#buttonUpSlider").remove();
      $('#frame .content .messages').css({
        "max-height": " calc(100% - 90px)",
        "min-height": "calc(100% - 90px)"
      });
      $('.fa-keyboard').remove();
      if ($('#context img').attr('src') === plus) {
        $('#context img').attr('src', minus);
        // get value from session storage 
        let a =sessionStorage.getItem('language')
        if(a==='english'){
          socketModule.messageSend('Hello Shine');
        }
        else if(a==='nepali'){
        socketModule.messageSend('hello nepal');
        }
        else{
          socketModule.messageSend('Hello Shine');
        }
      } else {
        NewHomeModule.hideContainer()
        $('#context img').attr('src', plus);
        $('.initialForm').css("visibility", "visible");
        $('.LiveFormBtn').css("visibility", "visible");
      }
    });

    //for google Analytics purposed binding this element to head when loaded bot
    $(document).ready(function () {
      // clear session storage 
      sessionStorage.clear()

      $('head').append(`<script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', "${env.analyticsId}", 'auto');
        ga('send', 'pageview');
        </script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${env.analyticsId}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "${env.analyticsId}");
        </script>`)
    });

    $('#outerDiv .modal #livechatproceed').on('click', function () {
      socketModule.messageSend("human");
      $('#outerDiv .modal #livechatproceed').attr('data-dismiss', 'modal');
    })

    $("#palmmind_web").click(function () {
      let link = "http://palmmind.com/";
      window.open(link, "__blank");
    });

    //   read text file

    $(document).ready(function () {
      $.ajaxSetup({
        cache: false
      })
      $('#search').keyup(function () {
        $('#autosuggest').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        fetch('../../../assets/autosuggest.txt')
          .then(data => data.text()).then((data) => {
            const ResultArray = data.split("\n");
            $.each(ResultArray, function (key, value) {
              if (value.search(expression) != -1 || value.search(expression) != -1) {
                let li = $(`<li class="list-group-item link-class" value=${value}><i class="fas fa-search"></i>${value}</li>`);
                $('#autosuggest').append(li);
                li.click(function () {
                  let payload = value;
                  var click_text = payload;
                  
                  $('#search').val(click_text);
                  socketModule.messageSend(click_text)
                  $("#autosuggest").html('');
                })
              }
              if ($('#search').val().length == 0) {
                $('#autosuggest').html('');
              }
              if ($('#autosuggest li').length == 1) {
                $('#search').text(value);
                $('#search').attr("value", value);
              }
              console.log($('#autosuggest li').length);
            });
          })
      })
    })
    
    //for input validation purposed
    $(".message-input input#search").keypress(function (e) {
      var keyCode = e.keyCode || e.which;
      $("#errorinputtext").css("display", "none");
      var regex = /^[ -'-.-?-,-@-A-Za-z0-9]+$/;
      var isValid = regex.test(String.fromCharCode(keyCode));
      if (!isValid) {
        document.getElementById("errorinputtext").style.display = "inline";
      }
      if (e.which == 13) {
        document.getElementById("errorinputtext").style.display = "none";
      }
      return isValid;
    })

    function checkconnection() {
      $("#errorinputtext").css("display", "none !important");
      // var status = navigator.onLine;
      let status = true;
      if (status) {
        NewHomeModule.hideContainer();
        $('#context img').attr('src', 'images/banner/plus.png');
        var numbers = /^[ -'-.-?-?-@-A-Za-z0-9]+?[^#<+*<>{}()|\n\r]+$/;
        let message = $(".message-input input").val();
        if (message == '') {
          return false
        }
        console.log("message is ", message);
        if (message.match(numbers)) {
          socketModule.messageSend(message);
          document.getElementById("errorinputtext").style.display = "none";
        }
        if (!message.match(numbers)) {
          document.getElementById("errorinputtext").style.display = "inline";
        }
        if (message === "human") {
          socketModule.joinRoom();
        }
        googleAnalytics.recordEvent({
          eventCategory: "input Field",
          eventAction: message
        });
      } else {
        $.notify(env.internetConnection, "warn");
        LoadingModule.clear();
      }
    }


    //for checking livechat availabele or not
    function getorganization() {
      fetchdata().then(data => {
        let $btn = $(`<button type="submit" class="btn btn-success" data-dismiss="modal">Close</button>`);
        $btn.css({
          "position": "absolute",
          "bottom": "7px",
          "left": "40%",
          "padding": "6px 15px",
          "font-size": "13px",
          "background": "#007bff"
        });
        if (data.data.availability == false) {
          // console.log(data.data.liveChat_availability);
          let $tag = '"We are sorry, we are not available now , Try again later"';
          $('#LiveChatForm .modal-title').text($tag);
          $('#LiveChatForm .btncont .btn-primary').css("visibility", "hidden");
          $('#LiveChatForm .btncont').append($btn);
        }
        if (data.data.availability == true) {
          let $tag = 'Do you want to proceed live-chat ?';
          $('#LiveChatForm .modal-title').text($tag);
          $('#LiveChatForm .btncont .btn-primary').css("visibility", "visible");
          $btn.css("visibility", "hidden");
          $('#LiveChatForm .btncont .btn-success').css("visibility", "hidden");
        }
      })
    }

    $('.LiveFormBtn').click(() => {
      getorganization();
    });

    $(`#getSpeech`).on("click", function (e) {
      e.preventDefault()
      SpeechRecognitionrun.init();

    })


    $(".submit").click(function () {
      checkconnection();
      $('#result').html('');
      $('#context img').attr("src", "images/banner/plus.png");
    });

    $('.initialForm').click(() => {
      // socketModule.messageSend("askme")
      socketModule.messageSend('info');
    });

    //push notification
      //  $('.contact-profile button.pushNotification').click(() => {
      //   poptastic(`${env.protocol}://${env.server}:${env.port}/pushNotification`);
      // });
    
      function poptastic(url)
    {
      let newwindow=window.open(url,'__blank','height=500,width=500, top=80, left=150,resizable=yes,scrollbars=no,toolbar=yes,status=yes');
      if (window.focus) {newwindow.focus()}
    }
    //end of post notification

    $("#toggle").click(function () {
      socketModule.messageSend('Hello Shine');
    });


    $(window).on("keydown", function (e) {
      if (e.which == 13) {
        checkconnection();
        $('#result').html('');
      }
    });

// for nepali to english language changes 

    $('#language_eng').click(function(){
      sessionStorage.setItem('language', 'english');
      $('.name_wraps').css({"background-color":"#6C757D"})
      $('.name_wrap').css({"background-color":"#58D68D"})
      $('#search').prop("disabled",false);
      $('#search').attr("placeholder", "Type your query .....");
      $('#getSpeech').show();
      $('.submit').show();
      $('.detailcontainer').remove();
      $('#buttonSlider').remove();
      $('#generalslider').remove(); 
      $('#detailDrawer').remove();
      socketModule.messageSend("Hello Shine")
      //      $('#context').click(function() {
      //       socketModule.messageSend("Hello Shine")
      // });
    })

    $('#language_nepali').click(function(){
      sessionStorage.setItem('language','nepali');
      $('.name_wrap').css({"background-color":"#6C757D"})
      $('.name_wraps').css({"background-color":"#58D68D"})
      $('#search').prop("disabled",true);
      $('#search').attr("placeholder", " माथिको  बटनहरु थिची आवश्यक सूचना लिनुहोस्");
      $('#getSpeech').hide();
      $('.submit').hide();
      $('.detailcontainer').remove();
      $('#buttonSlider').remove();
      $('#generalslider').remove(); 
      $('#detailDrawer').remove();
      socketModule.messageSend("hello nepal")
    })

   
    socketModule.socket.on("message_received", async function (message) {
      try {
        LoadingModule.clear();
        NewHomeModule.hideContainer();
        contentRender(message, socketModule.socket);
      } catch (err) {
        console.log(err);
      }
    });


    socketModule.socket.on("agent_received", function (message) {
      LoadingModule.clear();
    });


    socketModule.socket.on("agent_alert", function (message) {
      LoadingModule.clear();
    });

    socketModule.socket.on("agent_send", function (message) {
      LoadingModule.clear();
    });

  }

  // if chatbot needed any module initialised during the time of loading 
  initalisedOfChatbotModule() {
    $(`.InsideMessageLoading`).remove();
  }

}