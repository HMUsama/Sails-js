// // Import the necessary modules
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
// // Define the transporter for sending emails
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'oscar.bauch@ethereal.email',
        pass: 'CcUK47ebqdyu4KcNHk'
    }
});

module.exports = {
    // transporter: nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'your-email@gmail.com',
    //         pass: 'your-password',
    //     },
    // }),
    fn: async function (recipientEmail) {
        try {
            const emailData = { email: recipientEmail };
            console.log('emailData ---->', emailData)
            // const templatePath = path.resolve(__dirname, '../../views/emails/welcomeEmail.ejs');
            const templatePath = path.resolve(sails.config.appPath, 'views', 'emails', 'welcomeEmail.ejs', emailData);
            const emailHtml = fs.readFileSync(templatePath, ['utf-8', emailData]);
            // const emailHtml = ejs.render(emailHtmlData, emailData);
            // const emailTemplate = await sails.helpers.fs.read(templatePath, 'utf-8');

            // const emailHtml = sails.render(templatePath, emailData);
            // const emailHtml = ejs.render(emailTemplate, emailData);

            // console.log('templatePath ---->', emailTemplate)
            sails.log('emailHtml ---->', emailHtml)

            const mailOptions = {
                from: 'muhammadusama9005@gmail.com',
                to: 'muhammadusama9005@gmail.com',
                subject: 'Password Reset',
                text: `Please click the following link to reset your password: http://example.com/reset-password?token=${'HI'}`,
                html: emailHtml,
            };
            sails.log('mailOptions ---->', mailOptions)
            // Send the email
            // await transporter.senddMail(mailOptions);
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log('Error occurred. ' + err.message);
                    return process.exit(1);
                }
                // return exit();
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        } catch (err) {
            // Handle errors
            throw new Error('Failed to send email', err);
        }
    },
}

// Define the EmailService object
// const EmailService = {
//     sendPasswordResetEmail: async function (recipientEmail, token) {
//         try {
//             const mailOptions = {
//                 from: 'muhammadusama9005@gmail.com',
//                 to: 'muhammadusama9005@gmail.com',
//                 subject: 'Password Reset',
//                 text: `Please click the following link to reset your password: http://example.com/reset-password?token=${'HI'}`,
//             };

//             // Send the email
//             await transporter.sen(mailOptions);
//         } catch (err) {
//             // Handle errors
//             throw new Error('Failed to send email');
//         }
//     },
// };

// module.exports = EmailService;

