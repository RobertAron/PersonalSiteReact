// server/app.js
const credentials =require('./credentials');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/api/sendmail',(req,res)=>{
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
      user: 'example@gmail.com',
      pass: 'password'
    }
  })
  const mailOptions = {
    from: 'example@gmail.com>', // sender address
    to: 'receiver@destination.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: "text" //, // plaintext body
  }
  /*
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      console.log("sending the email failed");
      res.json({message:"an error occured"})
    }
    else{
      console.log("sending the email succeeded");
      res.json({message:"an error succeeded"})
    }
  })
  */
  console.log("inside of email api");
  console.log(credentials);
  res.send("Sent Email");
})




module.exports = app;