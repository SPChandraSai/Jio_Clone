// nodemailer -> mail 
console.log("Script started");
require("dotenv").config({ path: "D:/Algoprep/DevPrep/Jio clone/Pocs/Email_forget_reset/Lecture-_login_signup/poc/.env" });
const nodemailer = require("nodemailer");
const {APP_PASSWORD} = process.env
// console.log("Loaded APP_PASSWORD:", APP_PASSWORD);
// async..await is not allowed in global scope, must use a wrapper
// module.exports = async function main(token, userEmail) {
async function main(token, userEmail) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //   let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: "spchandrasai820@gmail.com",
            // different from your login password 
            // how to generate app password onn gmail ??
            pass: APP_PASSWORD
        }
    });
    // console.log("password:", APP_PASSWORD);
    console.log("Sending email...");
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "s.p.chandrasai820@gmail.com" , // sender address
        // to: "satluripurnachandrasai@gmail.com", // list of receivers
        to: userEmail, // list of receivers
        subject: "Sending First Email of reset token", // Subject line        
        text: "Hello world?", // plain text body
        html:
            `<b></b> 
            <p>your reset token is
        <br>${token}</br>
        </p>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
main("123456", "s.p.chandrasai820@gmail.com").catch(console.error);
