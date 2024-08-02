const nodemailer = require('nodemailer');

// Transporter object

let transporter = nodemailer.createTransport({
    host: '(link unavailable)',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });
  

// Define the email details

let mailOptions = {
    from: 'collinsacademyandconsult@gmail.com',
    to: 'tamedcollins@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email sent using Node.js!'
  };
  

// Sending the mail

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  