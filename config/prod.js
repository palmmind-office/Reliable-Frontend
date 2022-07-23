module.exports = {

        //MongoDB connection URL
  mongo_url: process.env.MONGO_URL,

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
    client_key:process.env.CLIENT_KEY,

    // database server
    username:process.env.username,
    password:process.env.password,
    database: process.env.database,
    server:process.env.server,
   

    //ccms information
    ccms_host:process.env.ccms_host,
    ccms_base_url:process.env.ccms_base_url,
    ccms_port:process.env.ccms_port,

    charge_profile: 15,

    product_type:process.env.product_type,
    cardType:process.env.cardType,

    //bot configurations
    SOCKET_PROTOCOL:process.env.SOCKET_PROTOCOL,
    SOCKET_HOST:process.env.SOCKET_HOST,
    SOCKET_PORT:process.env.SOCKET_PORT,
    REDIS_SERVER:process.env.REDIS_SERVER,
    BASEPATH:'rest/v1',    
    PORT:process.env.PORT,
    DASHBOARD_SERVER:process.env.DASHBOARD_SERVER,

    // #Mail Server Configuration
    EMAIL:process.env.EMAIL,
    SMTP_HOST:process.env.SMTP_HOST,
    SMTP_PORT:process.env.SMTP_PORT,
    PASSWORD:process.env.PASSWORD,

    // #shine receivers
    FEEDBACK_EMAIL:process.env.FEEDBACK_EMAIL,
    //complaint receivers
    CARD_DEPT:process.env.CARD_DEPT,
    MOBILE_BANKING_DEPT:process.env.MOBILE_BANKING_DEPT,
    INTERNET_BANKING_DEPT:process.env.INTERNET_BANKING_DEPT,
    ACCOUNT_DEPT:process.env.ACCOUNT_DEPT,
    LOAN_DEPT:process.env.LOAN_DEPT,
    STAFF_DEPT:process.env.STAFF_DEPT,
    OTHERS_DEPT:process.env.OTHERS_DEPT,
    CARD_REQUEST_EMAIL:process.env.CARD_REQUEST_EMAIL,
    CARD_DISPUTE_CLAIM_EMAIL:process.env.CARD_DISPUTE_CLAIM_EMAIL,
    CARD_REPIN_ENTRY_EMAIL:process.env.CARD_REPIN_ENTRY_EMAIL,
    CARD_BLOCK_EMAIL:process.env.CARD_BLOCK_EMAIL,

    // #LiveChat server get from  dashbordserver console Bot_Token supperOwnerToken
    BOT_TOKEN:process.env.BOT_TOKEN,
    USERID:process.env.USERID,
    ADMIN_TOKEN:process.env.ADMIN_TOKEN,
    ORGANIZATION_ID:process.env.ORGANIZATION_ID,
    DASHBOARD_PORT:process.env.DASHBOARD_PORT,
    MESSANGER_BOT_HOST:process.env.MESSANGER_BOT_HOST,
    MESSANGER_BOT_PORT:process.env.MESSANGER_BOT_PORT,
    MESSANGER_BOT_KEY:process.env.MESSANGER_BOT_KEY,
    MESSANGER_BOT_ORG_ID:process.env.MESSANGER_BOT_ORG_ID,

    // #FOREX
    nrb_api:process.env.nrb_api,
    token:process.env.token,

    // #shine api
    shine_url:process.env.shine_url,
    shine_location_key:process.env.shine_location_key,
    sms_api:process.env.sms_api,

    // #crypto
    CRYPT_IV:process.env.CRYPT_IV,
    CRYPT_PASSWORD:process.env.CRYPT_PASSWORD,

    otp_expiry:process.env.otp_expiry //in minutes
  
};