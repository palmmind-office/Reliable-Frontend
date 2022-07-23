const nodemailer = require('nodemailer');
const pug = require('pug');
const { htmlToText } = require('html-to-text');
const keys = require('../config/keys');

module.exports = class Email {
    constructor(data){
       this.data = data;
    }

    newTransport(){
        return nodemailer.createTransport({
            service: 'gmail',
            host: keys.SMTP_HOST,
            port: keys.SMTP_PORT,
            auth: {
                user: keys.EMAIL,
                pass: keys.PASSWORD
            }
        })
    }

    //send function for email
    async send(template, subject){
        let mailId = '';
        //using different mail based on different type. Taking template name as reference
        switch(template){
            
            case 'feedbackEmail':
                mailId = keys.FEEDBACK_EMAIL;
                break;

            case 'complaintEmail':
                console.log(this.data, "data in email");
                if(this.data.category === 'ATM Card/ Visa Card') mailId = keys.CARD_DEPT
                else if(this.data.category === 'Mobile Banking') mailId = keys.MOBILE_BANKING_DEPT
                else if(this.data.category === 'Internet Banking') mailId = keys.INTERNET_BANKING_DEPT
                else if(this.data.category === 'Account') mailId = keys.ACCOUNT_DEPT
                else if(this.data.category === 'Loan') mailId = keys.LOAN_DEPT
                else if(this.data.category === 'Staff') mailId = keys.STAFF_DEPT
                else mailId = keys.OTHERS_DEPT
                
                break;

            case 'cardRequestEmail':
                mailId = keys.CARD_REQUEST_EMAIL;
                break;

            case 'disputeClaimEmail':
                mailId = keys.CARD_DISPUTE_CLAIM_EMAIL;
                break;

            case 'cardRepinEntryEmail':
                mailId = keys.CARD_REPIN_ENTRY_EMAIL;
                break;

            case 'cardBlockEmail':
                mailId = keys.CARD_BLOCK_EMAIL;
                break;

            default:
                break;
        }
        const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`,this.data);

        const mailOptions = {
            from: keys.EMAIL,
            to: mailId,
            subject,
            html,
            text: htmlToText(html)
        }

        await this.newTransport().sendMail(mailOptions)
    }

    //sending feedback email
    async sendFeedback(){
        try{
            await this.send('feedbackEmail','Feedback from user')
        }
        catch(err){
            console.log(err)
        }
    }

    //sending complaint email
    async sendComplaint(){
        try{
            await this.send('complaintEmail','Complaint from user')
        }
        catch(err){
            console.log(err)
        }
    }

    //sending card request email
    async sendCardRequest(){
        try{
            await this.send('cardRequestEmail','Card Request from user')
        }
        catch(err){
            console.log(err)
        }
    }

    //sending card dispute claim email
    async sendCardDisputeClaim(){
        try{
            await this.send('disputeClaimEmail','Dispute Claim from user')
        }
        catch(err){
            console.log(err)
        }
    }

    //sending card repin entry email
    async sendCardRepinEntry(){
        try{
            await this.send('cardRepinEntryEmail','Repin Entry from user')
        }
        catch(err){
            console.log(err)
        }
    }

    //sending card block email
    async sendCardBlock(){
        try{
            await this.send('cardBlockEmail','Card Block from user')
        }
        catch(err){
            console.log(err)
        }
    }
}