let localrundata = {
  // Shine Resunga Development Bank Json
  formLead:{
    "type": "formleadbanner",
    "subtitleheader": "Your Information",
    "subtitle": "Greetings from Shine Resunga Development Bank, I am your Virtual Assistant. I am here to help you with all your queries related to Our product and services. Click on 'Get Started'",
    "headertitle": "Shine Resunga Development Bank",
    "headerimg": "images/img/shineResunga.png",
    "formcontainertext": "By providing your detail you will be helping us serve you better . You can skip and proceed by using SKIP button .",
    "data": [
      {
        "label": "Full Name",
        "placeholder": "Enter full name",
        "id": "fullName",
        "type": "text",
        "validation": {
          "required": true
        }
      },
      {
        "label": "Email address/mobile number",
        "placeholder": "Enter email address",
        "id": "emailAddress",
        "type": "email",
        "validation": {
          "required": true,
          "email": true
        }
      }
    ],
    "buttons": {
      "data": [
        {
          "text": "GET STARTED",
          "type": "submit",
          "payload": "menu"
        }
      ],
      "skip": {
        "text": "SKIP AND PROCEED",
        "type": "skip",
        "payload": "menu"
      }
    }
  },
   // Manin menu Json
   MainHome: {
    title: "Hello world",
    type: "home",
    languagetype: "eng",
    Header:"Namaste, I am Reliable ChatBot. How May I Help You?",
    subHeader:
      "Life is uncertain. People are not. Our Relaible life insurance will always be there for you.",
    data: [
      {
        title: "Products/Services",
        payload: "productServices",
        icon: "images/img/package.png",
      },
      {
        title: "Policy Services",
        payload: "shine services",
        icon: "images/img/compliant.png",
      },
      {
        title: "  Agency",
        payload: "shine Feedback and Complaiin",
        icon: "images/img/agent.png",
      },
      {
        title: "Claim/Loan",
        payload: "shine Feedback and Complaiin",
        icon: "images/img/claim.png",
      },
      {
        title: "Payment",
        payload: "Payment",
        icon: "images/img/wallet.png",
      },
      {
        title: "Branches",
        payload: "shine atm or branch locator",
        icon: "images/img/location-pin.png",
      },
      {
        title: "Contact Us",
        payload: "shine contact Us",
        icon: "images/img/customer-service.png",
      },
    ],
    },

    test:{
      "title": "Hello this is icon reply palmmind",
      "type": "icon_reply",
      "data": [
         {
            "title": "Endownment Life Plan",
            "icon": "<img src='images/icons/life.png' style='width: 30px; height: 30px;margin-top: -8px;margin-right: 3px;'>",
            "payload": "button 2"
         },
         {
            "title": "Health Plan",
            "icon": "<img src='images/icons/health.jpg' style='width: 30px; height: 30px;margin-top: -8px;margin-right: 3px;'>",
            "payload": "button 3"
         },
         {
          "title": "Child Plan",
          "icon": "<img src='images/icons/child.jpg' style='width: 30px; height: 30px;margin-top: -8px;margin-right: 3px;'>",
          "payload": "button 2"
       },
       {
        "title": "Money Back Plan",
        "icon": "<img src='images/icons/single.png' style='width: 30px; height: 30px;margin-top: -8px;margin-right: 3px;'>",
        "payload": "button 2"
     },
     {
      "title": "Single Premium Plan",
      "icon": "<img src='images/icons/moneyback.png' style='width: 30px; height: 30px;margin-top: -8px;margin-right: 3px;'>",
      "payload": "button 2"
   },
   {
    "title": "Foreign Employment Plan",
    "icon": "<img src='images/icons/foreign.png' style='width: 30px; height: 30px;margin-top: -8px;margin-right: 3px;'>",
    "payload": "button 2"
 }
      ]
   },

 //payment button
 paymentOpt:{
  title: "Payment Options",
  type: "payments",
  data:[
    {
      title:'Online',
      payload: 'online',
    },
    {
      title:'Bank Details',
      payload: 'bankdetails',

    },
    {
      title:'ConnectIPS',
      payload: 'cips',
    },
   
    {
      title:'IMEpay',
      payload: 'imepay',
    },
    {
      title:'Khalti',
      payload: 'khalti',
    },
    {
      title:'Esewa',
      payload: 'esewa',
    },
    
]
 },
 // bank details for payment
 bank_detail: {
  type: "detailpolicy",
  subtitle: "You can pay through online or your nearest branch or through bank. Below are the list of banks for payment.",
  for: "bank detil",
  data: [
          {
       "Sn": 1,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Bank Of Kathmandu Ltd.",
       "Branch": "Naxal",
       "AccountNumber": "015900000181524",
        
      },
      {
       "Sn": 2,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Central Finance Ltd.",
       "Branch": "Kupondole",
       "AccountNumber": "00100500016937000001",
        
      },
      {
       "Sn": 3,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Century Commercial Bank Ltd",
       "Branch": "Diktel",
       "AccountNumber": "0150001788CA",
        
      },
      {
       "Sn": 4,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Citizens Bank Ltd.",
       "Branch": "Kalanki ",
       "AccountNumber": "0110100000386201",
        
      },
      {
       "Sn": 5,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Civil Bank Ltd.",
       "Branch": "Kamaladi",
       "AccountNumber": "00210124192018",
        
      },
      {
       "Sn": 6,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Everest Bank Ltd.",
       "Branch": "Bagbazar ",
       "AccountNumber": "04400105200603",
        
      },
      {
       "Sn": 7,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Excel Development Bank Ltd.",
       "Branch": "Birtamod",
       "AccountNumber": "00110700075428000001",
        
      },
      {
       "Sn": 8,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Garima Bikas Bank Ltd.",
       "Branch": "Lazimpat",
       "AccountNumber": "04000100710690000001",
       
      },
      {
       "Sn": 9,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Global IME Bank Ltd.",
       "Branch": "Sundhara",
       "AccountNumber": "A401010000133",
        
      },
      {
       "Sn": 10,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Himalayan Bank Ltd",
       "Branch": "Dillibazar ",
       "AccountNumber": "03207167740019",
        
      },
      {
       "Sn": 11,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "ICFC Finance Limited",
       "Branch": "Corporate",
       "AccountNumber": "00100700047543000007",
        
      },
      {
       "Sn": 12,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Janata Bank Nepal Ltd.&nbsp; ",
       "Branch": "New Baneshwor",
       "AccountNumber": "001002045696101",
        
      },
      {
       "Sn": 13,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Jyoti Bikas Bank Ltd.",
       "Branch": "Kamaladi ",
       "AccountNumber": "00100100142936000001",
        
      },
      {
       "Sn": 14,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Kamana Sewa Bikash Bank Ltd.",
       "Branch": "Gyaneshwor",
       "AccountNumber": "04100300196989000001",
       
      },
      {
       "Sn": 15,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Kankai Bikas Bank Ltd.",
       "Branch": "Biratnagar",
       "AccountNumber": "01200100041730000001",
        
      },
      {
       "Sn": 16,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Kumari Bank Ltd.",
       "Branch": "Putalisadak",
       "AccountNumber": "0010017395900001",
        
      },
      {
       "Sn": 17,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Laxmi Bank Ltd.",
       "Branch": "Old Baneshwor",
       "AccountNumber": "06811000235",
        
      },
      {
       "Sn": 18,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Lumbini Bikash Bank Ltd.",
       "Branch": "Tokha",
       "AccountNumber": "03300120094362000001",
        
      },
      {
       "Sn": 19,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Machhapuchchhre Bank Ltd.",
       "Branch": "Lazimpat",
       "AccountNumber": "0101524539751018",
        
      },
      {
       "Sn": 20,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Mahalaxmi Bikas Bank Ltd.",
       "Branch": "Durbar Marga",
       "AccountNumber": "04200100362248000001",
        
      },
      {
       "Sn": 21,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Manjushree Finance Limited",
       "Branch": "New Road",
       "AccountNumber": "003000009128",
        
      },
      {
       "Sn": 22,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Mega Bank Nepal Ltd",
       "Branch": "Maitidevi",
       "AccountNumber": "0240010062941",
        
      },
      {
       "Sn": 23,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Miteri Develpoment Bank Ltd.",
       "Branch": "Surunga",
       "AccountNumber": "00800200031205000002",
        
      },
      {
       "Sn": 24,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Muktinath Bikash Bank Ltd.",
       "Branch": "Kamaladi ",
       "AccountNumber": "03510200234132000001",
        
      },
      {
       "Sn": 25,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Muktinath Bikash Bank Ltd.",
       "Branch": "Dhading",
       "AccountNumber": "02710200248442000001",
        
      },
      {
       "Sn": 26,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Nabil Bank Ltd.",
       "Branch": "Dillibazar ",
       "AccountNumber": "3601017500747",
        
      },
      {
       "Sn": 27,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "NCC Bank Ltd.",
       "Branch": "Ratopul",
       "AccountNumber": 970000002101,
        
      },
      {
       "Sn": 28,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Nepal Bangladesh Bank Ltd.",
       "Branch": "Kamaladi",
       "AccountNumber": "001247351C",
        
      },
      {
       "Sn": 29,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Nepal Investment Bank Ltd.",
       "Branch": "Kalimati",
       "AccountNumber": "01701030039154",
       
      },
      {
       "Sn": 30,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Nepal SBI Bank Ltd.",
       "Branch": "New Road",
       "AccountNumber": "17825240200704",
       
      },
      {
       "Sn": 31,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "NIC Asia Bank Ltd.",
       "Branch": "Kamaladi",
       "AccountNumber": "32410510922524001",
       
      },
      {
       "Sn": 32,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "NMB Bank Ltd. ",
       "Branch": "Thamel ",
       "AccountNumber": "01200600665962000001",
       
      },
      {
       "Sn": 33,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Prabhu Bank Ltd ",
       "Branch": "Hattigauda ",
       "AccountNumber": "1000097973700019",
       
      },
      {
       "Sn": 34,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Prime Commercial Bank Ltd. ",
       "Branch": "Kamalpokhari",
       "AccountNumber": "00105533CA",
       
      },
      {
       "Sn": 35,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Rastriya Banijya Bank",
       "Branch": "Ilam",
       "AccountNumber": "2460100000326001",
       
      },
      {
       "Sn": 36,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Reliance Finance Ltd.",
       "Branch": "New Road",
       "AccountNumber": "10212000000070",
       
      },
      {
       "Sn": 37,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Shangri-la Development Bank Ltd. ",
       "Branch": "Baluwatar ",
       "AccountNumber": "025008002016310000002",
       
      },
      {
       "Sn": 38,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Shine Resunga Development Bank Ltd.",
       "Branch": "Butwal ",
       "AccountNumber": "00100100149840000001",
       
      },
      {
       "Sn": 39,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Siddhartha Bank&nbsp;Ltd.",
       "Branch": "New Road",
       "AccountNumber": "00415188901",
       
      },
      {
       "Sn": 40,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Sindhu Bikash Bank Ltd.",
       "Branch": "Banepa",
       "AccountNumber": "00200200395SP",
       
      },
      {
       "Sn": 41,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Srijana Finance Ltd.",
       "Branch": "Biratnagar",
       "AccountNumber": "100100097775000000",
        
      },
      {
       "Sn": 42,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Sunrise Bank Ltd.",
       "Branch": "Kalikasthan",
       "AccountNumber": "0710419317701001",
        
      },
      {
       "Sn": 43,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Sanima Bank Ltd.,",
       "Branch": "Gongabu Branch",
       "AccountNumber": "13010010000750",
        
      },
      {
       "Sn": 44,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Pokhara Finance limited",
       "Branch": "butwal",
       "AccountNumber": "01800200030873000009",
        
      },
      {
       "Sn": 45,
       "Account_Name": "Reliable Nepal Life Insurance Ltd",
       "Bank_Name": "Janaki Finance Company Ltd., ",
       "Branch": "Janakpur ",
       "AccountNumber": "00100100005742000001",
        
      }
     ]
  
},
  // Shine Resunga List Reply module  For Services json
  ServiceListReply: {
    title: "Services",
    type: "quick_reply",
    icon: "images/img/digital.png",
    clickIcon: {
      name: "Go Back",
      payload: "Hello Shine",
    },
    data: [
      {
        title: "Request for Services",
        prev: ">",
        payload: "Mobile Banking services",
      },
      {
        title: "Dispute Handling",
        prev: ">",
        payload: "Dispute Handling",
      },
      {
        title: "Balance Inquery",
        prev: ">",
        payload: "Balance Inquery",
      },
      {
        title: "Block Card",
        prev: ">",
        payload: "Block Card services",
      },
      {
        title: "Repin Entry",
        prev: ">",
        payload: "Repin Entry",
      },
      {
        title: "Mobile banking",
        payload: "mobile",
      },
      {
        title: "Internet Banking",
        payload: "internet",
      },
    ],
  },

  // Shine Resunga List Reply module  For AtmBranch json
  AtmBranchListReply: {
    title:
      "Dear customer, Choose the option to get Atm and Branch near by you:",
    type: "quick_reply",
    data: [
      {
        title: "Branch",
        payload: "Branch Loacation",
      },
      {
        title: "Go back to home",
        payload: "menu",
      },
    ],
  },

  // Shine Resunga List Reply module  For Loan json
  LoanListReply: {
    title: "Loan",
    type: "quick_reply",
    icon: "images/img/loan.png",
    clickIcon: {
      name: "Go Back",
      payload: "shine loan queries",
    },
    data: [
      {
        title: "Loan Product",
        prev: ">",
        payload: "Loan Product",
      },
      {
        title: "Intrest Rate",
        prev: ">",
        payload: "Shine Intrest Rate",
      },
      {
        title: "Online Loan",
        prev: ">",
        payload: "Online loan",
      },
      {
        title: "Base Rate",
        prev: ">",
        payload: "Base Rate",
      },
      {
        title: "Document Required for Loan",
        prev: ">",
        payload: "Document for loan",
      },
    ],
  },

  ///shine reusunga forex jsnon
  shineForex: {
    type: "forex",
    title:
      "Dear Customer, You may select from the following to know the exchange rate!",
    date: true,
    header: "Forex",
    img: "images/img/change.png",
    subtitle:
      "Please select your appropriate currency below to get today’s exchange rate!",
    country: [
      {
        name: "India",
        currency: "INR",
      },
      {
        name: "United States",
        currency: "USD",
      },
      {
        name: "Europe",
        currency: "EUR",
      },
      {
        name: "Australia",
        currency: "ASD",
      },
    ],
    button: {
      contents: [
        {
          title: "Get exchange rate",
          type: "exchange_rate",
        },
      ],
    },
  },

  //   /// shine resunga contact us json
  shineContactUs: {
    type: "contact",
    title: "Dear customer, you can contact us at",
    data: {
      Name: "Head Office",
      subtitle: "Gyaneshwor, Kathmandu",
      button: {
        title: "Branch Detail",
        link: "https://reliablelife.com.np/network-branch-sub-branch-upcoming/",
      },
      info: [
        {
          key:"Email",
          value:"info@reliablelife.com.np",
        },
        {
          key: "Phone",
          value: "01-4523618/4523630",
        },
        {
          key: "Fax",
          value: "+977-01-4523630",
        },
      ],
      socialmedia: [
        {
          title: "Facebook",
          img: "../../images/img/facebook.png",
          link: "https://www.facebook.com/reliablelifeinsurancelimited/",
        },
        {
          title: "Linkin",
          img: "../../images/img/linkedin.png",
          link: "https://www.linkedin.com/company/reliable-nepal-life-insurance/",
        },
        {
          title: "youtube",
          img: "../../images/img/youtube.png",
          link: "https://www.youtube.com/channel/UCl-kxXfusbZNdyj4twcgOcg",
        },
        {
          title: "viber",
          img: "../../images/img/viber.png",
          link: "",
        },
      ],
    },
  },

  //   ///>>> shine Resunga feedback and Complain.
  shineFeedback: {
    title:
      "Dear customer, Your feedback and Complain will be highly appreciated by us:",
    type: "quick_reply",
    data: [
      {
        title: "Feedback",
        payload: "Shine Feedback",
      },
      {
        title: "Complain",
        payload: "Customer Complain",
      },
      {
        title: "Go back to home",
        payload: "menu",
      },
    ],
  },

  // shine resunga form support module
  complain: {
    type: "form",
    subtype: "report_issue",
    Name: "Complain",
    cancel_payload: {
      title: "Feedback and Complain",
      payload: "Complain ",
    },
    action: "http://localhost:5050/rest/v1/complaints",
    title: "Report Account Related Problem",
    lastContactText: "you can contact us through this email",
    html: `<a href="info@srdb.com.np" target="_blank"/>`,
    data: [
      {
        label: "Full name",
        placeholder: "Enter full name",
        id: "fullName",
        type: "text",
        validation: {
          required: true,
          fullname: true,
        },
      },
      {
        label: "Email Address",
        placeholder: "Enter email address",
        id: "emailAddress",
        type: "email",
        validation: {
          required: true,
          email: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Enter mobile number",
        id: "mobileNumber",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Enter your account number",
        id: "accountNumber",
        type: "number",
        validation: {
          required: false,
          account: true,
        },
      },
      {
        label: "ATM Number",
        placeholder: "Enter your atm number",
        id: "atmNumber",
        type: "number",
        validation: {
          required: false,
          atm: true,
        },
      },
      {
        label: "Complain Title",
        placeholder: "Enter complain title",
        id: "title",
        type: "text",
        validation: {
          required: true,
          complain: true,
        },
      },
    ],
    problem: [
      {
        label: "Problem",
        placeholder: "Please briefly explain your problem.",
        id: "problem",
        type: "textarea",
        validation: {
          required: true,
          problem: true,
        },
      },
    ],
    dropdown: {
      placeholder: "Select your category",
      data: [
        {
          for: "ATM Card/ Visa Card",
        },
        {
          for: "Mobile/Internet Banking",
        },
        {
          for: "Loan",
        },
        {
          for: "Others",
        },
      ],
    },
    buttons: {
      data: [
        {
          text: "Cancel",
          type: "cancel",
        },
        {
          text: "Submit",
          type: "submit",
        },
      ],
    },
  },

  // for feedback json of shine resunga bank
  feedback: {
    type: "form",
    subtype: "report_issue",
    Name: "Feedback",
    cancel_payload: {
      title: "Feedback and Complain",
      payload: "FeedBack ",
    },
    action: "http://localhost:5050/rest/v1/feedback",
    title: "Report Account Related Problem",
    lastContactText: "you can contact us through this email",
    email: "info@srdb.com.np",
    data: [
      {
        label: "Full name",
        placeholder: "Enter full name",
        id: "fullName",
        type: "text",
        validation: {
          required: true,
          fullname: true,
        },
      },
      {
        label: "Email Address",
        placeholder: "Enter email address",
        id: "emailAddress",
        type: "email",
        validation: {
          required: true,
          email: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Enter mobile number",
        id: "mobileNumber",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Enter your account number",
        id: "accountNumber",
        type: "number",
        validation: {
          required: false,
          account: true,
        },
      },
    ],
    problem: [
      {
        label: "Suggestion",
        placeholder: "Please briefly explain your problem.",
        id: "suggestion",
        type: "textarea",
        validation: {
          required: true,
          suggestion: true,
        },
      },
    ],
    buttons: {
      data: [
        {
          text: "Cancel",
          type: "cancel",
        },
        {
          text: "Submit",
          type: "submit",
        },
      ],
    },
  },
  submenu: {
    type: "multiple-title",
    title: [
      "Intimate IMELIFE regarding your claim settlement via the following ways.",
    ],
    submenu: {
      contents: [
        {
          title: "Email",
          payload: "Email for Claim",
          icon: "images/menu/email.png",
        },
        {
          title: "Visit Claims Dept/Branch Office",
          link: "tel:18003334444",
          icon: "images/menu/visit.png",
        },
        {
          title: "Call Toll free",
          payload: "Call Toll free",
          icon: "images/menu/phone.png",
        },
      ],
    },
  },

  // for service request form
  ServiceRequest: {
    title: "service request",
    type: "service-form",
    Name: "service request",
    verifyData: [
      {
        label: "Account Holder's Name",
        placeholder: "Account holder's name",
        id: "actName",
        type: "text",
        validation: {
          required: true,
          "account holder's name": true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "actNum",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobile",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
    ],
    data: [
      {
        label: "First Name",
        placeholder: "First Name",
        id: "fname",
        type: "text",
        validation: {
          required: true,
          fname: true,
        },
      },
      {
        label: "Middle Name",
        placeholder: "Middle Name",
        id: "mname",
        type: "text",
        validation: {
          required: false,
          mname: true,
        },
      },
      {
        label: "Last Name",
        placeholder: "Last Name",
        id: "lname",
        type: "text",
        validation: {
          required: true,
          lname: true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "accountNumber",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobilenumber",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
      {
        label: "Phone Number",
        placeholder: "phone number",
        id: "phone",
        type: "number",
        validation: {
          required: true,
          phone: true,
        },
      },
      {
        label: "email",
        placeholder: "email ",
        id: "email",
        type: "email",
        validation: {
          required: false,
          email: true,
        },
      },
    ],
    OtpVerify: {
      id: "verify",
      name: "Verify",
      type: "submit",
    },
    button: [
      {
        id: "Re_send",
        name: "Resend",
        type: "submit",
      },
      {
        id: "Bal_send",
        name: "Check",
        type: "submit",
      },
    ],
  },

  // for service request form
  BalanceInquiry: {
    title: "Balance Inquiry Form",
    type: "balance-form",
    Name: "Balance Inquiry",
    data: [
      {
        label: "Account Holder's Name",
        placeholder: "Account holder's name",
        id: "actName",
        type: "text",
        validation: {
          required: true,
          "account holder's name": true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "actNum",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobile",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
    ],
    OtpVerify: {
      id: "verify",
      name: "Verify",
      type: "submit",
    },
    button: [
      {
        id: "Re_send",
        name: "Resend",
        type: "submit",
      },
      {
        id: "Bal_send",
        name: "Check",
        type: "submit",
      },
    ],
    Databtn: {
      id: "getData",
      name: "Submit",
      type: "submit",
    },
  },

  // for Block Card Json

  BlockCard: {
    title: "Block Card",
    type: "block-form",
    Name: "Block Card Form",
    data: [
      {
        label: "Account Holder's Name",
        placeholder: "Account holder's name",
        id: "actName",
        type: "text",
        validation: {
          required: true,
          "account holder's name": true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "actNum",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobile",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
    ],
    card: [
      {
        label: "Block Reason",
        placeholder: "Block Reason",
        id: "b_reason",
        type: "text",
        validation: {
          required: true,
          block_reason: true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "account_number",
        type: "text",
        validation: {
          required: true,
          account: true,
        },
      },
    ],
    OtpVerify: {
      id: "verify",
      name: "Verify",
      type: "submit",
    },
    button: [
      {
        id: "Re_send",
        name: "Resend",
        type: "submit",
      },
      {
        id: "Bal_send",
        name: "Check",
        type: "submit",
      },
    ],
    dropdown: {
      title: "Block Card Type",
      data: [
        {
          for: "LOST",
        },
        {
          for: "DAMAGED",
        },
        {
          for: "REJECT",
        },
        {
          for: "BLOCK",
        },
      ],
    },
    formbutton: [
      {
        name: "Cancel",
        id: "cancel",
        type: "cancel",
      },
      {
        name: "Submit",
        id: "submit",
        type: "submit",
      },
    ],
    action1: "rest/v1/serviceRequest/card/block", // for fetch respponse data
    action2: "rest/v1/serviceRequest/verifyOtp", // for check otp number
    action3: "rest/v1/serviceRequest/submitData", //for fetch verify data
  },

  // here starting of repin json
  RepinEntry: {
    title: "Repin Entry",
    type: "block-form",
    Name: "Repin Entry",
    data: [
      {
        label: "Account Holder's Name",
        placeholder: "Account holder's name",
        id: "actName",
        type: "text",
        validation: {
          required: true,
          "account holder's name": true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "actNum",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobile",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
    ],
    dropdown: {
      title: "Collect From Branch",
    },
    card: [
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "account_number",
        type: "text",
        validation: {
          required: true,
          account: true,
        },
      },
    ],
    OtpVerify: {
      id: "verify",
      name: "Verify",
      type: "submit",
    },
    button: [
      {
        id: "Re_send",
        name: "Resend",
        type: "submit",
      },
      {
        id: "Bal_send",
        name: "Check",
        type: "submit",
      },
    ],
    formbutton: [
      {
        name: "Cancel",
        id: "cancel",
        type: "cancel",
      },
      {
        name: "Submit",
        id: "submit",
        type: "submit",
      },
    ],
    action1: "rest/v1/serviceRequest/card/repin", // for fetch respponse data
    action2: "rest/v1/serviceRequest/verifyOtp", // for check otp number
    action3: "rest/v1/serviceRequest/submitData",
  },

  // Here is the staring of the json for dispute handling
  DisputeHandling: {
    title: "Dispute Handling",
    type: "dispute-form",
    Name: "Dispute Handling",
    verifyData: [
      {
        label: "Account Holder's Name",
        placeholder: "Account holder's name",
        id: "actName",
        type: "text",
        validation: {
          required: true,
          "account holder's name": true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "actNum",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobile",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
    ],
    disputeCard: [
      {
        label: "Mobile Number",
        placeholder: "9800000000",
        id: "mobile",
        type: "text",
        validation: {
          required: false,
          mobile: true,
        },
      },
      {
        label: "Email",
        placeholder: "test@gmail.com",
        id: "email",
        type: "email",
        validation: {
          required: true,
          email: true,
        },
      },
      {
        label: "Transaction Date",
        placeholder: "YYYY-MM-DD",
        id: "txnDate",
        type: "Date",
        validation: {
          required: true,
          txnDate: true,
        },
      },
      {
        label: "Transaction Amount",
        placeholder: "5000.00",
        id: "txnAmount",
        type: "number",
        validation: {
          required: true,
          txnAmount: true,
        },
      },
      {
        label: "Claim Amount",
        placeholder: "5000.00",
        id: "claimAmount",
        type: "number",
        validation: {
          required: true,
          claimAmount: true,
        },
      },
      {
        label: "Requested Date",
        placeholder: "YYYY-MM-DD",
        id: "reqDate",
        type: "Date",
        validation: {
          required: true,
          reqDate: true,
        },
      },
    ],
    detail: {
      label: "Details",
      placeholder: "Details",
      id: "details",
      type: "text",
      validation: {
        required: false,
        details: true,
      },
    },
    dropdown: {
      deviceType: [
        {
          for: "ATM",
        },
        {
          for: "POS",
        },
      ],
      TerminalTypeATM: [
        {
          for: "Select ATM Terminal Type",
        },
        {
          for: "Our ATM",
        },
        {
          for: "Other ATM",
        },
      ],
      TerminalTypePOS: [
        {
          for: "Select POS Terminal Type",
        },
        {
          for: "Our POS",
        },
        {
          for: "Other POS",
        },
      ],
      TerminalATM: {
        OURATM: [
          { for: "Select OUR ATM terminal" },
          { for: "config terminal" },
        ],
        OtherATM: [
          { for: "Select Other ATM terminal" },
          {
            for: "Nepal",
          },
          {
            for: "India",
          },
          {
            for: "Other",
          },
        ],
      },
      TerminalPOS: {
        OURPOS: [
          {
            for: "Select POS terminal",
          },
          {
            for: null,
          },
        ],
        OtherPOS: [
          {
            for: "Select Other POS terminal",
          },
          {
            for: "Nepal",
          },
          {
            for: "India",
          },
          {
            for: "Other",
          },
        ],
      },
        TerminalATM: {
          OURATM: [{ for: "Select OUR ATM terminal" }],
          OtherATM: [
            { for: "Select Other ATM terminal" },
            {
              for: "Nepal",
            },
            {
              for: "India",
            },
            {
              for: "Other",
            },
          ],
        },
        disputeType: [
          {
            for: "full",
          },
          {
            for: "partial",
          },
        ],
      },
         OtpVerify: {
      id: "verify",
      name: "Verify",
      type: "submit",
    },
    button: [
      {
        id: "Re_send",
        name: "Resend",
        type: "submit",
      },
      {
        id: "Bal_send",
        name: "Check",
        type: "submit",
      },
    ],
    FormButton: [
      {
        name: "Cancel",
        id: "cancel",
        type: "cancel",
      },
      {
        name: "Submit",
        id: "submit",
        type: "submit",
      },
    ],
  },

  // here this json is use for related  queries
  relatedQueries: {
    title:
      "You need to fill an application form including your account signature & mail at online.registration@srdb.com.np.<br><br>(Click below to download the Mobile Banking Application Form)",
    type: "quick_reply",
    data: [
      {
        title: "Download",
        link: "https://shine-bucket.oss-ap-south-1.aliyuncs.com/article/Mobile_Banking_Form1.pdf",
      },
      {
        title: "Main Menu",
        payload: "menu",
      },
    ],
    catagoriesContext: {
      subtitle: "Releted Questions...",
      type: "catagoriesContext",
      data: [
        {
          title: "What is the charge for fund transfer using ebanking ?",
          payload: "s2",
        },
        {
          title: "What I need to use the ebanking services?",
          payload: "s1",
        },
      ],
    },
  },

  // for mobile banking services
  mobileBanking: {
    title: "Mobile Banking",
    type: "mobile-form",
    Name: "Mobile Service Request",
    verifyData: [
      {
        label: "Account Holder's Name",
        placeholder: "Account holder's name",
        id: "actName",
        type: "text",
        validation: {
          required: true,
          "account holder's name": true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "actNum",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobile",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
    ],
    OtpVerify: {
      id: "verify",
      name: "Verify",
      type: "submit",
    },
    button: [
      {
        id: "Re_send",
        name: "Resend",
        type: "submit",
      },
      {
        id: "Mobile_send",
        name: "Check",
        type: "submit",
      },
    ],
    data: {
      title: "CRN-Request",
      CRN: [
        {
          label: "Account Holder's Name",
          placeholder: "Account Holder's Name",
          id: "account_name",
          type: "text",
          validation: {
            required: true,
            account_name: true,
          },
        },
        {
          label: "Account Email",
          placeholder: "Account Email",
          id: "mob_email",
          type: "email",
          validation: {
            required: true,
            mob_email: true,
          },
        },
        {
          label: "Address",
          placeholder: "Address",
          id: "address",
          type: "text",
          validation: {
            required: false,
            address: true,
          },
        },
      ],
      e_type: {
        label: "Profile Type",
        id: "e_type",
        validation: {
          required: true,
          e_type: true,
        },
      },
      CRN_type: {
        label: "Type",
        id: "CRN_type",
        validation: {
          required: true,
          CRN_type: true,
        },
      },
      Branch: {
        label: "Branch",
        id: "branch",
        validation: {
          required: true,
          branch: true,
        },
      },
      subData: [
        {
          label: "DPID",
          placeholder: "",
          id: "dpid",
          type: "text",
          validation: {
            required: true,
            dpid: true,
          },
        },
        {
          label: "Description",
          placeholder: "Description",
          id: "description",
          type: "textarea",
          validation: {
            required: false,
            description: true,
          },
        },
        {
          label: "Charge/Fee:",
          id: "charge_fee",
          type: "text",
          validation: {
            required: true,
            charge_fee: true,
          },
        },
        {
          label: "Attachment",
          id: "attachment",
          type: "file",
          validation: {
            required: true,
            attachment: true,
          },
        },
      ],
      button: [
        {
          name: "Cancel",
          id: "cancel",
          type: "cancel",
          payload: "cancel",
        },
        {
          name: "Submit",
          id: "submit",
          type: "submit",
        },
      ],
    },
  },
  // for feedback json of shine resunga bank
  feedbacknepali: {
    type: "form",
    f_id: "nepali",
    nepali_payload: {
      title: "प्रतिकृया ",
      payload: "FeedBack ",
    },
    subtype: "प्रतिकृया ",
    Name: "प्रतिकृया ",
    action: "http://localhost:5050/rest/v1/feedback",
    title: "Report Account Related Problem",
    lastContactText: "you can contact us through this email",
    email: "info@srdb.com.np",
    data: [
      {
        label: "प्रतिकृया ",
        placeholder: "प्रतिकृया ",
        id: "fullName",
        type: "text",
        validation: {
          required: true,
          fullname: true,
        },
      },
      {
        label: "Email Address",
        placeholder: "Enter email address",
        id: "emailAddress",
        type: "email",
        validation: {
          required: true,
          email: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Enter mobile number",
        id: "mobileNumber",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Enter your account number",
        id: "accountNumber",
        type: "number",
        validation: {
          required: false,
          account: true,
        },
      },
    ],
    problem: [
      {
        label: "प्रतिकृया ",
        placeholder: "Please briefly explain your problem.",
        id: "suggestion",
        type: "textarea",
        validation: {
          required: true,
          suggestion: true,
        },
      },
    ],
    buttons: {
      data: [
        {
          text: "प्रतिकृया ",
          type: "cancel",
        },
        {
          text: "प्रतिकृया ",
          type: "submit",
        },
      ],
    },
  },

  //   ///shineResunga ATM/Branch locator
  //   shineAtmOrBranch:{
  //   "title": "For ATM location please click the ATM location button and for Branch loaction click Branch location button below.",
  //   "type": "quick_reply",
  //   "data": [
  //     {
  //       "title": "ATM Location",
  //       "payload": " "
  //     },
  //     {
  //       "title": "Branch Location",
  //       "payload": " ATM Location"
  //     },
  //     {
  //       "title": "Go back to home",
  //       "payload": "Hello Shine"
  //     }
  //   ]
  // },

  //   /// shine complain json
  //   shineComplain:{
  //   "type": "quick_reply",
  //   "title": "Complain",
  //   "clickIconPrev": {
  //     "payload": "home"
  //   },
  //   "subtitle": "What do you have to complain about? Choose one.",
  //   "data": [
  //     {
  //       "title": "Internet Banking",
  //       "payload": "ib complain"
  //     },
  //     {
  //       "title": "Mobile Banking",
  //       "payload": " I have a complain about mobile banking."
  //     },
  //     {
  //       "title": "Card Service",
  //       "payload": "complain card services"
  //     },
  //     {
  //       "title": "Account",
  //       "payload": "I have a complain about account."
  //     },
  //     {
  //       "title": "Staff",
  //       "payload": "I have a complain about staff."
  //     },
  //     {
  //       "title": "Others",
  //       "payload": "I have another complain "
  //     },
  //     {
  //       "title": "Go back to home",
  //       "payload": "Hello Shine"
  //     }
  //   ]
  // },

  //   /// shine resunga digital services
  //   shineDigitalServices:{
  //   "type": "quick_reply",
  //   "title": "Digital Service",
  //   "clickIconPrev": {
  //     "payload": "home"
  //   },
  //   "subtitle": "Which type of digital service do you want? choose one!",
  //   "data": [
  //     {
  //       "title": "Mobile Banking Service",
  //       "payload": "Mobile Banking Service"
  //     },
  //     {
  //       "title": "Internet Banking Service",
  //       "payload": "Internet Banking Service"
  //     },
  //     {
  //       "title": "ATM card",
  //       "payload": "ATM Card"
  //     },
  //     {
  //       "title": "Go back to home",
  //       "payload": "Hello Shine"
  //     }
  //   ]
  // },

  // Saving_Deposit:{
  //   "type": "quick_reply",
  //   "title": "Digital Service",
  //   "clickIconPrev": {
  //     "payload": "home"
  //   },
  //   "subtitle": "Which type of digital service do you want? choose one!",
  //   "data": [
  //     {
  //       "title": "Mobile Banking Service",
  //       "payload": "Mobile Banking Service"
  //     },
  //     {
  //       "title": "Internet Banking Service",
  //       "payload": "Internet Banking Service"
  //     },
  //     {
  //       "title": "ATM card",
  //       "payload": "ATM Card"
  //     },
  //     {
  //       "title": "Go back to home",
  //       "payload": "Hello Shine"
  //     }
  //   ]
  // },

  //   ///shineResunga working hours
  //   shineWorkingHours:{
  //   "type": "quick_reply",
  //   "title": "Working Hours",
  //   "clickIconPrev": {
  //     "payload": "home"
  //   },
  //   "subtitle": "Which type of working hour you want to know? Please choose!",
  //   "data": [
  //     {
  //       "title": "Banking Hours",
  //       "payload": "banking hours"
  //     },
  //     {
  //       "title": "Normal Transaction Hours",
  //       "payload": "normal transaction hours"
  //     },
  //     {
  //       "title": "Go back to home",
  //       "payload": "Hello Shine"
  //     }
  //   ]
  // },

  //   ///>>> loan queries json for shine resunga
  //   shineLoanQueries:{
  //   "type": "quick_reply",
  //   "title": "Loan",
  //   "clickIconPrev": {
  //     "payload": "home"
  //   },
  //   "subtitle": "What do you want to know about loan?",
  //   "data": [
  //     {
  //       "title": "Interest Rate",
  //       "payload": "Base Rate"
  //     },
  //     {
  //       "title": "Loan Products",
  //       "payload": "Loan Products"
  //     },
  //     {
  //       "title": "Document Required for Loan",
  //       "payload": "Documents Required for Loan"
  //     },
  //     {
  //       "title": "Loan Online",
  //       "payload": "Loan Online"
  //     },
  //     {
  //       "title": "Base Rate",
  //       "payload": "Base Rate"
  //     },
  //     {
  //       "title": "Go back to home",
  //       "payload": "Hello Shine"
  //     }
  //   ]
  // },

  // // my demo personal info inside the sine resunga
  // ShinePersonalInfo:{
  //   "type": "quick_reply",
  //   "title": "Please,click button bellow for more Details.",
  //   // "clickIconPrev": {
  //   //   "payload": "home"
  //    //},
  //   "subtitle": "what do you want to know about me.",
  //   "data": [
  //     {
  //       "title": "Personal Info",
  //       "payload": "Personal Details"
  //     },
  //     {
  //       "title": "button",
  //       "payload": "button"
  //     },
  //     {
  //       "title": "Form Details",
  //       "payload": "forms"
  //     }
  //   ]
  // },

  // // my demo personal info inside the sine resunga
  // HomePageDetil:{
  //   "type": "quick_reply",
  //   "title": "Click me",
  //   // "clickIconPrev": {
  //   //   "payload": "home"
  //    //},
  //   "subtitle": "what do you want to know about me.",
  //   "data": [
  //     {
  //       "title": "Personal Info",
  //       "payload": "Personal Details"
  //     },
  //     {
  //       "title": "button",
  //       "payload": "button"
  //     },
  //     {
  //       "title": "Form Details",
  //       "payload": "forms"
  //     }
  //   ]
  // },

  //   ///>>> Hamburger Design Front Page JSON
  //       burGER:{
  //         "title": "Hello world",
  //         "type": "hamburger",
  //         "Header":"Welcome to SR Bot ! Your Virtual Assistant. Please select the options below or ask SR Bot a question.",
  //         "data": [
  //           {
  //             "title": "Queries",
  //             "payload": "shine banking queries",
  //             "icon": "images/icons/problem.png"
  //           },
  //           {
  //             "title": "Loan",
  //             "payload": "shine loan queries",
  //             "icon": "images/icons/loan.png"
  //           },
  //           {
  //             "title": "Digital Services",
  //             "payload": "shine digital services",
  //             "icon": "images/icons/digital-services.png"
  //           },
  //           {
  //             "title": "Working Hours",
  //             "payload": "shine working hours",
  //             "icon": "images/icons/workinghrs.png"
  //           },
  //           {
  //             "title": "ATM/Branch Locator",
  //             "payload": "shine atm or branch locator",
  //             "icon": "images/icons/atmlocation.png"
  //           },
  //           {
  //             "title": "Forex",
  //             "payload": "shine forex",
  //             "icon": "images/icons/forex.png"
  //           },
  //           {
  //             "title": "Contact Us",
  //             "payload": "shine contact us",
  //             "icon": "images/icons/support.png"
  //           }
  //           ,
  //           {
  //             "title": "Feedback",
  //             "payload": "shine feedback",
  //             "icon": "images/icons/feedback.png"
  //           }
  //            ,
  //           {
  //             "title": "Complain",
  //             "payload": "shine complain",
  //             "icon": "images/icons/complaint.png"
  //           }
  //         ]
  //   },

  //     ///>>> Home Page JSON for shine resunga dev bank
  //     Home:{
  //       "title": "Home Module",
  //       "type": "homepage",
  //       "Header":"Welcome to SR Bot ! Your Virtual Assistant. Please select the options below or ask SR Bot a question.",
  //       "data": [
  //         {
  //           "title": "Queries",
  //           "payload": "shine banking queries",
  //           "icon": "images/img/problem.png"
  //         },
  //         {
  //           "title": "Loan",
  //           "payload": "shine loan queries",
  //           "icon": "images/img/loan.png"
  //         },
  //         {
  //           "title": "Digital Services",
  //           "payload": "shine digital services",
  //           "icon": "images/img/digital.png"
  //         },
  //         {
  //           "title": "Working Hours",
  //           "payload": "shine working hours",
  //           "icon": "images/img/working.png"
  //         },
  //         {
  //           "title": "ATM/Branch Locator",
  //           "payload": "shine atm or branch locator",
  //           "icon": "images/img/placeholder.png"
  //         },
  //         {
  //           "title": "Forex",
  //           "payload": "shine forex",
  //           "icon": "images/img/forex.png"
  //         },
  //         {
  //           "title": "Contact Us",
  //           "payload": "shine contact us",
  //           "icon": "images/img/support.png"
  //         }
  //         ,
  //         {
  //           "title": "Feedback",
  //           "payload": "shine feedback",
  //           "icon": "images/img/feedback.png"
  //         }
  //          ,
  //         {
  //           "title": "Complain",
  //           "payload": "shine complain",
  //           "icon": "images/img/complaint.png"
  //         }

  //       ]
  //       },

  // for Internet banking form jsons
  InternetBanking: {
    title: "Internet Banking",
    type: "mobile-form",
    Name: "Internet Bankings Service Request",
    verifyData: [
      {
        label: "Account Holder's Name",
        placeholder: "Account holder's name",
        id: "actName",
        type: "text",
        validation: {
          required: true,
          "account holder's name": true,
        },
      },
      {
        label: "Account Number",
        placeholder: "Account Number",
        id: "actNum",
        type: "number",
        validation: {
          required: true,
          accountnumber: true,
        },
      },
      {
        label: "Mobile Number",
        placeholder: "Mobile number",
        id: "mobile",
        type: "number",
        validation: {
          required: true,
          mobile: true,
        },
      },
    ],
    OtpVerify: {
      id: "verify",
      name: "Verify",
      type: "submit",
    },
    button: [
      {
        id: "Re_send",
        name: "Resend",
        type: "submit",
      },
      {
        id: "Mobile_send",
        name: "Check",
        type: "submit",
      },
    ],
    data: {
      title: "Internet Banking",
      CRN: [
        {
          label: "Account Holder's Name",
          placeholder: "Account Holder's Name",
          id: "account_name",
          type: "text",
          validation: {
            required: true,
            account_name: true,
          },
        },
        {
          label: "Account Email",
          placeholder: "Account Email",
          id: "mob_email",
          type: "email",
          validation: {
            required: true,
            mob_email: true,
          },
        },
        {
          label: "Address",
          placeholder: "Address",
          id: "address",
          type: "text",
          validation: {
            required: false,
            address: true,
          },
        },
      ],
      e_type: {
        label: "Profile Type",
        id: "e_type",
        validation: {
          required: true,
          e_type: true,
        },
      },
      SET: {
        label: "Set",
        id: "set",
        validation: {
          required: true,
          set: true,
        },
      },
      CRN_type: {
        label: "Type",
        id: "CRN_type",
        validation: {
          required: true,
          CRN_type: true,
        },
      },
      Branch: {
        label: "Branch",
        id: "branch",
        validation: {
          required: true,
          branch: true,
        },
      },
      subData: [
        {
          label: "Description",
          placeholder: "Description",
          id: "description",
          type: "textarea",
          validation: {
            required: false,
            description: true,
          },
        },
        {
          label: "Charge/Fee:",
          id: "charge_fee",
          type: "text",
          validation: {
            required: true,
            charge_fee: true,
          },
        },
        {
          label: "Attachment",
          id: "attachment",
          type: "file",
          validation: {
            required: true,
            attachment: true,
          },
        },
      ],
      button: [
        {
          name: "Cancel",
          id: "cancel",
          type: "cancel",
          payload: "cancel",
        },
        {
          name: "Submit",
          id: "submit",
          type: "submit",
        },
      ],
    },
  },

  // <-------------- for nepali module---------->

  // Home module for nepali language
  ShineHomeNepali: {
    title: "Hello world",
    type: "home",
    languagetype: "nep",
    Header:
      "नमस्ते, यहाँहरुलाई साइन बैंकमा हार्दिक स्वागत छ । म तपाईहरुको स्वचालित सहायक (....) हु ।",
    subHeader:
      "कृपया आफ्नो संवेदनशील सुचना जस्तै: खाताको जानकारी, पासवर्ड, पिन नम्बर आदी अरुलाई शेयर नगर्नु होला..... ",
    data: [
      {
        title: "बैंकिङ सेवा",
        payload: "Banking Services",
        icon: "images/img/problem.png",
      },
      {
        title: "डिजिटल सेवा",
        payload: "Digital Services",
        icon: "images/img/digital.png",
      },
      {
        title: "एटिएम/शाखा",
        payload: "shine Atm/Branch",
        icon: "images/img/placeholder.png",
      },
      {
        title: "प्रतिक्रिया/गुनासो",
        payload: "FeedBack and Controller",
        icon: "images/img/feedback.png",
      },
      {
        title: "बिदेशी बिनिमय",
        payload: "Shine forex",
        icon: "images/img/forex.png",
      },
      {
        title: "सम्पर्क",
        payload: "Shine Contact us",
        icon: "images/img/complain.png",
      },
    ],
  },

  // Shine Resunga List Reply module  For Queries json
  QueriesListReplyNepali: {
    title: "बैन्किङ्ग सेवा",
    type: "quick_reply",
    icon: "images/img/problem.png",
    clickIcon: {
      name: "पछाडी जानुहोस ",
      payload: "Banking Services",
    },
    data: [
      {
        title: "खाता",
        prev: ">",
        payload: "Shine Account",
      },
      {
        title: "स्थिर जम्मा",
        prev: ">",
        payload: "Shine Fixed Account",
      },
      {
        title: "ऋण",
        prev: ">",
        payload: "Shine Loan",
      },
      {
        title: "डिम्याट खाता",
        prev: ">",
        payload: "Shine Demat Account",
      },
      {
        title: "अन्य जिज्ञासा",
        prev: ">",
        payload: "Shine Others",
      },
    ],
  },

  ///shine reusunga forex jsnon foe nepali module
  shineForexNeplai: {
    type: "forex",
    title: "कृपया, विनिमय दर जान्नको लागि तल दिइएको देश चयन गर्नुहोस्।",
    date: true,
    header: "बिदेशी बिनिमय",
    img: "images/img/forex.png",
    subtitle:
      "कृपया आजको विनिमय दर प्राप्त गर्न तलको उपयुक्त मुद्रा (देश) चयन गर्नुहोस्!",
    country: [
      {
        name: "India",
        currency: "INR",
      },
      {
        name: "United States",
        currency: "USD",
      },
      {
        name: "Europe",
        currency: "EUR",
      },
      {
        name: "Australia",
        currency: "ASD",
      },
    ],
    button: {
      contents: [
        {
          title: "विनिमय दर प्राप्त गर्नुहोस्",
          type: "exchange_rate",
        },
      ],
    },
  },
  catagoriesContext: {
    type: "multiple-title",
    title: [
      " We Have Multiple Catagories of catagoriesContext",
      {
        title: ["Which catagories, you want to choose ?"],
      },
    ],
    catagoriesContext: {
      type: "catagoriesContext",
      subtitle: "Releted Questions...",
      data: [
        {
          title: "What is the charge for fund transfer using ebanking ?",
          payload: "hjadgahs sadhggas sadhfsad ?",
        },
        {
          title: "What I need to use the ebanking services?",
          payload: "hjadgahs sadhggas sadhfsad ?",
        },
      ],
    },
  },
  Atmlocation: {
    type: "location",
    for: "atm",
    title: "",
    header: "ATM Location",
    img: "images/address.png",
    subtitle:
      "Dear customer, Please send your current location to find ATM nearby",
    button: {
      contents: [
        {
          title: "Get ATM near me",
          type: "send_location",
        },
        // {
        //   title: "search here",
        //   type: "type_location"
        // }
      ],
    },
  },
  branchlocation: {
    type: "location",
    for: "branch",
    title: "",
    header: "Branch Location",
    img: "images/address.png",
    subtitle:
      "Dear customer, Please send your current location to find ATM nearby",
    button: {
      contents: [
        {
          title: "Get Branches near me",
          type: "send_location",
        },
        // {
        //   title: "search here",
        //   type: "type_location"
        // }
      ],
    },
  },
  css: {
    type: "detailDrawer",
    title: "We have the following Saving Accounts:",
    data: [
      {
        title: "SURAKSHA BACHAT KHATA",
        subtitle:
          "Let's make a secure future with us. SURAKSHA BACHAT KHATA offers ample banking solutions for saving. Saving must become a priority, Not just a thought…Pay yourself first.",
        img: "images/img/surakshabachatkhata.png",
        button: {
          contents: [
            {
              title: "View Details",
              id: "btn1",
              Back_icon: {
                title: "Main Menu",
                payload: "menu",
              },
              Details: {
                title: "Details of Suraksha Bachat Khata",
                subtitle: "Target Segment: General Public",
                paragraph: "Eligibility: As prescribed by Nepal Rastra Bank",
                subtitle1: [
                  {
                    title:
                      "Features and Benefits of Shine Suraksha Bachat Khata",
                    listitem: [
                      {
                        text: "Minimum balance: Zero (0)",
                      },
                      {
                        text: "Interest Rate: 5.35  % p.a.(subject to change)",
                      },
                      {
                        text: "Interest Calculation on: Daily Balance",
                      },
                      {
                        text: "Interest Payment Frequency: Quarterly",
                      },
                      {
                        text: "ABBS Charge: Free",
                      },
                      {
                        text: "Issuance of Cheque Book: Free",
                      },
                      {
                        text: "Issuance of Bank Statement: NPR 150 (1 time free for one period)",
                      },
                      {
                        text: "Issuance of Balance Certificate: NPR 250 (1 time free on annual basis)",
                      },
                      {
                        text: "Issuance of Good For Payment Cheque: NPR 500 for each time",
                      },
                      {
                        text: "Mobile Banking: NPR 150 (yearly basis)",
                      },
                      {
                        text: "Locker Facility: NPR 2,500 (yearly basis)",
                      },
                      {
                        text: "Debit Card (ATM): NPR 250 (yearly basis)",
                      },
                    ],
                  },
                  {
                    title: "Required Documents",
                    listitem: [
                      {
                        text: "Citizenship Front",
                      },
                      {
                        text: "Citizenship Back",
                      },
                      {
                        text: "Signature",
                      },
                    ],
                  },
                  {
                    title: "Additional features:",
                    listitem: [
                      {
                        text: "25% waiver on Good For Payment Cheque",
                      },
                      {
                        text: "50% waiver on Issuance of Balance Certificate",
                      },
                      {
                        text: "50% waiver on annual charge (1st year) of Safe Deposit Locker (Subject to availability)",
                      },
                      {
                        text: "Accidental death insurance coverage up to Rs. 5,00,000/00*",
                      },
                      {
                        text: "Risk covered due to accidental death and Permanent Total Disability due to an accident.",
                      },
                    ],
                  },
                  {
                    title: "How to apply for Shine Suraksha Bachat Khata?",
                    subtitle:
                      "To apply online please click the button below or You can collect the application form from the nearest branch and hand it out personally. Visit the nearest branch for assistance and clarity.",
                  },
                ],
                button: {
                  contents: [
                    {
                      title: "Application Form",
                      link: "https://onlineaccount.srdb.com.np/#/customer/opening/accountVerification",
                    },
                    {
                      title: "Main Menu",
                      payload: "menu",
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    ],
  },
  //   forex: {
  //     type: "forex",
  //     title: "Dear Customer, You may select from the following to know the exchange rate!",
  //     header: "Forex",
  //     img: "images/reimbursement.png",
  //     subtitle: "Please select available options to get today’s exchange rate!",
  //     country: [
  //       {
  //         name: "India",
  //         currency: "INR"
  //       },
  //       {
  //         name: "United States",
  //         currency: "USD"
  //       },
  //       {
  //         name: "Europe",
  //         currency: "EUR"
  //       },
  //       {
  //         name: "Australia",
  //         currency: "ASD"
  //       }
  //     ],
  //     button: {
  //       contents: [
  //         {
  //           title: "Get exchange rate",
  //           type: "exchange_rate"
  //         }
  //       ]
  //     }
  //   },
  //   room: {
  //     type: 'contextinner',
  //     title: 'Room',
  //     clickIconPrev: {
  //       payload: "home",//contextouter
  //     },
  //     maintitle: 'ajshd sajhas sadhsadsdhsad sdshjsd dhsd  sdshd sdh',
  //     subtitle: 'What would you like to complain about ? Choose one.',
  //     data: [{
  //       title: 'I have complain about internet banking',
  //       payload: 'types of room'
  //     },
  //     {
  //       title: 'catagoriesContext',
  //       payload: 'catagoriesContext'
  //     },
  //     {
  //       title: 'Book Room',
  //       payload: 'Book Room'
  //     }]
  //   },
  //   roomtype: {
  //     type: 'contextinner',
  //     title: 'roomtype',
  //     clickIconPrev: {
  //       payload: "room",//contextouter
  //     },
  //     subtitle: 'These are the queries you can inquiry about our rooms.',
  //     data: [{
  //       title: 'What are the types of rooms?',
  //       payload: '1sadk'
  //     },
  //     {
  //       title: 'Check Availability',
  //       payload: 'Check Availability'
  //     },
  //     {
  //       title: 'Book Room',
  //       payload: 'Book Room'
  //     }]
  //   },
  //   msg2: {
  //     title: "Hello world",
  //     type: "buttonSlider",
  //     data: [
  //       {
  //         title: 'button 1',
  //         payload: 'button 1',
  //         icon: '<i class="fas fa-envelope"></i>'
  //       },
  //       {
  //         title: 'button 2',
  //         payload: 'button 2',
  //         icon: '<i class="fas fa-key"></i>'
  //       },
  //       {
  //         title: 'button 3',
  //         payload: 'button 3',
  //         icon: '<i class="fas fa-user"></i>'
  //       },
  //       {
  //         title: 'button 4',
  //         payload: 'button 4'
  //       },
  //       {
  //         title: 'button 5',
  //         payload: 'button 5',
  //         icon: '<i class="fas fa-envelope"></i>'
  //       },
  //       {
  //         title: 'button 6',
  //         payload: 'button 6',
  //         icon: '<i class="fas fa-key"></i>'
  //       },
  //       {
  //         title: 'button 7',
  //         payload: 'button 7',
  //         icon: '<i class="fas fa-user"></i>'
  //       },
  //       {
  //         title: 'button 7',
  //         payload: 'button 7'
  //       }
  //     ]
  //   },
  //   welcomeTop: {
  //     title: "welcomeTop Banner",
  //     type: "welcomeTop",
  //     button: [
  //       {
  //         title: "LET'S GET STARTED",
  //         payload: "home"
  //       }
  //     ],
  //     bannerImg: "images/imelife-logo_618077.png",
  //     // banner_content:{
  //     //         title:"10%",
  //     //         subtitle:"Discount On",
  //     //         paragraph:"Shopping with your credit card",
  //     //         bannerimg:"images/lifeinsurance.png"
  //     // },
  //     adsslider: [
  //       {
  //         slidertitle: "Promoter Share Selling Notice"
  //       },
  //       {
  //         slidertitle: "Contributions to Government of Nepal for"
  //       },
  //       {
  //         slidertitle: "Mobile Money Transfer"
  //       },
  //       {
  //         slidertitle: "If you have queries then click given button"
  //       }
  //     ],
  //     data: [
  //       {
  //         img: "images/namaste.png",
  //         subtext_content: "Getting information about NCC Bank is now easier. ",
  //         text: "Personal Virtual Assistant",
  //         subtext: "I am your Virtual Assistant  to guide you through different aspects of Banking. Tap the button below to get started.",
  //         welcometext: "Namaste",
  //         cardimg: "images/ime.jpg",
  //         subtitle: "NCC Bank Chatbot",
  //         btntitle: "LET'S GET STARTED"
  //       }
  //     ]
  //   },
  //   buttonUpSlider: {
  //     title: "Hello world",
  //     type: "buttonUpSlider",
  //     listItem: [//for button add button interms of listItem
  //       {
  //         title: 'My Name is Bikash Thapa',
  //         payload: 'button 1'
  //       },
  //       {
  //         title: 'I am From Gorkha Nepal',
  //         payload: 'button 2'
  //       },
  //       {
  //         title: 'I am worked at palmmind ',
  //         payload: 'button 3'
  //       },
  //       {
  //         title: 'I am worked at palmmind ',
  //         payload: 'button 4'
  //       },
  //       {
  //         title: 'I am worked at palmmind ',
  //         payload: 'button 5',
  //         icon: '<i class="fas fa-envelope"></i>'
  //       },
  //       {
  //         title: 'I am worked at palmmind ',
  //         payload: 'button 6',
  //         icon: '<i class="fas fa-key"></i>'
  //       },
  //       {
  //         title: 'I am worked at palmmind ',
  //         payload: 'button 7',
  //         icon: '<i class="fas fa-user"></i>'
  //       },
  //       {
  //         title: 'I am worked at palmmind ',
  //         payload: 'button 7'
  //       }
  //     ]
  //   },
  //   askMe: {
  //     type: "askMe",
  //     title: "",
  //     subtitle: "What do you need help with ?",
  //     data: [
  //       {
  //         queries: [
  //           {
  //             text: "Find atm near me",
  //             payload: "atm",
  //           },
  //           {
  //             text: "what are different saving accounts",
  //             payload: "what are different saving accounts",
  //           },
  //           {
  //             text: "How much is FD tenure?",
  //             payload: "How much is FD tenure?",
  //           },
  //           {
  //             text: "Types of loan",
  //             payload: "Types of loan",
  //           },
  //           {
  //             text: "How can I transfer funds through internet banking ? ",
  //           },
  //           {
  //             text: "Can I have two user ids?",
  //           },
  //         ],
  //       }
  //     ]
  //   },

  //   changeMobile: {
  //     "type": "formMessageSection",
  //     "exitMSG": "Oops !! you quitted midway during Mobile change.",
  //     "form": {
  //       "elements": [
  //         {
  //           "order": "text",
  //           "title": "Your Policy Last Name Please ?",
  //           "type": "textbox",
  //           "placeholder": "Please Type Your Last Name",
  //           "utterances": [
  //             {
  //               "message": "Please authenticate yourself by answering some questions to request for mobile change ."
  //             }
  //           ],
  //           "validation": {
  //             "type": "name",
  //             "error": "Please enter valid last name."
  //           },
  //           "label": "LastName"
  //         },
  //         {
  //           "order": "number",
  //           "title": "What is your Policy Number ?",
  //           "type": "textbox",
  //           "placeholder": "Enter Your Policy Number",
  //           "validation": {
  //             "type": "PolicyNumber",
  //             "error": "Invalid!! Provide 9 digit Policy Number"
  //           },
  //           "label": "PolicyNumber"
  //         },
  //         {
  //           "order": "number",
  //           "title": "Mobile number you want to change ?",
  //           "type": "textbox",
  //           "placeholder": "Enter Your mobile Number",
  //           "validation": {
  //             "type": "mobile",
  //             "error": "Invalid!! Provide 10 digit number"
  //           },
  //           "label": "mobile"
  //         },
  //         {
  //           "order": "text",
  //           "title": "Policy DOB please ? ",
  //           "placeholder": "Please Enter Assured Date",
  //           "type": "date",
  //           "label": "DateOfBirth"
  //         },
  //         {
  //           "order": "cancle",
  //           "title": " Please click Submit button to proceed further and Cancel to quit.",
  //           "type": "submitbutton",
  //           "placeholder": "Enter your email",
  //           "button": [
  //             {
  //               "submit": "Submit",
  //               "type": "submit"
  //             },
  //             {
  //               "submit": "Cancel",
  //               "type": "cancel"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     "post": "/rest/v1/insurance/ime/agent?type=policy_dueinfo&action=email&emailfor=MobileChange"
  //   },

  //   generalform: {
  //     "type": "formMessageSection",
  //     "exitMSG": "Oops !! you quitted midway during requesting for Property Insurance.",
  //     "Mailcatagories": "Others",
  //     "emailsubject": "Others from ajode",
  //     "emailTitle": "emailTitle sdfhgh",
  //     "lastContactText":"or you can contact to our representative Mr. Rama Bohara by calling 9851110241, Also can send mail at ..........@",
  //     "multipart": false,
  //     "form": {
  //       "afterresult_buttons": [{
  //         "title": "Yes",
  //         "payload": "Yas"
  //       },
  //       {
  //         "title": "No",
  //         "payload": "No"
  //       }],
  //       "elements": [
  //         {
  //           "order": "text",
  //           "title": "Your Full Name Please ?",
  //           "type": "textbox",
  //           "placeholder": "Please Enter Your Full Name",
  //           "validation": {
  //             "type": "name",
  //             "error": "Please enter valid Name."
  //           },
  //           "label": "name"
  //         },
  //         {
  //           "order": "text",
  //           "title": "Where are you from ? Please mention your Address.",
  //           "type": "textbox",
  //           "placeholder": "Please enter your Address",
  //           "validation": {
  //             "type": "name",
  //             "error": "Address should not be Number"
  //           },
  //           "label": "address"
  //         },
  //         {
  //           "order": "number",
  //           "title": "Your mobile number please ?",
  //           "type": "textbox",
  //           "placeholder": "Enter Your mobile Number",
  //           "validation": {
  //             "type": "mobile",
  //             "error": "Invalid!! Provide 10 digit number"
  //           },
  //           "label": "mobile"
  //         },
  //         {
  //           "order": "email",
  //           "title": "Provide us your Email",
  //           "type": "textbox",
  //           "placeholder": "Enter your Email",
  //           "validation": {
  //             "type": "email",
  //             "error": "Invalid email"
  //           },
  //           "label": "email"
  //         },
  //         {
  //           "order": "File",
  //           "title": "upload file",
  //           "type": "uploadFile",
  //           "multifile": [
  //             {
  //               "title": "block1 form",
  //               "maxlength": 2,
  //               "accept": "gif|jpg|png",
  //               "id": "firstuploadfile12",
  //             }
  //           ],
  //           "validation": {
  //             "type": "uploadFile",
  //             "error": "Please upload file with gif|jpg|png format"
  //           },
  //           "label": "File"
  //         },
  //         {
  //           "order": "cancle",
  //           "title": " Do you want to submit your information ?",
  //           "type": "submitbutton",
  //           "placeholder": "Enter your email",
  //           "button": [
  //             {
  //               "submit": "Submit",
  //               "type": "submit"
  //             },
  //             {
  //               "submit": "Cancel",
  //               "type": "cancel"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     "post": "/rest/v1/leads/"
  //   },

  //   privatevichalecomprehensive: {
  //     "type": "formMessageSection",
  //     "exitMSG": "Oops !! you quitted midway during requesting for Property Insurance.",
  //     "Mailcatagories": "Others",
  //     "emailsubject": "Others from ajode",
  //     "emailTitle": "emailTitle sdfhgh",
  //     "thirdparty": false,
  //     "multipart": false,
  //     "form": {
  //       "afterresult_buttons": [{
  //         "title": "Yes",
  //         "payload": "Yas"
  //       },
  //       {
  //         "title": "No",
  //         "payload": "No"
  //       }],
  //       "elements": [
  //         {
  //           "order": "button",
  //           "title": "Please specify the CC of Vehicle? ",
  //           "utterances": [{
  //             "message": "We would like to get some information for calculation to begin."
  //           }
  //           ],
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "Less than 1000",
  //               "payload": "Less than 1000 ",
  //             },
  //             {
  //               "title": "1000-6000",
  //               "payload": "1000-1600"
  //             },
  //             {
  //               "title": "Above 1600",
  //               "payload": "above 1600"
  //             }
  //           ],
  //           "label": "cc"
  //         },
  //         {
  //           "order": "number",
  //           "title": "What value you want to insure for vehicle ? eg 2500000",
  //           "type": "countnumber",
  //           "placeholder": "Type here",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "maximum 2 digit like 1 or 11"
  //           },
  //           "label": "moter_value"
  //         },
  //         {
  //           "order": "number",
  //           "title": "How old is your vehicle in years? New vehicle is 0 years",
  //           "type": "countnumber",
  //           "placeholder": "How old is your vehicle in years",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "maximum 2 digit like 1 or 11"
  //           },
  //           "label": "old"
  //         },
  //         {
  //           "order": "button",
  //           "title": "I use vehicle for",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "Private",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Rent",
  //               "payload": true
  //             }
  //           ],
  //           "label": "rent"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Number of seats in vehicle",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "3",
  //               "payload": 3,
  //             },
  //             {
  //               "title": "5",
  //               "payload": 5
  //             },
  //             {
  //               "title": "8",
  //               "payload": 8
  //             },
  //             {
  //               "title": "10",
  //               "payload": 10
  //             }
  //           ],
  //           "label": "seats"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you want to insure for Driver ? If no type No, else type insured value",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No, I don't",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yas, I do",
  //               "payload": true
  //             }
  //           ],
  //           "label": "isDriver"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you want to insure for passengers ? If no type No, else type insured value for passenger",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No I don't",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes I do",
  //               "payload": true
  //             }
  //           ],
  //           "label": "isPatient"
  //         },
  //         {
  //           "order": "button",
  //           "title": " * This covers you for any kind of loss or damage to your vehicle due to accidents, fire, theft, natural calamities, etc. It also includes bodily injuries to the owner and not the third-party",
  //           "utterances": [{
  //             "message": " Specify Voluntary Excess Amount for own damage cover"
  //           }],
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "1000",
  //               "payload": 1000,
  //             },
  //             {
  //               "title": "2000",
  //               "payload": 2000
  //             },
  //             {
  //               "title": "5000",
  //               "payload": 5000,
  //             },
  //             {
  //               "title": "10000",
  //               "payload": 10000
  //             }
  //           ],
  //           "label": "excess_cover"
  //         },
  //         {
  //           "order": "number",
  //           "title": "*What is no claim bonus(NCB)?For every year you have vehicle insurance and don't make a claim, you'll get a discount on the following year's premium",
  //           "utterances": [
  //             {
  //               "message": "When was the last time you made a claim (in years)? "
  //             }
  //           ],
  //           "type": "countnumber",
  //           "placeholder": "Type here",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "maximum 2 digit like 1 or 11"
  //           },
  //           "label": "claim"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you need towing service after accident?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes",
  //               "payload": true
  //             }
  //           ],
  //           "label": "towing"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Number of seats in vehicle",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "3",
  //               "payload": 3,
  //             },
  //             {
  //               "title": "5",
  //               "payload": 5
  //             },
  //             {
  //               "title": "8",
  //               "payload": 8
  //             },
  //             {
  //               "title": "10",
  //               "payload": 10
  //             }
  //           ],
  //           "label": "seats"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you need RSD/Terrorism cover ?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes",
  //               "payload": true
  //             }
  //           ],
  //           "label": "rsd"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you need direct discount?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes",
  //               "payload": true
  //             }
  //           ],
  //           "label": "directDiscount"
  //         },
  //         {
  //           "order": "cancle",
  //           "title": " Do you want to submit your information ?",
  //           "type": "submitbutton",
  //           "placeholder": "Enter your email",
  //           "button": [
  //             {
  //               "submit": "Submit",
  //               "type": "submit"
  //             },
  //             {
  //               "submit": "Cancel",
  //               "type": "cancel"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     "post": "/rest/v1/calculation/privatevehicle"
  //   },
  //   privatevichilethirdparty: {
  //     "type": "formMessageSection",
  //     "exitMSG": "Oops !! you quitted midway during requesting for private vichile third party.",
  //     "Mailcatagories": "Others",
  //     "emailsubject": "Others from ajode",
  //     "emailTitle": "emailTitle sdfhgh",
  //     "thirdparty": true,
  //     "multipart": false,
  //     "form": {
  //       "afterresult_buttons": [{
  //         "title": "Yes",
  //         "payload": "Yas"
  //       },
  //       {
  //         "title": "No",
  //         "payload": "No"
  //       }],
  //       "elements": [
  //         {
  //           "order": "button",
  //           "title": "Please specify the CC of Vehicle?",
  //           "utterances": [{
  //             "message": "We would like to get some information for calculation to begin."
  //           }
  //           ],
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "Less than 1000",
  //               "payload": "Less than 1000 ",
  //             },
  //             {
  //               "title": "1000-6000",
  //               "payload": "1000-1600"
  //             },
  //             {
  //               "title": "Above 1600",
  //               "payload": "Above 1600"
  //             }
  //           ],
  //           "label": "cc"
  //         },
  //         {
  //           "order": "number",
  //           "title": "How old is your vehicle in years? New vehicle is 0 years",
  //           "type": "countnumber",
  //           "placeholder": "How old is your vehicle in years",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "maximum 2 digit like 1 or 11"
  //           },
  //           "label": "old"
  //         },
  //         {
  //           "order": "number",
  //           "title": "* Do you know your claim history also affects your premium amount. Lesser claims more discounts.",
  //           "utterances": [
  //             {
  //               "message": "How many claims have you made in last  years? "
  //             }
  //           ],
  //           "type": "countnumber",
  //           "placeholder": "Type here",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "maximum 2 digit like 1 or 11"
  //           },
  //           "label": "claim"
  //         },
  //         {
  //           "order": "button",
  //           "title": "When was the last time you made a claim (in years)?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "This yr",
  //               "payload": 0,
  //             },
  //             {
  //               "title": "Last yr",
  //               "payload": 1
  //             },
  //             {
  //               "title": "2 yr ago",
  //               "payload":2
  //             },
  //             {
  //               "title": "3 yr ago",
  //               "payload":3
  //             },
  //             {
  //               "title": "4 yr ago",
  //               "payload": 4
  //             },
  //             {
  //               "title": "More than 4 yr",
  //               "payload": 5
  //             }
  //           ],
  //           "label": "age_y"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you need RSD/Terrorism cover ?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes",
  //               "payload": true
  //             }
  //           ],
  //           "label": "rsd"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you need direct discount?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes",
  //               "payload": true
  //             }
  //           ],
  //           "label": "directDiscount"
  //         },

  //         {
  //           "order": "cancle",
  //           "title": " Do you want to submit your information ?",
  //           "type": "submitbutton",
  //           "placeholder": "Enter your email",
  //           "button": [
  //             {
  //               "submit": "Submit",
  //               "type": "submit"
  //             },
  //             {
  //               "submit": "Cancel",
  //               "type": "cancel"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     "post": "/rest/v1/calculation/privatevehicle"
  //   },

  //   bikecomprehensive: {
  //     "type": "formMessageSection",
  //     "exitMSG": "Oops !! you quitted midway during requesting for Bike comprehensive.",
  //     "Mailcatagories": "Others",
  //     "emailsubject": "Others from ajode",
  //     "emailTitle": "emailTitle sdfhgh",
  //     "thirdparty": false,
  //     "multipart": false,
  //     "form": {
  //       "afterresult_buttons": [{
  //         "title": "Yes",
  //         "payload": "Yas"
  //       },
  //       {
  //         "title": "No",
  //         "payload": "No"
  //       }],
  //       "elements": [
  //         {
  //           "order": "button",
  //           "title": "Please specify the CC of Motorcycle? ",
  //           "utterances": [{
  //             "message": "We would like to get some information for calculation to begin."
  //           }
  //           ],
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "Less than 150",
  //               "payload": "Less than 150",
  //             },
  //             {
  //               "title": "150-250",
  //               "payload": "150-250"
  //             },
  //             {
  //               "title": "Above 250",
  //               "payload": "Above 250"
  //             }
  //           ],
  //           "label": "cc"
  //         },
  //         {
  //           "order": "number",
  //           "title": "Please specify the value of Motorcycle in Rs? eg 135000, 100000",
  //           "type": "countnumber",
  //           "placeholder": "Type here",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "Please enter valid price"
  //           },
  //           "label": "moter_value"
  //         },
  //         {
  //           "order": "number",
  //           "title": "How old is your Motorcycle  in years? New Motorcycle  is 0 years",
  //           "type": "countnumber",
  //           "placeholder": "How old is your Motorcycle  in years",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "Please enter valid only"
  //           },
  //           "label": "old"
  //         },
  //         {
  //           "order": "button",
  //           "title": "* This covers you for any kind of loss or damage to your vehicle due to accidents, fire, theft, natural calamities, etc. It also includes bodily injuries to the owner and not the third-party",
  //           "utterances": [{
  //             "message": "Specify amount for own damage cover"
  //           }],
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "500",
  //               "payload": 500,
  //             },
  //             {
  //               "title": "1000",
  //               "payload": 1000
  //             },
  //             {
  //               "title": "2000",
  //               "payload": 2000
  //             }
  //           ],
  //           "label": "excess_cover"
  //         },
  //         {
  //           "order": "number",
  //           "title": "*What is no claim bonus(NCB)?For every year you have vehicle insurance and don't make a claim, you'll get a discount on the following year's premium",
  //           "utterances": [
  //             {
  //               "message": "When was the last time you made a claim (in years)? "
  //             }
  //           ],
  //           "type": "countnumber",
  //           "placeholder": "Type here",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "maximum 2 digit like 1 or 11"
  //           },
  //           "label": "claim"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you need RSD/Terrorism cover ?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes",
  //               "payload": true
  //             }
  //           ],
  //           "label": "rsd"
  //         },
  //         {
  //           "order": "button",
  //           "title": "Do you need direct discount?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "No",
  //               "payload": false,
  //             },
  //             {
  //               "title": "Yes",
  //               "payload": true
  //             }
  //           ],
  //           "label": "directDiscount"
  //         },
  //         {
  //           "order": "cancle",
  //           "title": " Do you want to submit your information ?",
  //           "type": "submitbutton",
  //           "placeholder": "submit",
  //           "button": [
  //             {
  //               "submit": "Submit",
  //               "type": "submit"
  //             },
  //             {
  //               "submit": "Cancel",
  //               "type": "cancel"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     "post": "/rest/v1/calculation/bikecalculation"
  //   },
  //   bikethirdpartycalculation: {
  //     "type": "formMessageSection",
  //     "exitMSG": "Oops !! you quitted midway during requesting for Bike third party.",
  //     "Mailcatagories": "Others",
  //     "emailsubject": "Others from ajode",
  //     "emailTitle": "emailTitle sdfhgh",
  //     "thirdparty": true,
  //     "multipart": false,
  //     "form": {
  //       "afterresult_buttons": [{
  //         "title": "Yes",
  //         "payload": "Yas"
  //       },
  //       {
  //         "title": "No",
  //         "payload": "No"
  //       }],
  //       "elements": [
  //         {
  //           "order": "button",
  //           "title": "Please specify the CC of Motorcycle? ",
  //           "utterances": [{
  //             "message": "We would like to get some information for calculation to begin."
  //           }
  //           ],
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "Less than 150",
  //               "payload": "Less than 150",
  //             },
  //             {
  //               "title": "150-250",
  //               "payload": "150-250"
  //             },
  //             {
  //               "title": "Above 250",
  //               "payload": "Above 250"
  //             }
  //           ],
  //           "label": "cc"
  //         },
  //         {
  //           "order": "number",
  //           "title": "How old is your Motorcycle  in years? New Motorcycle  is 0 years",
  //           "type": "countnumber",
  //           "placeholder": "How old is your Motorcycle  in years",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "Please enter valid only"
  //           },
  //           "label": "old"
  //         },
  //         {
  //           "order": "button",
  //           "title": "When was the last time you made a claim (in years)?",
  //           "type": "button",
  //           "button": [
  //             {
  //               "title": "This yr",
  //               "payload": 0,
  //             },
  //             {
  //               "title": "Last yr",
  //               "payload": 1
  //             },
  //             {
  //               "title": "2 yr ago",
  //               "payload":2
  //             },
  //             {
  //               "title": "3 yr ago",
  //               "payload":3
  //             },
  //             {
  //               "title": "4 yr ago",
  //               "payload": 4
  //             },
  //             {
  //               "title": "More than 4 yr",
  //               "payload": 5
  //             }
  //           ],
  //           "label": "age_y"
  //         },
  //         {
  //           "order": "number",
  //           "title": "*Do you know your claim history also affects your premium amount. Lesser claims more discounts.",
  //           "utterances": [
  //             {
  //               "message": "How many claims have you made in last 1 years? "
  //             }
  //           ],
  //           "type": "countnumber",
  //           "placeholder": "Type here",
  //           "validation": {
  //             "validation": false,
  //             "validrejex": "^\d{2}$",
  //             "error": "maximum 2 digit like 1 or 11"
  //           },
  //           "label": "claim"
  //         },
  //         {
  //           "order": "cancle",
  //           "title": " Do you want to submit your information ?",
  //           "type": "submitbutton",
  //           "placeholder": "submit",
  //           "button": [
  //             {
  //               "submit": "Submit",
  //               "type": "submit"
  //             },
  //             {
  //               "submit": "Cancel",
  //               "type": "cancel"
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     "post": "/rest/v1/calculation/bikecalculation"
  //   },

  //   detailhome: {
  //     type: "detailHome",
  //     data: {
  //       subtitle: "Welcome To IME LIFE",
  //       paragraph: "Registered in 2065 Aswin 15 (October 01, 2008), IME Life Insurance started its operation from 1stBhadra 2074 (August 17,2017) offering a range of individual and group insurance solutions that meet various customers' needs such as Protection, Savings, and Investment. IME Life has paid up capital of NPR 1.4 Billion and will reach 2 Billion after IPO. Company's reinsurance partner is Nepal Reinsurance Company Ltd.",
  //       img: 'images/lifeinsurance.png',
  //       button: [
  //         {
  //           title: "View More",
  //           link: "https://imelifeinsurance.com/"
  //         }
  //       ]
  //     }
  //   },
  //   formMessage: {
  //     type: "formMessageSection",
  //     form: {
  //       elements: [
  //         {
  //           order: "text",
  //           title: "please kindly provide your LastName?",
  //           type: "textbox",
  //           placeholder: "Please Enter Your lastname",
  //           utterances: [
  //             {
  //               message: "Do you mind spelling your last name  ?"
  //             }
  //           ],
  //           validation: {
  //             type: "name",
  //             error: "Too long for name"
  //           },
  //           label: "LastName"
  //         },
  //         {
  //           order: "number",
  //           title: "Enter PolicyNumber ?",
  //           type: "textbox",
  //           placeholder: "Enter PolicyNumber",
  //           validation: {
  //             type: "PolicyNumber",
  //             error: "Invalid!! Provide 9 digit PolicyNumber"
  //           },
  //           label: "PolicyNumber"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose your date of birth.",
  //           placeholder: "Please Enter birthdate",
  //           type: "date",
  //           label: "DateOfBirth"
  //         },
  //         {
  //           order: "cancle",
  //           title: " Do you want to submit your information ?",
  //           type: "submitbutton",
  //           placeholder: "Enter your email",
  //           button: [
  //             {
  //               submit: "Submit",
  //               type: "submit"
  //             },
  //             {
  //               submit: "Cancel",
  //               type: "cancle"
  //             }]
  //         }
  //       ]
  //     },
  //     post: "/rest/v1/insurance/ime/agent?type=policy_statement&action=view"
  //   },
  //   policyDue: {
  //     type: "formMessageSection",
  //     exitMSG: "Oops !! you quitted midway during requesting update Bank Account Number.",
  //     form: {
  //       elements: [
  //         {
  //           order: "text",
  //           title: "please kindly provide your LastName?",
  //           type: "textbox",
  //           placeholder: "Please Enter Your lastname",
  //           utterances: [
  //             {
  //               message: "Do you mind spelling your last name  ?"
  //             }
  //           ],
  //           validation: {
  //             type: "name",
  //             error: "Too long for name"
  //           },
  //           label: "LastName"
  //         },
  //         {
  //           order: "number",
  //           title: "Enter PolicyNumber ?",
  //           type: "textbox",
  //           placeholder: "Enter PolicyNumber",
  //           validation: {
  //             type: "PolicyNumber",
  //             error: "Invalid!! Provide 9 digit PolicyNumber"
  //           },
  //           label: "PolicyNumber"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose your date of birth.",
  //           placeholder: "Please Enter birthdate",
  //           type: "date",
  //           label: "DateOfBirth"
  //         },
  //         {
  //           order: "cancle",
  //           title: " Do you want to submit your information ?",
  //           type: "submitbutton",
  //           placeholder: "Enter your email",
  //           button: [
  //             {
  //               submit: "Submit",
  //               type: "submit"
  //             },
  //             {
  //               submit: "Cancel",
  //               type: "cancel"
  //             }]
  //         }
  //       ]
  //     },
  //     post: "/rest/v1/insurance/ime/agent?type=policy_dueinfo&action=view"
  //   },
  //   AgentPolicy: {
  //     type: "formMessageSection",
  //     exitMSG: "Oops !! you quitted midway during requesting update Bank Account Number.",
  //     form: {
  //       elements: [
  //         {
  //           order: "text",
  //           title: "please kindly provide your LastName?",
  //           type: "textbox",
  //           placeholder: "Please Enter Your lastname",
  //           utterances: [
  //             {
  //               message: "Do you mind spelling your last name  ?"
  //             }
  //           ],
  //           validation: {
  //             type: "name",
  //             error: "Please enter valid Last Name."
  //           },
  //           label: "LastName"
  //         },
  //         {
  //           order: "number",
  //           title: "Enter AgentCode ?",
  //           type: "textbox",
  //           placeholder: "Enter AgentCode",
  //           validation: {
  //             type: "AgentCode",
  //             error: "Invalid!! Provide 8 digit Agent Code"
  //           },
  //           label: "AgentCode"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose your date of birth.",
  //           placeholder: "Please Enter birthdate",
  //           type: "date",
  //           label: "DateOfBirth"
  //         },
  //         {
  //           order: "cancle",
  //           title: " Do you want to submit your information ?",
  //           type: "submitbutton",
  //           placeholder: "Enter your email",
  //           button: [
  //             {
  //               submit: "Submit",
  //               type: "submit"
  //             },
  //             {
  //               submit: "Cancel",
  //               type: "cancel"
  //             }]
  //         }
  //       ]
  //     },
  //     post: "/rest/v1/insurance/ime/agent?type=AgentPolicy&action=view"
  //   },

  //   //tax cetificate
  //   tax_certhificate: {
  //     type: "formMessageSection",
  //     exitMSG: "Oops !! you quitted midway during requesting tax certificate",
  //     form: {
  //       elements: [
  //         {
  //           order: "text",
  //           title: "please kindly provide your LastName?",
  //           type: "textbox",
  //           placeholder: "Please Enter Your lastname",
  //           utterances: [
  //             {
  //               message: "Do you mind spelling your last name  ?"
  //             }
  //           ],
  //           validation: {
  //             type: "name",
  //             error: "Please enter valid Last Name."
  //           },
  //           label: "LastName"
  //         },
  //         {
  //           order: "number",
  //           title: "Enter PolicyNumber ?",
  //           type: "textbox",
  //           placeholder: "Enter PolicyNumber",
  //           validation: {
  //             type: "PolicyNumber",
  //             error: "Invalid!! Provide 9 digit PolicyNumber"
  //           },
  //           label: "PolicyNumber"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose your date of birth.",
  //           placeholder: "Please Enter birthdate",
  //           type: "date",
  //           label: "DateOfBirth"
  //         },
  //         {
  //           order: "cancle",
  //           title: " Do you want to submit your information ?",
  //           type: "submitbutton",
  //           placeholder: "Enter your email",
  //           button: [
  //             {
  //               submit: "Submit",
  //               type: "submit"
  //             },
  //             {
  //               submit: "Cancel",
  //               type: "cancel"
  //             }]
  //         }
  //       ]
  //     },
  //     post: "/rest/v1/insurance/ime/agent?type=tax_certhificate&action=view"
  //   },
  //   //policty status
  //   policy_status: {
  //     type: "formMessageSection",
  //     exitMSG: "Oops !! you quitted midway during requesting Policy Status",
  //     form: {
  //       elements: [
  //         {
  //           order: "text",
  //           title: "please kindly provide your LastName?",
  //           type: "textbox",
  //           placeholder: "Please Enter Your lastname",
  //           validation: {
  //             type: "name",
  //             error: "Please enter valid Last Name."
  //           },
  //           label: "LastName"
  //         },
  //         {
  //           order: "number",
  //           title: "Enter PolicyNumber ?",
  //           type: "textbox",
  //           placeholder: "Enter PolicyNumber",
  //           validation: {
  //             type: "PolicyNumber",
  //             error: "Invalid!! Provide 9 digit PolicyNumber"
  //           },
  //           label: "PolicyNumber"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose your date of birth.",
  //           placeholder: "Please Enter birthdate",
  //           type: "date",
  //           label: "DateOfBirth"
  //         },
  //         {
  //           order: "cancle",
  //           title: " Do you want to submit your information ?",
  //           type: "submitbutton",
  //           placeholder: "Enter your email",
  //           button: [
  //             {
  //               submit: "Submit",
  //               type: "submit"
  //             },
  //             {
  //               submit: "Cancel",
  //               type: "cancel"
  //             }]
  //         }
  //       ]
  //     },
  //     post: "/rest/v1/insurance/ime/agent?type=check_policy_status&action=view"
  //   },
  //   //policty status
  //   AgentDownlineBusiness: {
  //     type: "formMessageSection",
  //     exitMSG: "Oops !! you quitted midway during requesting Policy Status",
  //     form: {
  //       elements: [
  //         {
  //           order: "text",
  //           title: "please kindly provide your LastName?",
  //           type: "textbox",
  //           placeholder: "Please Enter Your lastname",
  //           validation: {
  //             type: "name",
  //             error: "Please enter valid Last Name."
  //           },
  //           label: "LastName"
  //         },
  //         {
  //           order: "number",
  //           title: "Enter AgentCode ?",
  //           type: "textbox",
  //           placeholder: "Enter AgentCode",
  //           validation: {
  //             type: "AgentCode",
  //             error: "Invalid!! Provide 8 digit Agent Code"
  //           },
  //           label: "AgentCode"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose From Date.",
  //           placeholder: "Please Enter From Date",
  //           type: "FromDate",
  //           label: "FromDate"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose To Date.",
  //           placeholder: "Please Enter To Date",
  //           type: "ToDate",
  //           label: "ToDate"
  //         },
  //         {
  //           order: "number",
  //           title: "Enter Downline Number ?",
  //           type: "textbox",
  //           placeholder: "Enter Downline",
  //           validation: {
  //             type: "Downline",
  //             error: "Invalid!! Downline Number Should Be Required"
  //           },
  //           label: "Downline"
  //         },
  //         {
  //           order: "text",
  //           utterances: [
  //             {
  //               message: "Your age wil help us keep you in good books "
  //             }
  //           ],
  //           title: "Please choose your date of birth.",
  //           placeholder: "Please Enter birthdate",
  //           type: "date",
  //           label: "DateOfBirth"
  //         },
  //         {
  //           order: "cancle",
  //           title: " Do you want to submit your information ?",
  //           type: "submitbutton",
  //           placeholder: "Enter your email",
  //           button: [
  //             {
  //               submit: "Submit",
  //               type: "submit"
  //             },
  //             {
  //               submit: "Cancel",
  //               type: "cancel"
  //             }]
  //         }
  //       ]
  //     },
  //     post: "/rest/v1/insurance/ime/agent?type=AgentDownlineBusiness&action=view"
  //   },

  //   BecomeAgent: {
  //     type: "formMessageSection",
  //     exitMSG: "Oops !! you quitted midway during requesting update Bank Account Number.",
  //     form: {
  //       elements: [
  //         {
  //           order: "text",
  //           title: "please kindly provide your Name?",
  //           type: "textbox",
  //           placeholder: "Please Enter Your Full Name",
  //           utterances: [
  //             {
  //               message: "Do you mind spelling your Full Name  ?"
  //             }
  //           ],
  //           validation: {
  //             type: "name",
  //             error: "Please enter valid Name."
  //           },
  //           label: "name"
  //         },
  //         {
  //           order: "text",
  //           title: "Where are you from ? Please mention your Address.",
  //           type: "textbox",
  //           placeholder: "Please enter your Address",
  //           validation: {
  //             type: "name",
  //             error: "Address should not be Number"
  //           },
  //           label: "address"
  //         },
  //         {
  //           order: "number",
  //           title: "Your mobile number please ?",
  //           type: "textbox",
  //           placeholder: "Enter Your mobile Number",
  //           validation: {
  //             type: "mobile",
  //             error: "Invalid!! Provide 10 digit number"
  //           },
  //           label: "mobile"
  //         },
  //         {
  //           order: "email",
  //           title: "Provide us your Email ?",
  //           type: "textbox",
  //           placeholder: "Enter your Email",
  //           validation: {
  //             type: "email",
  //             error: "Invalid email"
  //           },
  //           label: "email"
  //         },
  //         {
  //           order: "cancle",
  //           title: " Do you want to submit your information ?",
  //           type: "submitbutton",
  //           placeholder: "Enter your email",
  //           button: [
  //             {
  //               submit: "Submit",
  //               type: "submit"
  //             },
  //             {
  //               submit: "Cancel",
  //               type: "cancel"
  //             }]
  //         }
  //       ]
  //     },
  //     post: "/rest/v1/insurance/ime/agent?type=agent&action=email&emailfor=BecomeAgent"
  //   },

  //  formMessage:{
  //   type:"formMessageSection",
  //exitMSG: "Oops !! you quitted midway during requesting update Bank Account Number.",
  //   form:{
  //     elements:[
  //       {
  //         order:"text",
  //         title:"please kindly provide your name?",
  //         type:"textbox",
  //         placeholder:"Please Enter Your name",
  //         utterances:[
  //           {
  //             message:"Do you mind spelling your sweet name  ?"
  //           }
  //         ],
  //         validation:{
  //           type:"name",
  //           error:"Too long for name"
  //         },
  //         label:"name"
  //       },
  //       {
  //         order:"text",
  //         title:"Where are you from ? Please mention your Address.",
  //         type:"textbox",
  //         placeholder:"Please Enter Your address",
  //         validation:{
  //           type:"name",
  //           error:"Address should not be Number"
  //         },
  //         label:"address"
  //       },
  //       {
  //           order:"text",
  //           utterances:[
  //             {
  //               message:"Your age wil help us keep you in good books "
  //             }
  //           ],
  //         title:"Please choose your date of birth.",
  //         placeholder:"Please Enter birthdate",
  //         type:"date",
  //         label:"dob"
  //       },
  //       {
  //         order:"number",
  //         title:"Your mobile number please ?",
  //         type:"textbox",
  //         placeholder:"Enter Your mobile Nmber",
  //         validation:{
  //           type:"mobile",
  //           error:"Invalid!! Provide 10 digit number"
  //         },
  //         label:"mobile"
  //       },
  //       {
  //         order:"email",
  //         title:"Provide us your email ?",
  //         type:"textbox",
  //         placeholder:"Enter your email",
  //         validation:{
  //           type:"email",
  //           error:"Invalid email"
  //         },
  //         label:"email"
  //       },
  //       {
  //         order:"selectMode",
  //         title:"Please select mode option ?",
  //         type:"select",
  //         placeholder:"Enter your email",
  //         label:"select",
  //         selectvalue:['yearly','querterly','halfly']
  //       },
  //       {
  //         title:"Please rate our chatbot.",
  //         type:"rating",
  //         label:"rating",
  //         ratingvalue:[{
  //           msg:"poor",
  //           emoji:"&#x1F61F",
  //           data_value:1
  //         },
  //         {
  //           msg:"Fair",
  //           emoji:"&#x1F628",
  //           data_value:2
  //         },
  //         {
  //           msg:"Good",
  //           emoji:"&#x1F626",
  //           data_value:3
  //         },
  //         {
  //           msg:"Excellent",
  //           emoji:"&#x1F62F",
  //           data_value:4
  //         },
  //         {
  //           msg:"Wow",
  //           emoji:"&#x1F631",
  //           data_value:5
  //         }
  //       ]
  //       },
  //       {
  //         order:"cancle",
  //         title:" Do you want to submit your information ?",
  //         type:"submitbutton",
  //         placeholder:"Enter your email",
  //         button:[
  //           {
  //             submit:"Submit",
  //             type:"submit"
  //           },
  //           {
  //             submit:"Cancel",
  //             type:"cancel"
  //           }]
  //       }
  //       ]
  //   },
  //  post:"/rest/v1/leads/policy?mode=MD&email=false"
  //  }
  cssss: {
    type: "detailDrawer",
    title: "We have the following Saving Accounts:",
    data: [
      {
        title: "SURAKSHA BACHAT KHATA",
        subtitle:
          "Let's make a secure future with us. SURAKSHA BACHAT KHATA offers ample banking solutions for saving. Saving must become a priority, Not just a thought…Pay yourself first.",
        img: "images/img/surakshabachatkhata.png",
        button: {
          contents: [
            {
              title: "View Details",
              id: "btn1",
              Back_icon: {
                title: "Back",
                payload: "back",
              },
              Details: {
                title: "Details of Suraksha Bachat Khata",
                subtitle: "Target Segment: General Public",
                paragraph: "Eligibility: As prescribed by Nepal Rastra Bank",
                subtitle1: [
                  {
                    title:
                      "Features and Benefits of Shine Suraksha Bachat Khata",
                    listitem: [
                      {
                        text: "Minimum balance: Zero (0)",
                      },
                      {
                        text: "Interest Rate: 5.35  % p.a.(subject to change)",
                      },
                      {
                        text: "Interest Calculation on: Daily Balance",
                      },
                      {
                        text: "Interest Payment Frequency: Quarterly",
                      },
                      {
                        text: "ABBS Charge: Free",
                      },
                      {
                        text: "Issuance of Cheque Book: Free",
                      },
                      {
                        text: "Issuance of Bank Statement: NPR 150 (1 time free for one period)",
                      },
                      {
                        text: "Issuance of Balance Certificate: NPR 250 (1 time free on annual basis)",
                      },
                      {
                        text: "Issuance of Good For Payment Cheque: NPR 500 for each time",
                      },
                      {
                        text: "Mobile Banking: NPR 150 (yearly basis)",
                      },
                      {
                        text: "Locker Facility: NPR 2,500 (yearly basis)",
                      },
                      {
                        text: "Debit Card (ATM): NPR 250 (yearly basis)",
                      },
                    ],
                  },
                  {
                    title: "Required Documents",
                    listitem: [
                      {
                        text: "Citizenship Front",
                      },
                      {
                        text: "Citizenship Back",
                      },
                      {
                        text: "Signature",
                      },
                    ],
                  },
                  {
                    title: "Additional features:",
                    listitem: [
                      {
                        text: "25% waiver on Good For Payment Cheque",
                      },
                      {
                        text: "50% waiver on Issuance of Balance Certificate",
                      },
                      {
                        text: "50% waiver on annual charge (1st year) of Safe Deposit Locker (Subject to availability)",
                      },
                      {
                        text: "Accidental death insurance coverage up to Rs. 5,00,000/00*",
                      },
                      {
                        text: "Risk covered due to accidental death and Permanent Total Disability due to an accident.",
                      },
                    ],
                  },
                  {
                    title: "How to apply for Shine Suraksha Bachat Khata?",
                    subtitle:
                      "To apply online please click the button below or You can collect the application form from the nearest branch and hand it out personally. Visit the nearest branch for assistance and clarity.",
                  },
                ],
                button: {
                  contents: [
                    {
                      title: "Application Form",
                      link: "https://onlineaccount.srdb.com.np/#/customer/opening/accountVerification",
                    },
                    {
                      title: "Main Menu",
                      payload: "menu",
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        title: "Shine Remittance Bachat Khata",
        subtitle:
          "This account is for the Foreign Employees. Shine Remittance Bachat Khata offers ample banking solutions for saving. Saving must become a priority, Not just a thought…Pay yourself first.",
        img: "images/img/remittancekhata.png",
        button: {
          contents: [
            {
              title: "View Details",
              id: "btn1",
              Back_icon: {
                title: "Back",
                payload: "back",
              },
              Details: {
                title: "Details of Shine Remittance Bachat Khata",
                subtitle: "Target Segment: Foreign Employees",
                subtitle1: [
                  {
                    title: "Eligibility:",
                    listitem: [
                      {
                        text: "Account holder should be Foreign Employees",
                      },
                      {
                        text: "Amount should be deposited from remittance through banking channel.",
                      },
                    ],
                  },
                  {
                    title:
                      "Features and Benefits of Shine Remittance Bachat Khata",
                    listitem: [
                      {
                        text: "Minimum balance: NPR 1,000.00",
                      },
                      {
                        text: "Interest Rate: 5.25 % p.a. (Additional 1% can be provided for the remittance received from banking channel)",
                      },
                      {
                        text: "Interest Calculation on: Daily Balance",
                      },
                      {
                        text: "Interest Payment Frequency: Quarterly",
                      },
                    ],
                  },
                  {
                    title: "Required Documents",
                    listitem: [
                      {
                        text: "Citizenship Front",
                      },
                      {
                        text: "Citizenship Back",
                      },
                      {
                        text: "Signature",
                      },
                    ],
                  },
                  {
                    title: "How to apply for Shine Remittance Bachat Khata?",
                    subtitle:
                      "To apply online please click the button below or You can collect the application form from the nearest branch and hand it out personally. Visit the nearest branch for assistance and clarity.",
                  },
                ],
                button: {
                  contents: [
                    {
                      title: "Application Form",
                      link: "https://onlineaccount.srdb.com.np/#/customer/opening/accountVerification",
                    },
                    {
                      title: "Main Menu",
                      payload: "menu",
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        title: "SURAKSHA BACHAT KHATA",
        subtitle:
          "Let's make a secure future with us. SURAKSHA BACHAT KHATA offers ample banking solutions for saving. Saving must become a priority, Not just a thought…Pay yourself first.",
        img: "images/img/surakshabachatkhata.png",
        button: {
          contents: [
            {
              title: "View Details",
              id: "btn1",
              Back_icon: {
                title: "Back",
                payload: "back",
              },
              Details: {
                title: "Details of Suraksha Bachat Khata",
                subtitle: "Target Segment: General Public",
                paragraph: "Eligibility: As prescribed by Nepal Rastra Bank",
                subtitle1: [
                  {
                    title:
                      "Features and Benefits of Shine Suraksha Bachat Khata",
                    listitem: [
                      {
                        text: "Minimum balance: Zero (0)",
                      },
                      {
                        text: "Interest Rate: 5.35  % p.a.(subject to change)",
                      },
                      {
                        text: "Interest Calculation on: Daily Balance",
                      },
                      {
                        text: "Interest Payment Frequency: Quarterly",
                      },
                      {
                        text: "ABBS Charge: Free",
                      },
                      {
                        text: "Issuance of Cheque Book: Free",
                      },
                      {
                        text: "Issuance of Bank Statement: NPR 150 (1 time free for one period)",
                      },
                      {
                        text: "Issuance of Balance Certificate: NPR 250 (1 time free on annual basis)",
                      },
                      {
                        text: "Issuance of Good For Payment Cheque: NPR 500 for each time",
                      },
                      {
                        text: "Mobile Banking: NPR 150 (yearly basis)",
                      },
                      {
                        text: "Locker Facility: NPR 2,500 (yearly basis)",
                      },
                      {
                        text: "Debit Card (ATM): NPR 250 (yearly basis)",
                      },
                    ],
                  },
                  {
                    title: "Required Documents",
                    listitem: [
                      {
                        text: "Citizenship Front",
                      },
                      {
                        text: "Citizenship Back",
                      },
                      {
                        text: "Signature",
                      },
                    ],
                  },
                  {
                    title: "Additional features:",
                    listitem: [
                      {
                        text: "25% waiver on Good For Payment Cheque",
                      },
                      {
                        text: "50% waiver on Issuance of Balance Certificate",
                      },
                      {
                        text: "50% waiver on annual charge (1st year) of Safe Deposit Locker (Subject to availability)",
                      },
                      {
                        text: "Accidental death insurance coverage up to Rs. 5,00,000/00*",
                      },
                      {
                        text: "Risk covered due to accidental death and Permanent Total Disability due to an accident.",
                      },
                    ],
                  },
                  {
                    title: "How to apply for Shine Suraksha Bachat Khata?",
                    subtitle:
                      "To apply online please click the button below or You can collect the application form from the nearest branch and hand it out personally. Visit the nearest branch for assistance and clarity.",
                  },
                ],
                button: {
                  contents: [
                    {
                      title: "Application Form",
                      link: "https://onlineaccount.srdb.com.np/#/customer/opening/accountVerification",
                    },
                    {
                      title: "Main Menu",
                      payload: "menu",
                    },
                  ],
                },
              },
            },
          ],
        },
      },
      {
        title: "SURAKSHA BACHAT KHATA",
        subtitle:
          "Let's make a secure future with us. SURAKSHA BACHAT KHATA offers ample banking solutions for saving. Saving must become a priority, Not just a thought…Pay yourself first.",
        img: "images/img/surakshabachatkhata.png",
        button: {
          contents: [
            {
              title: "View Details",
              id: "btn1",
              Back_icon: {
                title: "Back",
                payload: "back",
              },
              Details: {
                title: "Details of Suraksha Bachat Khata",
                subtitle: "Target Segment: General Public",
                paragraph: "Eligibility: As prescribed by Nepal Rastra Bank",
                subtitle1: [
                  {
                    title:
                      "Features and Benefits of Shine Suraksha Bachat Khata",
                    listitem: [
                      {
                        text: "Minimum balance: Zero (0)",
                      },
                      {
                        text: "Interest Rate: 5.35  % p.a.(subject to change)",
                      },
                      {
                        text: "Interest Calculation on: Daily Balance",
                      },
                      {
                        text: "Interest Payment Frequency: Quarterly",
                      },
                      {
                        text: "ABBS Charge: Free",
                      },
                      {
                        text: "Issuance of Cheque Book: Free",
                      },
                      {
                        text: "Issuance of Bank Statement: NPR 150 (1 time free for one period)",
                      },
                      {
                        text: "Issuance of Balance Certificate: NPR 250 (1 time free on annual basis)",
                      },
                      {
                        text: "Issuance of Good For Payment Cheque: NPR 500 for each time",
                      },
                      {
                        text: "Mobile Banking: NPR 150 (yearly basis)",
                      },
                      {
                        text: "Locker Facility: NPR 2,500 (yearly basis)",
                      },
                      {
                        text: "Debit Card (ATM): NPR 250 (yearly basis)",
                      },
                    ],
                  },
                  {
                    title: "Required Documents",
                    listitem: [
                      {
                        text: "Citizenship Front",
                      },
                      {
                        text: "Citizenship Back",
                      },
                      {
                        text: "Signature",
                      },
                    ],
                  },
                  {
                    title: "Additional features:",
                    listitem: [
                      {
                        text: "25% waiver on Good For Payment Cheque",
                      },
                      {
                        text: "50% waiver on Issuance of Balance Certificate",
                      },
                      {
                        text: "50% waiver on annual charge (1st year) of Safe Deposit Locker (Subject to availability)",
                      },
                      {
                        text: "Accidental death insurance coverage up to Rs. 5,00,000/00*",
                      },
                      {
                        text: "Risk covered due to accidental death and Permanent Total Disability due to an accident.",
                      },
                    ],
                  },
                  {
                    title: "How to apply for Shine Suraksha Bachat Khata?",
                    subtitle:
                      "To apply online please click the button below or You can collect the application form from the nearest branch and hand it out personally. Visit the nearest branch for assistance and clarity.",
                  },
                ],
                button: {
                  contents: [
                    {
                      title: "Application Form",
                      link: "https://onlineaccount.srdb.com.np/#/customer/opening/accountVerification",
                    },
                    {
                      title: "Main Menu",
                      payload: "menu",
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    ],
  },
  details:{
    "title": "Choose below to see the charges:",
    "type": "ListItem",
    "subtitle": "Visa Debit Card Charges",
    "data": [
      {
        "subtitle": "Debit Card Issuance Charge",
        "buttonType": "normal"
      },
      {
        "subtitle": "Cash Withdrawal Charge",
        "link": "https://www.nepalbank.com.np/en/personal/cash-withdrawal-charges.html",
        "buttonType": "normal"
      },
      {
        "subtitle": "Balance Enquiry Charge",
        "buttonType": "normal"
      },
      {
        "subtitle": "Other Charges",
        "payload": "card other charges",
        "buttonType": "normal"
      },
      {
        "id":"btn",
        "subtitle": "Main Menu",
        "link": "https://www.nepalbank.com.np/en/personal/cash-withdrawal-charges.html",
        "buttonType": "normal"
      },
      {
        "id":"btn",
        "subtitle": "Back",
        "payload": "https://www.nepalbank.com.np/en/personal/cash-withdrawal-charges.html",
        "buttonType": "normal"
      }
    ]
  }

  
        

}
module.exports = localrundata;
