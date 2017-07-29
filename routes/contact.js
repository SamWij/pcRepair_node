const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//send email
router.post('/send', function(req, res, next) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sam.wijesinha@gmail.com',
      pass: 'Lucy!2014'
    }
  });

  const mailOptions = {
    from: '"Sam Wijesinha ?" <sam.wijesinha@gmail.com>',
    to: 'support@websolutions.com',
    subject: 'Hello from PCRepair',
    text: 'You have a submission from... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
    html: '<p>You have a submission from...</p> <ul><li>Name: '+req.body.name+'</li><li> Email: '+req.body.email+'</li><li> Message: '+req.body.message+'</li></ul>'
  }

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message Sent: '+ info.response);
      res.redirect('/');
    });
});


module.exports = router;
