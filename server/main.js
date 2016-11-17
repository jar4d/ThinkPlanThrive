import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  process.env.MAIL_URL = "smtp://postmaster%40sandbox8cd5e818f4054464a36eb6c0d31cafa7.mailgun.org:ef142b4bd91a3bafa7b5f4ae777469bf@smtp.mailgun.org:587";
});

Meteor.methods({
  sendEmail: function (from, message) {
    check([from, message], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: 'hello@jar4d.com',
      from: from,
      subject: 'FROM WEBSITE',
      text: message
    });
  }
});