// server/app.js
const credentials =require('./credentials').credentials;
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
      user: credentials.from,
      pass: credentials.password
    }
  })
  const mailOptions = {
    from: credentials.from, // sender address
    to: credentials.to, // list of receivers
    subject: credentials.subject, // Subject line
    text:  credentials.text //, // plaintext body
  }
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      console.log("sending the email failed");
      console.log(error);
      res.json({message:"an error occured"})
    }
    else{
      console.log("sending the email succeeded");
      res.json({message:"an email succeeded"})
    }
  })
  console.log(credentials);
})




module.exports = app;