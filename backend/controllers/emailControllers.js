const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();


const sendEmail=async (req,res)=>{
  var { email, subject, message } = req.body;
  let testAccount= await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'maria66@ethereal.email',
        pass: '5jutKzV9dfvGTFfwCr'
    }
});
const info = await transporter.sendMail({
  from: 'maria66@ethereal.email', // sender address
  to: email, // list of receivers
  subject: subject, // Subject line
  text: message, // plain text body
  html: "<b>Hello world?</b>", // html body
});
res.send(info)
}
module.exports = { sendEmail };
