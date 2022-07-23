module.exports = {

  //MongoDB connection URL
  mongo_url: "mongodb://localhost:27017/chatbot",

  //ccms keys encryptions
    server_sig_pub:
      `-----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz2m4BmPYDOX9Yx9V3VoQ
      u79b7SR+rOJrl2WM12S42qMTfZQi2lZLX1hGj0GSTkiIsyKyrABAFr1vlS6UlSwk
      yDtfyLE28qdTy9Sus5mdiy3stZ6Eqg5WAN5fkjDFAlOSRUi+ucAf7qUFGHZg04V9
      yByLyR4gvexQpDdWO1q6sh35mgQlNQpKdZsJ/IRR41r9SgMsjL7B7Gi9aYuNaa/g
      GYqpcbFf/oS1e9ZtbYuxCJk7N134gOJnMNOoXyPoB6+5Gd4EHJAZBL3rkdjvl7Mk
      bZLLBWCCPG2jocQzWB3xFEerL42UaN12EtFo/Kp1jh0YgEeJIflIYgZtKf9Y/Tmr
      FwIDAQAB
      -----END PUBLIC KEY-----`,
    server_enc_pub: `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvkMzY5E3v+rmuS1Qzjn3
    qPGdINUa+Fz2NUREY21P/mozjGU3L+kKx44F9t0pTUdBKCAi5+7khK5KYfuAMhzP
    JZ51exzI3z+cxa0ZIvC5S9KISkAxaK/OiE39QCuFDP7nMRqZjIK7mJ1YwqmR86bo
    r5EykKwCEjvu09WIXMJDjpC8SM07xN7UCztB0qlLR6c9Dhg27Zl6NtblTmute+Xy
    WDYxQ7J6TX4Ify1veonuzm0Div1TCWQEV712LOP3kO2BmFXKZakFJJojYAxTcs4O
    Jv9xwsrtG8ZXtkFSdDyQsNNnK3AZQtvDXCd48vX29vMFgbYe4ErR642v1kRNtCE5
    vwIDAQAB
    -----END PUBLIC KEY-----`,
    client_sig_priv: `-----BEGIN PRIVATE KEY-----
    MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChUVsk4ESaE/5M
    R9QzdSzFghLdBL7mhBx2QujrPqW/xGsljiJuU13H1NYQzqrw9H8fS6PGIIj6Hwwk
    Pcx/q4cj4X8g8r0ZpGbjAM9Rj+l01pNS2Ynd2TN6+QEOkF+1PUidnycQ3lc9j9rP
    vkBBN44Y7tUgJy8I9kPSxEjHQBWhKQkqzcv6MWhiMIoyqgzRuhs3ObalRBksSnTC
    n62Fe7JLO7rG3oI+jAJpWCUU8DvZzsbIVKBte9JyON1IvVja6zk5KehFmuFFlQEO
    H1qyi8lQ/Z0nOuqgFKh+jThwAnt57SQGfVyVIapxrH1TCkj9H+GlARggm1uOxKxR
    kCWDTR+BAgMBAAECggEBAJwlb5/GJSEu8RtM+63DYc7cFP4ytcXTYull4qayQSXa
    LgxwBAveTgw7i+lA4l3Ri6rzQFdq7quMmegKmYOKuIiWoMN3smq7o4tfIU3Fiyg4
    +ulbAAPpVddWZxt9y+ZWp49KmjnNvYwtTpN/iBqYd8bShyFUTEbUeNnufLPA6C7R
    TDvH8ov30/LBxO4jeDUh01PtrU5FfSOHpPkadZgOTiUZqNIT1CvUKpjWgSZUoEvt
    6umKrtYBT8VXRnuQmLkfAAhQfd/w2kxFR/Y1wMk2iYMkJ8RlZ2wWX/8xL7D6pjAE
    9HQUTeB97nzgMpLuPMohFMt7nrvHGCsHlEo3+aRRdjECgYEAz24Rmd/dUE36Rou5
    Gta/H2FZwLIdQA2tfrSnLM4a2dvW3j48DtMwhw8IesE41CXXPqN6JDthjBL/vVlR
    foTAh65oMuhYbNYrgoXU8OXKHJg2TIMPC5F28LK3L2NPdotBYvFKAfHPgEgnBL+x
    cfmwbg8Wjx9+oNj87z6TvLkPDacCgYEAxxcyEr0hMqeh2oi8x7ew+DqIrLJMCtFF
    vhYb08pUaDNQNTAj3tCuUGkLbIwYGkx0L905TZ9ec93EIFwP+FJsQjpRVVkyZn/5
    yfeZye5eEOTS9T3bZyV7fvw97nA9N2odO3w/68UPHSgGg69ZvrfE4XKQHQwhSBuO
    42eeZbzpnpcCgYA5W4xOalK+Q/Gy1CwJOdx7huXUnOvtrFqPMNERWKSgHWQa7Eab
    Kta+Ye/MUeWu9A/C6F1761eb7hz9dNdODtNWMWnqucjJv6ckXnF1c3Uh1w0ctxjP
    8Bddk22IEwQEGZmpDGOUihMAu/LeI0uj4pFgvZdVWDYhsB6w4TLk+p8o/QKBgH7x
    71+7cLuX38A0iArgudrNl/BmD86l+c5m0n+M950peu8vLvAYJ83l7P7dpVC/hyYt
    7SftgpBmy3PGv/gatiTUgp/lLBnnaCK72jfD4f7rqQfu1UNDxycFN4gd0SrQYqtX
    Ynq3QBfbOawl1xegnc0S+4lJ/r63s7iUjY9Zka0pAoGBAL8qFSjtItzz497ESF+z
    F8PFG3sTajUnqG/Z3tzdaqikF1h6+8udwDeJBYuKzrETfyJJiIFETrgBkNhhVzvR
    66oX5jmf9jV4nxrhm8+8EmyFa3CR0af6v0DMad6UjB9l0sCulp3K0UDCryRTIe+y
    q8UBA7ZpmAag9c6a36YAwitK
    -----END PRIVATE KEY-----`,
    client_enc_priv: `-----BEGIN PRIVATE KEY-----
    MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDJV/6e7Rtq3ohc
    46zJlEHXPez67A/hm/nZHho31xQHKv/OjPQ4to1NdK8D824GMsP9QD1fe5/Pd7+v
    BdD3bX3Nkv/O0kYw+yenu7XqYwUGoNRFH+bUN1j3ri1LuSID2JkW6HTfzSaZzoPG
    OC2pI1SsaDrp1XECrCOk41kq/Vsbwg4ETIEMacOPH9DszWTewJG+LY4YwDOiO2LU
    xIVr7hyt3Mn7n9gmqreadF9eTeUMDGI4IsIqABt/shRyH86+B88uqP8NV7mJVV4i
    7jGHgVKnynZPvj9/HOvO8LVXPqvui0csiop3UHm/pQXJkJr1dTXiL5Ry0CZpFU7r
    Z4m5Mxv/AgMBAAECggEAHAygMi/CBA9gW+Bz79kxmvTLkOFWDQ4XroGdEW5rIdyB
    qprEYyo7YTECOMCu8TodR6itZCHqz5JVJ+Ldi7q7LepurLdqg+RZT+q8mxyUVKoP
    KFobZDEZudeQA96UuIhyO1jC/3KrD/5PKUwmQEvlveb/XhgYGFE23f+2KmEFUkZl
    A+KEZwpK+jHdp8yORP+dLBgOyKIDHw5GQkp7t66v8iwhew0zm9iAAwjZXZC/1meo
    rIeoZ2b+e300q8A7uBjQC9juzA+gK1nW4vgxIJXkk8KoxCKUcJcRIJlAqgHlH/xK
    xfMHQsptXW3X4brbmc3jxvNh8p8kCVE01/T1RuMQcQKBgQD3ZW4OH+d4MV7clXrS
    DGtj2/2fkT3+wHaiOghGmV2d4Rbk+DwrIObyFRnKCY9Cxu5QH869XsL3tEKYEF1t
    N1l0BF7GSH1gJ2QzPykkwkgNzepQhhf1At0M+Yab1hEwYX3xLb067B0G6xXeGIpi
    6KzhoU4Gq+NlQ/TWVHeoHh5Q/QKBgQDQWI8lNgJED/LebHVXKoxMyoslv2Wc/Ytn
    JI5twYFO8MYEN0yb45wSXKwqtqe23+jD+M11mEevlfHrukhP6He7NbPbM5jJWD17
    9QMDqfDWqnRLDtAqbnfJ+1An4ax4MInPSYEtgksNqwbnGcJFJ2DRu/9rLSBFwjmX
    Af9Es5P/qwKBgD6dSlSC2Ke//x1fK927zPZSOIfJT+KJPb1jaLLNoDcUQCIlfb0A
    r9L3ajaLYtno1WosErw1Hq1ozy4DflHlH1vQu1f+AtVyQtcBll06Wtg7lKFavveB
    CQd+pAYPEPyowCJpjCo8lkApAbjbhzLvZsoYdFIV8RCxOWeBq2M+dDfVAoGAdYRe
    SZjrMkTksvzuOtpvBKmCTypkQGbrCKSgCdyJ+WLp7lraxVtfHyRSoE0i0I3/lvpx
    uZDJborfSB1syFXRozEpX8z8syUomRCcQKbMh+jha6zRUf25Z55vme86/xgxw1As
    ouTJPM5pOFVZNPR/Mg4ehe+QMojZPwoLWE8Kfb0CgYAwFb3Ll75sCrIu6SCyk0y3
    rX7tWRjtw4KTCOwyI3Av936jX/l5WOaOoIyhshnwgUdbsPlB3GcQWzSqSQB9yGPO
    CoRcsKl73Xq99hRHc9DZtgg9TSu7CkJW1qE9R5DtZL7Gcz1qlzstWPMBIEedGzf8
    85Cl9s1N1iw9uCeDP284wg==
    -----END PRIVATE KEY-----`,
    client_key:`1`,

    // database server
    username:'thirdparty',
    password:'thirdp@rty',
    database: 'PPIVShineRBBL',
    server:'192.168.0.18',
    mainview: 'v_thirdparty_online',
    clientview: 'ClientTable',

    //ccms information
    charge_profile: 15,

    product_type:'900',
    cardType:'Personalized',

    //bot configurations
    SOCKET_PROTOCOL:'http',
    SOCKET_HOST:'localhost',
    SOCKET_PORT:5050,
    REDIS_SERVER:'127.0.0.1',
    BASEPATH:'rest/v1',    
    PORT:5050,
    DASHBOARD_SERVER:'localhost',
    INTENT_SERVER :'54.251.232.54',
    INTENT_SERVER_PORT:7900,
    INTENT_UTTER_URL:'rest/v1/utter',

    // #Mail Server Configuration
    EMAIL:'palmmindtest@gmail.com',
    SMTP_HOST:'smtp.gmail.com',
    SMTP_PORT:587,
    PASSWORD:'palmmindtest123',
    salt_key:123456789,

    // #shine receivers
    FEEDBACK_EMAIL:'kiranpoudel28@gmail.com',
    //complaint receivers
    CARD_DEPT:'st2770714@gmail.com',
    MOBILE_BANKING_DEPT:'st2770714@gmail.com',
    INTERNET_BANKING_DEPT:'st2770714@gmail.com',
    ACCOUNT_DEPT:'st2770714@gmail.com',
    LOAN_DEPT:'st2770714@gmail.com',
    STAFF_DEPT:'st2770714@gmail.com',
    OTHERS_DEPT:'st2770714@gmail.com',
    CARD_REQUEST_EMAIL:'kiranpoudel28@gmail.com',
    CARD_DISPUTE_CLAIM_EMAIL:'kiranpoudel28@gmail.com',
    CARD_REPIN_ENTRY_EMAIL:'kiranpoudel28@gmail.com',
    CARD_BLOCK_EMAIL:'kiranpoudel28@gmail.com',

    // #LiveChat server get from  dashbordserver console Bot_Token supperOwnerToken
    BOT_TOKEN:'WQfAo1ZoAqU63mVMNlxkZARhDy5LbH3QtYuynRrMMIVrEjnXRAt2NOJEpzvLMMEo',
    USERID:'6220963024329c3b3e63dcbe',
    ADMIN_TOKEN:'3bFag7cGLeQ2y0DZKWankCJueNyygNanRNCAmOIlJz2cG14uxifKMA366EYn1i1o',
    ORGANIZATION_ID:'621f815ce6abab0ebe13d6f3',
    DASHBOARD_PORT:3002,
    MESSANGER_BOT_HOST:'',
    MESSANGER_BOT_PORT:3000,
    MESSANGER_BOT_KEY:'',
    MESSANGER_BOT_ORG_ID:'',

    // #FOREX
    nrb_api:'https://www.nrb.org.np/api/forex/v1/rates',
    token:'yoWNG9T7wtD8aUovhQhRIkmpfP31VoeHvDD2tu2o',

    // #shine api
    shine_url:'https://shine.rollingnexus.com/api/v1',
    shine_location_key:'A4EB7F7FF606E746FA0D820DFEB46F0FBB8DDA5CBCAB0CF94D748272C2B6C00E',
    sms_api:'http://10.20.30.7:2080/banksmart-thirdparty-sms-api-web/message/sendMessage?username=shine&password=$hin3@2019',

    // #crypto
    CRYPT_IV:'28408e46',
    CRYPT_PASSWORD:'password',

    otp_expiry:10 //in minutes

  };