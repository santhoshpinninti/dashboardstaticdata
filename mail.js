var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'naveensai086@gmail.com',
           pass: 'Gmail@97.'
       }
   });

   const mailOptions = {
    from: 'naveensai086@gmail.com', // sender address
    to: 'salla2@miraclesoft.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>https://stackoverflow.com/questions/41267211/how-to-sendmail-using-nodemail-and-smtp-transport?rq=1</p>'// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });