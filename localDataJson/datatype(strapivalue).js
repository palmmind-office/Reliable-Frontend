/* let msg = {
       title: "Hello world",
       type: "hamburger",
       data: [{
         title: 'Banking Services',
         payload: 'Banking Services',
         icon: 'images/icons/product.png'
       },
       {
         title: 'Open FD Account',
         payload: 'Open FD Account',
         icon: 'images/icons/deposit.png'
       },
       {
         title: 'Card Services',
         payload: 'Card Services',
         icon: 'images/icons/credit-card.png'
       },
       {
         title: 'Loan',
         payload: 'loan',
         icon: 'images/icons/loan.png'
       },
       {
         title: 'ATM/Branch Locator',
         payload: 'ATM/Branch Locator',
         icon: 'images/icons/atmlocations.png'
       },
       {
         title: 'Apply Now',
         payload: 'Apply Now',
         icon: 'images/icons/apply.png'
       },
       {
         title: 'Service Request',
         payload: 'Service Request',
         icon: 'images/icons/customer-service.png'
       },
       {
         title: 'Report Problem',
         payload: 'report problem',
         icon: 'images/icons/problem.png'
       },
       {
         title: 'Contact Us',
         payload: 'contact',
         icon: 'images/icons/support.png'
       }]
     };*/


    /*let msg = {
      title: "Hello world",
      type: "hamburger",
      data: [{
        title: 'Quick Facts',
        payload: 'Quick Facts',
        icon: 'images/icons/torism/info.png'
      },
      {
        title: 'Places to Visits',
        payload: 'Places to Visits',
        icon: 'images/icons/torism/location.png'
      },
      {
        title: 'Treks',
        payload: 'Treks',
        icon: 'images/icons/torism/trekking.png'
      },
      {
        title: 'Visa',
        payload: 'Visa',
        icon: 'images/icons/torism/visa.png'
      },
      {
        title: 'Festivals',
        payload: 'Festivals',
        icon: 'images/icons/torism/festival.png'
      },
      {
        title: 'Things To Do',
        payload: 'Things To Do',
        icon: 'images/icons/torism/to-do.png'
      }
      ]
    };

    



    //sub-menu
    let submen = {
      type:'submenu',
      title:'submenu',
      data: [{
        title: 'Banking Services',
        payload: 'Banking Services',
        icon: 'images/icons/product.png'
      },
      {
        title: 'Open FD Account',
        payload: 'Open FD Account',
        icon: 'images/icons/deposit.png'
      },
      {
        title: 'Card Services',
        payload: 'Card Services',
        icon: 'images/icons/credit-card.png'
      },
      {
        title: 'Loan',
        payload: 'loan',
        icon: 'images/icons/loan.png'
      },
      {
        title: 'ATM/Branch Locator',
        payload: 'ATM/Branch Locator',
        icon: 'images/icons/atmlocations.png'
      },
      {
        title: 'Apply Now',
        payload: 'Apply Now',
        icon: 'images/icons/apply.png'
      },
      {
        title: 'Service Request',
        payload: 'Service Request',
        icon: 'images/icons/customer-service.png'
      },
      {
        title: 'Report Problem',
        payload: 'report problem',
        icon: 'images/icons/problem.png'
      },
      {
        title: 'Contact Us',
        payload: 'contact',
        icon: 'images/icons/support.png'
      }]

      
    };

    let msg2 = {
       title: "Hello world",
       type: "quick_reply",
       data: [
         {
           title: 'button',
           payload: 'button 1'
         },
         {
           title: 'button 2',
           payload: 'button 2'
         },
         {
           title: 'button 3',
           payload: 'button 3'
         },
         {
           title: 'button 1',
           payload: 'button 1'
         },
         {
           title: 'button 2',
           payload: 'button 2'
         },
         {
           title: 'button 3',
           payload: 'button 3'
         },
         {
           title: 'button 1',
           payload: 'button 1'
         },
         {
           title: 'button 2',
           payload: 'button 2'
         },
         {
           title: 'button 3',
           payload: 'button 3'
         }
       ]
     };


     let icon_rep = {
      title: "Hello this is icon reply palmmind",
      type: "icon_reply",
      data: [
        
        {
          title: 'button',
          icon:'<img src="images/icons/support.png" style="width: 20px; height: 20px;margin-top: -4px;margin-right: 3px;">',
          payload: 'button 2'
        },
        {
          title: 'button 3',
          icon:'<i class="fas fa-bell"></i>',
          payload: 'button 3'
        },
        {
          title: 'button 1',
          icon:'<i class="fas fa-unlock-alt"></i>',
          payload: 'button 1'
        },
        {
          title: 'button 2',
          icon:'<i class="fas fa-key"></i>',
          payload: 'button 2'
        },
        {
          title: 'button 3',
          icon:'<i class="fas fa-address-book"></i>',
          payload: 'button 3'
        },
        {
          title: 'button 1',
          icon:'<i class="fas fa-laptop-code"></i>',
          payload: 'button 1'
        },
        {
          title: 'button 2',
          icon:'<i class="fas fa-laptop-code"></i>',
          payload: 'button 2'
        },
        {
          title: 'button 3',
          icon:'<i class="fas fa-laptop-code"></i>',
          payload: 'button 3'
        }
      ]
    };

    let seekbar = {
      title: "seekbar",
      type: "seekbar",
      data: {
          role:"slider",
          valuemin:"100",
          valuemax:"1000",
          valuetext:"$500",
          step:"100",
          value:"400"
      }
    };
    
    let datepicker = {
      title: "datepicker",
      type: "datepicker",
      data: {
        role:"datepicker"
      }
    };
    let timepicker = {
      title: "timepicker",
      type: "timepicker",
      data:{
        role:"timepicker",
       icon:'<i class="fas fa-calendar-edit"></i>'
      }
    };
    
    let checkbar = {
      title: "Please Select from here",
      type: "checkbar",
      data: {
          item0:"swimming bcjuekf ekfj",
          item1:"Football jefh kfji dki",
          item2:"Baseball jdnikf knfdk",
          item3:"cricket jfbjf kdfnik",
          item4:"Ludo",
          item5:"huckkey fjkdikhf kjf"
      }
    };

     

    
    // let msg2 = {
    //    title: "Hello Bikash Thapa Can I help You?",
    //    type: "quick_reply",
    //    data: [
    //      {
    //        title: 'Bikash Thapa Chhetri mbjldsgfulgf',
    //      },
    //      {
    //       title: 'Bikash Thapa Chhetrihdfiyafd',
    //     },
    //     {
    //       title: 'Bikash Thapa Chhetri',
    //     },
    //     {
    //       title: 'Bikash Thapa Chhetri',
    //     }
    // ]
    // };



    let welcom = {
      title: "Welcome",
      type: "Welcome",
      data: {
          title:"First Time Travelling",
          title1:"Returning Visitor",
          img:"images/icons/torism/flag.png",
          text:"Lands of highest peaks,incridible landscapes,cultural divercity and birthplaceof Buddha.",
          text2:"I am a bot,I am here to educate, inform and guide you through different aspect of nepal"
      }
    };





    let msg3 = {
      type: 'slider',
      data: [
        {
          title: ['Baglung Branch'],
          subtitle: [],
          features: {
            'Address': ['Hospital Road-2', 'Baglung Dhaulagiri, 33300'],
            'phone': '068-523090',
            'email': 'baglung@laxmibank.com'
          },
          map: {
            latitude: 28.2182405,
            longitude: 83.986414
          },
          button: {
            contents: [

            ]
          }
        },
        {
          title: ['Home Equity Loan'],
          img: 'https://yesrobot.yesbank.in//Content/Images/hcf_pa1haf.png',
          button: {
            contents: [
              {
                title: "home equity loan 1",
                payload: "home equity loan 1"
              }
            ]
          }
        },
        {
          title: ['Auto Loan'],
          img: 'https://yesrobot.yesbank.in//Content/Images/lap_yc4su1.png',
          button: {
            contents: [
              {
                title: "auto loan 1",
                payload: "auto loan 1"
              }
            ]
          }
        },
        {
          title: ['Education Loan'],
          img: 'https://yesrobot.yesbank.in//Content/Images/afhl_nreofd.png',
          button: {
            contents: [
              {
                title: "education loan 1",
                payload: "education loan 1"
              },
              {
                title: "education loan 2",
                payload: "education loan 2"
              },
              {
                title: "education loan 3",
                payload: "education loan 3"
              }
            ]
          }
        },
        {
          title: ['Gold Loan'],
          img: 'https://yesrobot.yesbank.in//Content/Images/afhl_nreofd.png',
          button: {
            contents: [
              {
                title: "Check Eligibility",
                payload: "Check Eligibility"
              }
            ]
          }
        },
        {
          title: ['Loan Against Shares'],
          img: 'https://yesrobot.yesbank.in//Content/Images/afhl_nreofd.png',
          button: {
            contents: [
              {
                title: "Check Eligibility",
                payload: "Check Eligibility"
              }
            ]
          }
        },
        {
          title: ['Sana Byawasai Karja'],
          img: 'https://yesrobot.yesbank.in//Content/Images/afhl_nreofd.png',
          button: {
            contents: [
              {
                title: "Check Eligibility",
                payload: "Check Eligibility"
              }
            ]
          }
        },
        {
          title: ['Micro Finance Service'],
          img: 'https://yesrobot.yesbank.in//Content/Images/afhl_nreofd.png',
          button: {
            contents: [
              {
                title: "Check Eligibility",
                payload: "Check Eligibility"
              }
            ]
          }
        }
      ]
    };

    var msg5={
      "type": "multiple-title",
      "title": [
        "Once is not enough, rightly so  visit to Nepal is a lifetime experience.",
        {
          "title": [
            "What category interest  you ?"
          ]
        }
      ],
      "submenu": {
        "contents": [
          {
            "title": "Spiritual Place",
            "payload": "Spiritual Place",
            "icon": "images/icons/placesto/spriting.png"
          },
          {
            "title": "Trekking ",
            "payload": "Trekking ",
            "icon": "images/icons/placesto/trekking.png"
          },
          {
            "title": "Mountaineering",
            "payload": "Mountaineering",
            "icon": "images/icons/placesto/mount.png"
          },
          {
            "title": "Historical",
            "payload": "Historical",
            "icon": "images/icons/placesto/historical.png"
          },
          {
            "title": "Nature",
            "payload": "Nature",
            "icon": "images/icons/placesto/nature.png"
          }
        ]
      }
     };

    var msg4 = {
      type: 'form',
      data: [
        {
          label: 'First name',
          placeholder: 'Enter first name',
          id: 'firstName',
          type: 'text',
          validation: {
            required: true
          }
        },
        {
          label: 'Last name',
          placeholder: 'Enter last name',
          id: 'lastName',
          type: 'text',
          validation: {
          }
        },
        {
          label: 'Email Address',
          placeholder: 'Enter email address',
          id: 'emailAddress',
          type: 'email',
          validation: {
            required: true,
            email: true
          }
        },
        {
          label: 'Mobile Number',
          placeholder: 'Enter mobile number',
          id: 'mobileNumber',
          type: 'number',
          validation: {
            required: true,
            mobile: true
          }
        }
      ],
      buttons: {
        data: [
          {
            text: 'Submit',
            type: 'submit'
          },
          {
            text: 'Cancel',
            type: 'cancel'
          }
        ]
      }
    };

    /*let weather = {
      title: "weather",
      type: "weather"
    };

      let Treks_treller = {
      title: "treks treller",
      type: "treks_treller",
      data: {
        subtitle:"Find your perfect trek with the GHT trail search tool. ",
        img:"https://www.welcomenepal.com/uploads/destination/everest-pg-adventure.jpeg",
        link1:"https://www.greathimalayatrails.com/ght-video/ght-trailer/",
        link2:"https://www.greathimalayatrails.com/ght-trailers/"
      }
    };

    let kathmandu={
      title:"city_name",
      type:"cityweather",
      weather:[{
        main:"clouds",
        descriptions:"Brokens Clouds",
        icon:"http://openweathermap.org/img/w/11n.png"
      }],
      main:{
        temp:"27",
        pressure:"1080",
        humidity:"10"
      },
        name:"Kathmandu",
    };

    let find_treks = {
      title: "find treks",
      type: "find_treks",
      data: {
        subtitle:"Find your perfect trek with the GHT trail search tool. Whether your sights are set on the famous Base Camp... ",
        link:"https://www.greathimalayatrails.com/find-a-trek/"
      }
    }; 


    let fast_facts = {
      title: "fast_facts",
      type: "fast_facts",
      buttom:"View More",
      subtitle:"Fast Facts",
      data: [{
        link:"https://www.greathimalayatrails.com/destinations/everest-rolwaling/",
        subtitle:"Everest is also known as Sagarmatha in Nepal and Chomolungma in Tibet; the Everest region is known locally as the Khumbu"
        },
        {
        subtitle:"Its home to three of the highest peaks in the world: Everest 8848m; Lhotse, 4th highest at 8516m; and Cho Oyu, 6th highest at 8201m"
        }
      ]
    };

    {
  "title": "The methods of revival of lapsed policy are",
  "type": "ListItem",
  "subtitle": "Methods of revival of lapsed policy",
  "multi":true,
  "data": [
    {
      "subtitle": "1.Revival within the 180 days from DUEDATE"
    },
    {
      "subtitle": "● To revive the lapsed policy, the policy holder needs to pay the interest along with the unpaid premium."
    },
    {
      "subtitle": "2. Revival within 180 days to 1 year from the date of renewal."
    },
    {
      "subtitle": "● Revival form which includes a declaration of good health.(Attached Revival Form)"
    },
    {
      "subtitle": "● All unpaid premium on the policy must be paid along with interest due on the same. "
    },
    {
      "subtitle": "3. Revival after 1 year from the date of renewal."
    },
    {
      "subtitle": "● Revival form which includes a declaration of good health. (Attached Revival Form) "
    },
    {
      "subtitle": "● Depending on age of policyholder and policy Sum Assured , the policy holder needs to undergo medical tests (for this please contact nearest office.)"
    },
    {
      "subtitle": "● All unpaid premium on the policy must be paid along with interest due on the same."
    }
  ]
}
    
    let ListItem = {
      title: "ListItem",
      type: "ListItem",
      buttom:{
        title:"",
        link:"",
      },
      subtitle:"",
      data: [{
        subtitle:"VACCINATIONS",
        payload:"VACCINATIONS"
      },
      {
        subtitle:"TIPS FOR YOUR SAFETY",
        link:"https://www.youtube.com/"
      },
      {
        subtitle:"OTHER HEALTH RISKS"
      },
      {
        subtitle:"ALTITUDE SICKNESS/ACUTE MOUNTAIN SICKNESS (AMS)"
      },
      {
        subtitle:"ACUTE ALTITUDE SICKNESS"
      },
      {
        subtitle:"HIGH ALTITUDE PULMONARY EDEMA (HAPE)"
      }
     ]
    };

    let find_treks = {
      title: "find treks",
      type: "find_treks",
      buttom:{
        title:"View More bikash",
        link:"https://www.greathimalayatrails.com/find-a-trek/",
        payload:"View More"
      },
      data: {
        subtitle:"Find your perfect trek with the GHT trail search tool. Whether your sights are set on the famous Base Camp... ",
        img:"https://www.greathimalayatrails.com/wp-content/uploads/2019/05/laurentiu-morariu-1437608-unsplash-1-1024x683.jpg"
      }
}; 

let welcomeTop = {
  "title": "welcomeTop Banner",
  "type": "welcomeTop",
  "button": [
    {
      "title": "LET'S GET STARTED",
      "payload": "Get Started"
    }
  ],
  "data": [
    {
      "img": "images/icons/torism/namaste.png",
      "subtext_content": "Getting information about Nepal is now easier. ",
      "text": "Personal Virtual Assistant",
      "subtext": "I am your Virtual Assistant  to guide you through different aspects of Nepal. Tap the button below to get started.",
      "welcometext": "Hi There",
      "cardimg": "images/img/tourism.png",
      "bannerImg": "images/img/ntb-banner.png",
      "subtitle": "NTB Chatbot",
      "btntitle": "LET'S GET STARTED"
    }
  ]
}


     let filter_date = {
      title: "Filter By Date",
      type: "filter_date",

      data: [{
          label_y: "Jan",
          slider: [{
              img: "https://www.welcomenepal.com/uploads/event/maghi-lt-ss.jpeg",
              title: 'MAGHE SANKRANTI',
              subtitle: 'Let Maghe Sankranti bring you some good cheer & family bonding this January!',
              button: {
                contents: [{
                    title: "button1",
                    paylink: "https://www.welcomenepal.com/whats-on/gai-jatra.html",
                  },
                  {
                    title: "button2",
                    // link:"http://2020.welcomenepal.com/",
                    paylink: "button2"
                  }
                ]
              }
            },
            {
              img: "https://www.welcomenepal.com/uploads/event/maghi-lt-ss.jpeg",
              icon_button: {
                contents: [{
                    title: "icon button",
                    paylink: "my",
                    icon: "<i class='fa fa-home'></i>"
                  },
                  {
                    title: "icon button",
                    paylink: "name",
                    icon: "<i class='fa fa-home'></i>"
                  },
                  {
                    title: "icon button",
                    paylink: " is",
                    icon: "<i class='fa fa-home'></i>"
                  },
                  {
                    title: "icon button",
                    paylink: " bikash",
                    icon: "<i class='fa fa-home'></i>"
                  }, {
                    title: "icon button",
                    paylink: " thapa",
                    icon: "<i class='fa fa-home'></i>"
                  }
                ]
              }
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            }
          ]
        },

        {
          label_y: "Feb",
          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                    title: "button1",
                    paylink: "https://www.welcomenepal.com/whats-on/ghode-jatra1.html"
                  },
                  {
                    title: "button1",
                    paylink: "https://www.welcomenepal.com/whats-on/ghode-jatra1.html"
                  },
                  {
                    title: "button1",
                    paylink: "Hi ikash"
                  }
                ]
              }
            }
          ]
        },

        {
          label_y: "Mar",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                    title: "button1",
                    paylink: "https://www.welcomenepal.com/whats-on/gai-jatra.html",
                  },
                  {
                    title: "button2",
                    paylink: "http://2020.welcomenepal.com/",
                  }
                ]
              }
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                  title: "button2",
                  paylink: "http://2020.welcomenepal.com/",
                }]
              }
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                  title: "button2",
                  paylink: "http://2020.welcomenepal.com/",
                }]
              }
            }
          ]
        },

        {
          label_y: "Apr",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/event/janakpur5-lt.jpeg",
              title: 'RAM NAVAMI',
              subtitle: 'Visit holy Ram temple in your vicinity, on the auspicious occasion of Ram Navami!',
              button: {
                contents: [{
                  title: "button2",
                  paylink: "Apr",
                }]
              }
            },
            {
              img: "https://www.welcomenepal.com/uploads/event/new-years.jpeg",
              title: 'NEPALI NEW YEAR',
              subtitle: 'Welcome the Nepali New Year in grace and style!',
              button: {
                contents: [{
                  title: "button1",
                  paylink: "https://www.welcomenepal.com/whats-on/gai-jatra.html",
                }]
              }
            },
            {
              img: "https://www.welcomenepal.com/uploads/event/sindoor-jatra-csk.jpeg",
              title: 'SINDOOR JATRA',
              subtitle: 'Join the exuberance of the Sindoor Jatra in Thimi, Bhaktapur!',
              button: {
                contents: [{
                  title: "button1",
                  paylink: "https://www.welcomenepal.com/whats-on/gai-jatra.html",
                }]
              }
            }
          ]
        },

        {
          label_y: "May",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                    title: "button1",
                    paylink: "may",
                  },
                  {
                    title: "button2",
                    paylink: "http://2020.welcomenepal.com/",
                  }
                ]
              }
            }
          ]
        },


        {
          label_x: "Aug",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            }
          ]
        },

        {
          label_x: "Sep",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                    title: "button1",
                    paylink: "https://www.welcomenepal.com/whats-on/gai-jatra.html",
                  },
                  {
                    title: "button2",
                    paylink: "http://2020.welcomenepal.com/",
                  }
                ]
              }
            }
          ]
        },


        {
          label_x: "Oct",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            }
          ]
        },

        {
          label_x: "Nov",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                  title: "button2",
                  paylink: "http://2020.welcomenepal.com/",
                }]
              }
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
              button: {
                contents: [{
                  title: "button2",
                  paylink: "http://2020.welcomenepal.com/",
                }]
              }
            }
          ]
        },

        {
          label_x: "Dec",

          slider: [{
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            },
            {
              img: "https://www.welcomenepal.com/uploads/slider/bardiya-nepal-banner.jpeg",
              title: 'Baglung Branch',
              subtitle: 'bikash',
            }
          ]
        },


      ]
    };


      let country_picker = {
      title: " country_picker",
      type: "country_picker",
      data: [{
          subtitle: "Which Country are you from ?"
        },
        {
          button: {
            contents: [{
              title: "Submit",
              payload: "submit"
            }]
          }
        }
      ]
    };




    
      
        let weather = {
          title: "Please type the location you want to see weather",
          type: "weather",
          data:[{
                placeholder:"Please select locations..",
                subtitle:"Please type the Location",
                button:"See Weather"
              },
        ],
        weather:[
          {
            temperature:"Temperature",
            pressure:"Pressure",
            humidity:"Humidity",
            multiTitle:" ??, Is this location exist ? Sorry, this Location couldnot be found please Re-type again ..",
          }
        ],
     //if we want to give customize data if not available in openweathermap api
        city:{
          gorkha:{
            temp:"40",
            pressure:"1000",
            humidity:"65",
            description:"fresh day",
            img:"",
            subtext:"Gorkha district"
          },
          palmmind:{
            temp:"40",
            pressure:"1000",
            humidity:"65",
            description:"fresh day",
            img:"",
            subtext:"Palmmind I.T Company "
          }
        },

        nearcity:{
          kanchanjunga:{//through key we can access of weather of data
            city:"kanchanjunga",
            ncity:"yangma"//this should have data of openweather app(nearest city)
          },
          everest:{
            city:"Mt.Everest",
            ncity:"namche bazaar"
          },
          sagarmatha:{
            city:"Sagarmatha",
            ncity:"namche bazaar"
          },
          annapurna:{
            city:"annapurna",
            ncity:"phedi"
          },
          manaslu:{
            city:"manaslu",
            ncity:"thoche"
          }
        }
        };




 
     if(typeof(message) === 'object'){
       if(message.type === 'date'){
         socket.emit('message_received', message.date);
        }
      };
      
    if (message.includes('ham')) {
      socket.emit('message_received', msg);
    }
    else if (message.includes('quick')) {//include type as well this
      socket.emit('message_received', msg2);
    }
    else if (message.includes('slide')) {
      socket.emit('message_received', msg3);
    }
    else if (message.includes('form')) {
      socket.emit('message_received', msg4);
    }
    else if (message.includes('submenu')) {
      socket.emit('message_received', submen);
    }
    else if (message.includes('icon_rep')) {
      socket.emit('message_received', icon_rep);
    }
     if (message.includes('seekbar')) {
      socket.emit('message_received', seekbar);
    }
    else if(message.includes('date')){
      socket.emit('message_received',datepicker);
    }
    else if(message.includes('time')){
      socket.emit('message_received',timepicker);
    }
    else if(message.includes('checkbar')){
      socket.emit('message_received',checkbar);
    }
    else if(message.includes('welcome')){
      socket.emit('message_received',welcom);
    }
    else if(message.includes('multiple-title')){
      socket.emit('message_received',msg5);
    }
    else if (message === 'weather'){
      socket.emit('message_received',weather);
    }
    else {
      socket.emit('message_received', message);
    }*/
    /*let QAlist = {
      type: "QAlist",
      title:"nchdamansdjaugfjhaDG JASH",
      subtitle: "Choose Visa Catagory",
      subtext:"please click on of bellow",
      data: [{
        maintitle:"bikash",
        value:"thapa"
      },
      {
        maintitle:"bikash 1",
        value:"chhetri"
      },
      {
        maintitle:"bikash 2",
        value:"thapa"
      },
      {
        maintitle:"bikash 3",
        value:"thapa"
      }
      ],

// datas are added as a required us if we need to more to click next icon
      datas:{
        thapa:{
          type: "QAlist",
          subtitle: "Choose Visa Catagory",
          prev: "fa-chevron-left",
          data: [{
            maintitle:"bikash 4",
            value:"thapa"
          },
          {
            maintitle:"bikash 5",
            value:"thapa"
          },
          {
            maintitle:"bikash 6",
            value:"thapa"
          },
          {
            maintitle:"bikash 7",
            value:"thapa"
          }
          ],
          datas:{
            thapa:{
              type: "QAlist",
              subtitle: "Choose Visa Catagory visa",
              prev: "fa-angle-double-left",
              data: [{
                maintitle:"visa 1",
                payload:"visa"
              },
              {
                maintitle:"visa 2",
                value:"chhetri"
              },
              {
                maintitle:"visa 3",
                value:"thapa"
              },
              {
                maintitle:"visa 4",
                value:"chhetri"
              }
              ]  
            },
            chhetri:{
              type: "QAlist",
              subtitle: "Choose Visa yangdeli",
              prev: "fa-angle-double-left",
              data: [{
                maintitle:"bikash yangdeli",
                value:"thapa"
              },
              {
                maintitle:"bikash yangdeli",
                value:"thapa"
              },
              {
                maintitle:"bikas yandi",
                value:"thapa"
              },
              {
                maintitle:"bikash 11",
                value:"thapa"
              }
              ]
            },
    
          }  
        },
        chhetri:{
          type: "QAlist",
          subtitle: "Choose Visa Catagory",
          prev: "fa-chevron-left",
          data: [{
            maintitle:"bikash 8",
            value:"thapa"
          },
          {
            maintitle:"bikash 9",
            value:"chhetri"
          },
          {
            maintitle:"bikash 10",
            value:"thapa"
          },
          {
            maintitle:"bikash 11",
            value:"thapa"
          }
          ],
          datas:{
            thapa:{
              type: "QAlist",
              subtitle: "Choose Visa Catagory palmmind",
              prev: "fa-angle-double-left",
              data: [{
                maintitle:"palmmind",
                value:"thapa"
              },
              {
                maintitle:"palmmind 1",
                value:"thapa"
              },
              {
                maintitle:"palmmind 2",
                value:"thapa"
              },
              {
                maintitle:"palmmind 3",
                value:"thapa"
              }
              ]  
            },
            chhetri:{
              type: "QAlist",
              subtitle: "Choose Visa Catagory gorkhali",
              prev: "fa-angle-double-left",
              data: [{
                maintitle:"gorkhali",
                value:"thapa"
              },
              {
                maintitle:"gorkhali 1",
                value:"thapa"
              },
              {
                maintitle:"gorkhali 2",
                value:"thapa"
              },
              {
                maintitle:"bikash 11",
                value:"thapa"
              }
              ]
            },
    
          } 
          
        },

      }
    }*/



    /*for qalist DataTransfer
    export let singleback = {
      type: "QAlist",
      subtitle: "Choose Visa Catagory",
      subtext:"please click on of bellow",
      data: [{
        maintitle:"bikash",
        value:"thapa"
      },
      {
        maintitle:"bikash 1",
        value:"chhetri"
      },
      {
        maintitle:"bikash 2",
        value:"thapa"
      },
      {
        maintitle:"bikash 3",
        value:"thapa"
      }
      ],
    // datas are added as a required us if we need to more to click next icon add datats after datas and give value with same key to access 
    datas:{
      thapa:{
        type: "QAlist",
        subtitle: "Choose Visa Catagory",
        prev: "fa-chevron-left",
        data: [{
          maintitle:"bikash 4",
          value:"thapa"
        },
        {
          maintitle:"bikash 5",
          value:"thapa"
        },
        {
          maintitle:"bikash 6",
          value:"thapa"
        },
        {
          maintitle:"bikash 7",
          value:"thapa"
        }
        ],
        datas:{
          thapa:{
            type: "QAlist",
            subtitle: "Choose Visa Catagory visa",
            prev: "fa-angle-double-left",
            data: [{
              maintitle:"visa 1",
              payload:"visa"
            },
            {
              maintitle:"visa 2",
              value:"chhetri"
            },
            {
              maintitle:"visa 3",
              value:"thapa"
            },
            {
              maintitle:"visa 4",
              value:"chhetri"
            }
            ]  
          },
          chhetri:{
            type: "QAlist",
            subtitle: "Choose Visa yangdeli",
            prev: "fa-angle-double-left",
            data: [{
              maintitle:"bikash yangdeli",
              value:"thapa"
            },
            {
              maintitle:"bikash yangdeli",
              value:"thapa"
            },
            {
              maintitle:"bikas yandi",
              value:"thapa"
            },
            {
              maintitle:"bikash 11",
              value:"thapa"
            }
            ]
          },
    
        }  
      },
    
      chhetri:{
        type: "QAlist",
        subtitle: "Choose Visa Catagory",
        prev: "fa-chevron-left",
        data: [{
          maintitle:"bikash 8",
          value:"thapa"
        },
        {
          maintitle:"bikash 9",
          value:"chhetri"
        },
        {
          maintitle:"bikash 10",
          value:"thapa"
        },
        {
          maintitle:"bikash 11",
          value:"thapa"
        }
        ],
        datas:{
          thapa:{
            type: "QAlist",
            subtitle: "Choose Visa Catagory palmmind",
            prev: "fa-angle-double-left",
            data: [{
              maintitle:"palmmind",
              value:"thapa"
            },
            {
              maintitle:"palmmind 1",
              value:"thapa"
            },
            {
              maintitle:"palmmind 2",
              value:"thapa"
            },
            {
              maintitle:"palmmind 3",
              value:"thapa"
            }
            ]  
          },
          chhetri:{
            type: "QAlist",
            subtitle: "Choose Visa Catagory gorkhali",
            prev: "fa-angle-double-left",
            data: [{
              maintitle:"gorkhali",
              value:"thapa"
            },
            {
              maintitle:"gorkhali 1",
              value:"thapa"
            },
            {
              maintitle:"gorkhali 2",
              value:"thapa"
            },
            {
              maintitle:"bikash 11",
              value:"thapa"
            }
            ]
          },
    
        } 
        
      },
    
    }
    }
    
    
    export let doubleback = {
      type: "QAlist",
      subtitle: "Choose Visa Catagory",
      prev: "fa-chevron-left",
      data: [{
        maintitle:"bikash 4",
        value:"thapa"
      },
      {
        maintitle:"bikash 5",
        value:"thapa"
      },
      {
        maintitle:"bikash 6",
        value:"thapa"
      },
      {
        maintitle:"bikash 7",
        value:"thapa"
      }
      ],
      datas:{
        thapa:{
          type: "QAlist",
          subtitle: "Choose Visa Catagory visa",
          prev: "fa-chevron-left",
          data: [{
            maintitle:"visa 1",
            value:"thapa"
          },
          {
            maintitle:"visa 2",
            value:"chhetri"
          },
          {
            maintitle:"visa 3",
            value:"thapa"
          },
          {
            maintitle:"visa 4",
            value:"chhetri"
          }
          ]  
        },
        chhetri:{
          type: "QAlist",
          subtitle: "Choose Visa yangdeli",
          prev: "fa-chevron-left",
          data: [{
            maintitle:"bikash yangdeli",
            value:"thapa"
          },
          {
            maintitle:"bikash yangdeli",
            value:"thapa"
          },
          {
            maintitle:"bikas yandi",
            value:"thapa"
          },
          {
            maintitle:"bikash 11",
            value:"thapa"
          }
          ]
        },
    
      }  
    };*/


//     let QAlist = {
//       type: "QAlist",
//       title:"nchdamansdjaugfjhaDG JASH",
//       subtitle: "Choose Visa Catagory",
//       subtext:"please click on of bellow",
//       data: [{
//         maintitle:"How do I apply for visa ? ",
//         payload:"visa"
//       },
//       {
//         maintitle:"What are documents required for visa ? ",
//         payload:"Visa_documentation"
//       },
//       {
//         maintitle:"what are different types of visa ? ",
//         value:"visa_categories"
//       },
//       {
//         maintitle:"what is the visa fee ? ",
//         value:"visaFee"
//       },
//       {
//         maintitle:"Am Indian do i need visa to enter Nepal ?",
//         payload:"Visa for Indian national"
//       }
//       ],

// // datas are added as a required us if we need to more to click next icon
//       datas:{
//         visa_categories:{
//           type: "QAlist",
//           subtitle: "Different Visa Categories",
//           prev: "fa-chevron-left",
//           data: [{
//             maintitle:"Non-Tourist Visa ",
//             payload:"Non-Tourist Visa"
//           },
//           {
//             maintitle:"Residental Visa",
//             payload:"Residental Visa"
//           },
//           {
//             maintitle:"Gratis (Free) Visa",
//             payload:"Gratis (Free) Visa"
//           },
//           {
//             maintitle:"Business Visa",
//             payload:"Business Visa"
//           },
//           {
//             maintitle:"Tourist Visa",
//             payload:"Tourist Visa"
//           },
//           {
//             maintitle:"Study Visa",
//             payload:"Study Visa"
//           }
//           ],
//         },
//         visaFee:{
//           type: "QAlist",
//           subtitle: "Choose Visa Catagory to Know Visa Fee",
//           prev: "fa-chevron-left",
//           data: [{
//             maintitle:"Non-Tourist Visa ",
//             payload:"Non-Tourist Visa"
//           },
//           {
//             maintitle:"Residental Visa",
//             payload:"Residental Visa"
//           },
//           {
//             maintitle:"Gratis (Free) Visa",
//             payload:"Gratis (Free) Visa"
//           },
//           {
//             maintitle:"Business Visa",
//             payload:"Business Visa"
//           },
//           {
//             maintitle:"Tourist Visa",
//             payload:"Tourist Visa"
//           },
//           {
//             maintitle:"Study Visa",
//             payload:"Study Visa"
//           }
//           ],
//         },
//       }
//     };


/*{
  "type": "multiple-title",
  "title": [
    "Great!! I will be assisting you with all your questions.",
    {
      "title": [
        "I can see you are looking for information on Nepal."
      ]
    },
    "Get started using our quick links:"
  ],
  "button": {
    "contents": [
      {
        "title": "Visa",
        "payload": "Visa Details"
      },
      {
        "title": "Festivals",
        "payload": "Festivals"
      },
      {
        "title": "Weather",
        "payload": "Weather"
      },
      {
        "title": "Things To Do",
        "payload": "Things to Do"
      },
      {
        "title": "Places To Visit",
        "payload": "Places To Visit"
      },
      {
        "title": "See Quick Facts",
        "payload": "See Quick Facts"
      },
      {
        "title": "Let Me Explore More",
        "payload": "Let Me Explore More"
      }
    ]
  }
}*/




// let home_slider={
//   type:"homeSlider",
//   title:"homeslider",
//   data:[
//     {
//        imgtitle: "palmmind IT company",
//      callactionBtn: {
//        link: "http://palmmind.com/",
//        title: "CallAction"
//        },
//       img:"images/img/festivals/chhat-oy-lt.jpeg",
//       button: {
//         contents: [
//           {
//             title: "education loan 1",
//             link: "https://getbootstrap.com/docs/4.0/components/badge/"
//           },
//           {
//             title: "education loan 2",
//             payload: "education loan 2"
//           },
//           {
//             title: "education loan 3",
//             payload: "education loan 3"
//           }
//         ]
//       },
//       title:"HomeBanner",
//       subtitle:"In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//     },
//     {
//       img:"images/img/festivals/chhat-oy-lt.jpeg",
//       iconbutton: {
//         contents: [
//           {
//             img:"images/banner/room.png",
//             title: "education loan 1",
//             payload: "education loan 1"
//           },
//           {
//             img:"images/banner/room.png",
//             title: "education loan 2",
//             payload: "education loan 2"
//           },
//           {
//             img:"images/banner/room.png",
//             title: "education loan 3",
//             payload: "education loan 3"
//           },
//           {
//             img:"images/banner/room.png",
//             title: "education loan 3",
//             payload: "education loan 3"
//           },
//           {
//             img:"images/banner/room.png",
//             title: "education loan 3",
//             payload: "education loan 3"
//           }
//         ]
//       },
//       title:"HomeBanner",
//       subtitle:"HomeBanner subtitle 1",
//       features:""
//     },
//     {
//       img:"images/img/festivals/chhat-oy-lt.jpeg",
//       title:"HomeBanner2",
//       form: [
//               {
//                 label: 'First name',
//                 placeholder: 'Enter first name',
//                 id: 'firstName',
//                 type: 'text',
//                 validation: {
//                   required: true
//                 }
//               },
//               {
//                 label: 'Email Address',
//                 placeholder: 'Enter email address',
//                 id: 'emailAddress',
//                 type: 'email',
//                 validation: {
//                   required: true,
//                   email: true
//                 }
//               },
//               {
//                 label: 'Mobile Number',
//                 placeholder: 'Enter mobile number',
//                 id: 'mobileNumber',
//                 type: 'number',
//                 validation: {
//                   required: true,
//                   mobile: true
//                 }
//               }
//             ]
//     },
//     {
//       img:"images/img/festivals/chhat-oy-lt.jpeg",
//       button: {
//         contents: [
//           {
//             title: "education loan 1",
//             payload: "education loan 1"
//           },
//           {
//             title: "education loan 2",
//             payload: "education loan 2"
//           },
//           {
//             title: "education loan 3",
//             payload: "education loan 3"
//           }
//         ]
//       },
//       title:"HomeBanner3",
//       subtitle:"HomeBanner subtitle 3",
//       features:""
//     },
//     {
//       img:"images/img/festivals/chhat-oy-lt.jpeg",
//       title:"HomeBanner5",
//       form: [
//               {
//                 label: 'First name',
//                 placeholder: 'Enter first name',
//                 id: 'firstName',
//                 type: 'text',
//                 validation: {
//                   required: true
//                 }
//               },
//               {
//                 label: 'Email Address',
//                 placeholder: 'Enter email address',
//                 id: 'emailAddress',
//                 type: 'email',
//                 validation: {
//                   required: true,
//                   email: true
//                 }
//               },
//               {
//                 label: 'Mobile Number',
//                 placeholder: 'Enter mobile number',
//                 id: 'mobileNumber',
//                 type: 'number',
//                 validation: {
//                   required: true,
//                   mobile: true
//                 }
//               }
//             ]
//     }
//   ]
// }


// homeslider JSON

// {
//   "type": "homeSlider",
//   "title": "homeslider",
//   "data": [
//     {
//       "img": "images/img/festivals/chhat-oy-lt.jpeg",
//       "button": {
//         "contents": [
//           {
//             "title": "education loan 1",
//             "link": "https://getbootstrap.com/docs/4.0/components/badge/"
//           },
//           {
//             "title": "education loan 2",
//             "payload": "education loan 2"
//           },
//           {
//             "title": "education loan 3",
//             "payload": "education loan 3"
//           }
//         ]
//       },
//       "title": "HomeBanner",
//       "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//     },
//     {
//       "img": "images/img/festivals/chhat-oy-lt.jpeg",
//       "iconbutton": {
//         "contents": [
//           {
//             "img": "images/banner/room.png",
//             "title": "education loan 1",
//             "payload": "education loan 1"
//           },
//           {
//             "img": "images/banner/room.png",
//             "title": "education loan 2",
//             "payload": "education loan 2"
//           },
//           {
//             "img": "images/banner/room.png",
//             "title": "education loan 3",
//             "payload": "education loan 3"
//           },
//           {
//             "img": "images/banner/room.png",
//             "title": "education loan 3",
//             "payload": "education loan 3"
//           },
//           {
//             "img": "images/banner/room.png",
//             "title": "education loan 3",
//             "payload": "education loan 3"
//           }
//         ]
//       },
//       "title": "HomeBanner",
//       "subtitle": "HomeBanner subtitle 1",
//       "features": ""
//     },
//     {
//       "img": "images/img/festivals/chhat-oy-lt.jpeg",
//       "title": "HomeBanner2",
//       "form": [
//         {
//           "label": "First name",
//           "placeholder": "Enter first name",
//           "id": "firstName",
//           "type": "text",
//           "validation": {
//             "required": true
//           }
//         },
//         {
//           "label": "Email Address",
//           "placeholder": "Enter email address",
//           "id": "emailAddress",
//           "type": "email",
//           "validation": {
//             "required": true,
//             "email": true
//           }
//         },
//         {
//           "label": "Mobile Number",
//           "placeholder": "Enter mobile number",
//           "id": "mobileNumber",
//           "type": "number",
//           "validation": {
//             "required": true,
//             "mobile": true
//           }
//         }
//       ]
//     },
//     {
//       "img": "images/img/festivals/chhat-oy-lt.jpeg",
//       "button": {
//         "contents": [
//           {
//             "title": "education loan 1",
//             "payload": "education loan 1"
//           },
//           {
//             "title": "education loan 2",
//             "payload": "education loan 2"
//           },
//           {
//             "title": "education loan 3",
//             "payload": "education loan 3"
//           }
//         ]
//       },
//       "title": "HomeBanner3",
//       "subtitle": "HomeBanner subtitle 3",
//       "features": ""
//     },
//     {
//       "img": "images/img/festivals/chhat-oy-lt.jpeg",
//       "title": "HomeBanner5",
//       "form": [
//         {
//           "label": "First name",
//           "placeholder": "Enter first name",
//           "id": "firstName",
//           "type": "text",
//           "validation": {
//             "required": true
//           }
//         },
//         {
//           "label": "Email Address",
//           "placeholder": "Enter email address",
//           "id": "emailAddress",
//           "type": "email",
//           "validation": {
//             "required": true,
//             "email": true
//           }
//         },
//         {
//           "label": "Mobile Number",
//           "placeholder": "Enter mobile number",
//           "id": "mobileNumber",
//           "type": "number",
//           "validation": {
//             "required": true,
//             "mobile": true
//           }
//         }
//       ]
//     }
//   ]
// }

// buttonSliderwithSlider Json
// {
//   "title": "Hello world",
//   "type": "buttonsliderwithslider",
//   "data": [
//     {
//       "title": "Button 1",
//       "payload": "button 1",
//       "img": "images/banner/room.png",
//       "slider": [
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg",
//           "contents": {
//             "leftrightcontent": {
//               "leftcontent": "123",
//               "righcontent": "24"
//             },
//             "icon": [
//               {
//                 "icon": "images/banner/room.png"
//               },
//               {
//                 "icon": "images/banner/room.png"
//               },
//               {
//                 "icon": "images/banner/room.png"
//               }
//             ]
//           },
//           "button": {
//             "contents": [
//               {
//                 "title": "education loan 2",
//                 "payload": "education loan 2"
//               },
//               {
//                 "title": "education loan 3",
//                 "payload": "education loan 3"
//               }
//             ]
//           },
//           "title": "HomeBanner 1",
//           "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//         },
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg"
//         }
//       ]
//     },
//     {
//       "img": "images/banner/room.png",
//       "title": "button 2",
//       "payload": "button 2",
//       "slider": [
//         {
//           "callactionBtn": {
//             "link": "http://palmmind.com/",
//             "title": "CallAction"
//           },
//           "img": "images/img/festivals/chhat-oy-lt.jpeg",
//           "title": "HomeBanner 2",
//           "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//         },
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg"
//         }
//       ]
//     },
//     {
//       "img": "images/banner/room.png",
//       "title": "button 3 ",
//       "payload": "button 3",
//       "slider": [
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg",
//           "title": "HomeBanner 3",
//           "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//         },
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg"
//         }
//       ]
//     },
//     {
//       "img": "images/banner/room.png",
//       "title": "button 4",
//       "payload": "button 4",
//       "slider": [
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg",
//           "button": {
//             "contents": [
//               {
//                 "title": "education loan 1",
//                 "link": "https://getbootstrap.com/docs/4.0/components/badge/"
//               },
//               {
//                 "title": "education loan 2",
//                 "payload": "education loan 2"
//               }
//             ]
//           },
//           "title": "HomeBanner 4",
//           "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//         },
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg"
//         }
//       ]
//     },
//     {
//       "title": "button 5",
//       "payload": "button 5",
//       "img": "images/banner/room.png",
//       "slider": [
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg",
//           "button": {
//             "contents": [
//               {
//                 "title": "education loan 1",
//                 "link": "https://getbootstrap.com/docs/4.0/components/badge/"
//               },
//               {
//                 "title": "education loan 2",
//                 "payload": "education loan 2"
//               }
//             ]
//           },
//           "title": "HomeBanner 5",
//           "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//         },
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg"
//         }
//       ]
//     },
//     {
//       "title": "button 6",
//       "payload": "button 6",
//       "img": "images/banner/room.png",
//       "slider": [
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg",
//           "button": {
//             "contents": [
//               {
//                 "title": "education loan 1",
//                 "link": "https://getbootstrap.com/docs/4.0/components/badge/"
//               },
//               {
//                 "title": "education loan 2",
//                 "payload": "education loan 2"
//               }
//             ]
//           },
//           "title": "HomeBanner 1",
//           "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//         },
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg"
//         }
//       ]
//     },
//     {
//       "title": "button 7",
//       "payload": "button 7",
//       "img": "images/banner/room.png",
//       "slider": [
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg",
//           "button": {
//             "contents": [
//               {
//                 "title": "education loan 1",
//                 "link": "https://getbootstrap.com/docs/4.0/components/badge/"
//               },
//               {
//                 "title": "education loan 2",
//                 "payload": "education loan 2"
//               }
//             ]
//           },
//           "title": "HomeBanner 1",
//           "subtitle": "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
//         },
//         {
//           "img": "images/img/festivals/chhat-oy-lt.jpeg"
//         }
//       ]
//     },
//     {
//       "title": "button 8",
//       "payload": "button 7",
//       "img": "images/banner/room.png"
//     }
//   ]
// }

/*
 let slide={
    title: "Hello world",
    type: "buttonsliderwithslider",
    data: [
      {
        title: "Button 1",
        payload: "button 1",
        img: "images/banner/room.png",
        slider: [
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg",
            contents:{
                 leftrightcontent:{
                   leftcontent:"123",
                   righcontent:"24"
                 },
                 icon:[{
                  icon:"images/banner/room.png",
                },
                {
                  icon:"images/banner/room.png",
                },
                {
                  icon:"images/banner/room.png"
                }
              ]
            },
            button: {
              contents: [
                {
                  title: "education loan 2",
                  payload: "education loan 2"
                },
                {
                  title: "education loan 3",
                  payload: "education loan 3"
                }
              ]
            },
            title: "HomeBanner 1",
            subtitle: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
          },
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg"
          }
        ]
      },
      {
        img: "images/banner/room.png",
        title: "button 2",
        payload: "button 2",
        slider: [
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg",
            title: "HomeBanner 2",
            subtitle: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
          },
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg"
          }
        ]
      },
      {
        img: "images/banner/room.png",
        title: "button 3 ",
        payload: "button 3",
        slider: [
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg",
            title: "HomeBanner 3",
            subtitle: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
          },
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg"
          }
        ]
      },
      {
        img: "images/banner/room.png",
        title: "button 4",
        payload: "button 4",
        slider: [
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg",
            button: {
              contents: [
                {
                  title: "education loan 1",
                  link: "https://getbootstrap.com/docs/4.0/components/badge/"
                },
                {
                  title: "education loan 2",
                  payload: "education loan 2"
                }
              ]
            },
            title: "HomeBanner 4",
            subtitle: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
          },
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg"
          }
        ]
      },
      {
        title: "button 5",
        payload: "button 5",
        img: "images/banner/room.png",
        slider: [
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg",
            button: {
              contents: [
                {
                  title: "education loan 1",
                  link: "https://getbootstrap.com/docs/4.0/components/badge/"
                },
                {
                  title: "education loan 2",
                  payload: "education loan 2"
                }
              ]
            },
            title: "HomeBanner 5",
            subtitle: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
          },
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg"
          }
        ]
      },
      {
        title: "button 6",
        payload: "button 6",
        img: "images/banner/room.png",
        slider: [
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg",
            button: {
              contents: [
                {
                  title: "education loan 1",
                  link: "https://getbootstrap.com/docs/4.0/components/badge/"
                },
                {
                  title: "education loan 2",
                  payload: "education loan 2"
                }
              ]
            },
            title: "HomeBanner 1",
            subtitle: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
          },
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg"
          }
        ]
      },
      {
        title: "button 7",
        payload: "button 7",
        img: "images/banner/room.png",
        slider: [
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg",
            button: {
              contents: [
                {
                  title: "education loan 1",
                  link: "https://getbootstrap.com/docs/4.0/components/badge/"
                },
                {
                  title: "education loan 2",
                  payload: "education loan 2"
                }
              ]
            },
            title: "HomeBanner 1",
            subtitle: "In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button."
          },
          {
            img: "images/img/festivals/chhat-oy-lt.jpeg"
          }
        ]
      },
      {
        title: "button 8",
        payload: "button 7",
        img: "images/banner/room.png"
      }
    ]
  }

new slider format vertical/horizental/without background
{
"type": "slider",
"title": "bikash test dynamic slider",
"data": [
{
"img": "https://yesrobot.yesbank.in//Content/Images/hcf_pa1haf.png",
"title": [
[
"Home Equity Loan"
]
],
"subtitle": "graphics generator for web pages and anywhere else you need an impressive logo without a lot of design work. Simply choose what kind of image you would like. Then fill out a form and you'll have your own custom image created",
"button": {
"contents": [
{
"title": "hellow",
"payload": "home equity loan 1"
},
{
"title": "Palmmind",
"payload": "slider"
},
{
"title": "test",
"payload": "home equity loan 1"
}
]
},
"contents": {
"leftrightcontent": {
"leftcontent": "palmmind",
"righcontent": "$ 2400"
},
"rating": {
"link": "https://jsoneditoronline.org/",
"review": "15",
"value": "4"
},
"icon": [
{
"icon": "images/banner/room.png",
"link": "https://www.w3schools.com/howto/howto_css_star_rating.asp",
"value": "10"
},
{
"icon": "images/banner/room.png",
"link": "https://www.w3schools.com/howto/howto_css_star_rating.asp",
"value": "11"
},
{
"icon": "images/banner/room.png",
"link": "https://www.w3schools.com/howto/howto_css_star_rating.asp",
"value": "12"
}
]
}
},
{
"title": [
[
"Home Equity Loan"
]
],
"subtitle": "graphics generator for web pages and anywhere else you need an impressive logo without a lot of design work. Simply choose what kind of image you would like. Then fill out a form and you'll have your own custom image created",
"buttonhorizental": {
"contents": [
{
"title": "hellow",
"payload": "home equity loan 1"
},
{
"title": "Palmmind",
"payload": "home equity loan 1"
},
{
"title": "test",
"payload": "home equity loan 1"
}
]
},
"map": {
"latitude": 28.2182405,
"longitude": 83.986414
}
},
{
"title": [
[
"Home Equity Loan"
]
],
"subtitle": "graphics generator for web pages and anywhere else you need an impressive logo without a lot of design work. Simply choose what kind of image you would like. Then fill out a form and you'll have your own custom image created",
"buttonWithOutBackground": {
"contents": [
{
"title": "hellow dsfgsd",
"payload": "home equity loan 1"
},
{
"title": "Palmmind sdfjgsd",
"payload": "home equity loan 1"
},
{
"title": "test dsfgsdyf",
"payload": "home equity loan 1"
}
]
},
"map": {
"latitude": 28.2182405,
"longitude": 83.986414
}
}
]
}

//form lead data jason


    {
        "type": "multiple-title",
        "title": [
          "I'm still learning so keep your questions simple so i can understand 🙂",
          {
            "title": [
              "Please fill in the form below."
            ]
          }
        ],
      "formModule":{
            "type": "formLead",
            "subtitle":"Design a bot in minutes so it can start acquiring leads for you and automate next steps. Bots work for you all day delivering qualified leads and speeding up customer resolutions.",
            "headertitle":"For More Query",
            "data": [
              {
                "label": "your name",
                "placeholder": "Enter your name",
                "id": "firstName",
                "type": "text",
                "validation": {
                  "required": true
                }
              },
              {
                "label": "Email Address",
                "placeholder": "Enter email address",
                "id": "emailAddress",
                "type": "email",
                "validation": {
                  "required": true,
                  "email": true
                }
              },
              {
                "label": "Mobile Number",
                "placeholder": "Enter mobile number",
                "id": "mobileNumber",
                "type": "number",
                "validation": {
                  "required": true,
                  "mobile": true
                }
              }
            ],
            "buttons": {
              "data": [
                {
                  "text": "Submit",
                  "type": "submit"
                },
                {
                  "text": "Cancel",
                  "type": "cancel"
                }
              ]
            }
          }
      }




      multipletitleTable

      
    {
        "type": "multiple-title",
        "title": [
          "I'm still learning so keep your questions simple so i can understand 🙂",
          {
            "title": [
              "Please fill in the form below."
            ]
          }
        ],
      "table":{
        "type": "table",
        "button": {
          "contents": [
            {
              "title": "View More",
              "link": "http://www.nepalimmigration.gov.np/post/notice-regarding-visa-fee-updates"
            }
          ]
        },
        "data": [
          {
            "Non-Tourist Visa Fee Details": "Foreigners with Nepalese Origin",
            "Visa Fee": "$10/Month"
          },
          {
            "Non-Tourist Visa Fee Details": "Journalists and their dependants",
            "Visa Fee": "$15/Month"
          },
          {
            "Non-Tourist Visa Fee Details": "Foreigner married with Nepali Citizen",
            "Visa Fee": "$15/Month"
          }
        ]
      }
      }





      //multipletitle added features

      
    {
        "type": "multiple-title",
        "title": [
          "I'm still learning so keep your questions simple so i can understand 🙂 <span>https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15</span>",
          {
            "title": [
              "Please fill in the form below. <span>https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15</span>"
            ]
          },
          {
            "title": [
              "Please fill in the form below. test"
            ],
            "listItem":[
              {
                "title":"list with payload",
                "type":"payload",
                "payload":"list1"
              },
              {
                "title":"list 2 cata with link",
                "type":"link",
                "link":"https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15"
              },
              {
                "title":"list 2 cata with none"
              }
            ]
          }
        ],
      "formModule":{
            "type": "formLead",
            "subtitle":"Design a bot in minutes so it can start acquiring leads for you and automate next steps. Bots work for you all day delivering qualified leads and speeding up customer resolutions.",
            "headertitle":"For More Query",
            "data": [
              {
                "label": "your name",
                "placeholder": "Enter your name",
                "id": "firstName",
                "type": "text",
                "validation": {
                  "required": true
                }
              },
              {
                "label": "Email Address",
                "placeholder": "Enter email address",
                "id": "emailAddress",
                "type": "email",
                "validation": {
                  "required": true,
                  "email": true
                }
              },
              {
                "label": "Mobile Number",
                "placeholder": "Enter mobile number",
                "id": "mobileNumber",
                "type": "number",
                "validation": {
                  "required": true,
                  "mobile": true
                }
              }
            ],
            "buttons": {
              "data": [
                {
                  "text": "Submit",
                  "type": "submit"
                },
                {
                  "text": "Cancel",
                  "type": "cancel"
                }
              ]
            }
          }
      }




 */