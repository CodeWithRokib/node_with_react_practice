import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password if using Gmail
  },
});

export const sendNotificationEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email
    to, // Recipient's email
    subject, // Subject line
    text, // Email body
  };

  return transporter.sendMail(mailOptions);
};
