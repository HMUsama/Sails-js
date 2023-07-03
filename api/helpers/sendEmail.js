// // Import the necessary modules
const nodemailer = require('nodemailer');

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
            console.log('recipientEmail ---->', recipientEmail)
            const mailOptions = {
                from: 'muhammadusama9005@gmail.com',
                to: 'muhammadusama9005@gmail.com',
                subject: 'Password Reset',
                text: `Please click the following link to reset your password: http://example.com/reset-password?token=${'HI'}`,
            };
            console.log('mailOptions ---->', mailOptions)
            // Send the email
            // await transporter.senddMail(mailOptions);
            transporter.sendMail(mailOptions, (err, info) => {
                // sails.log('process ---->', process.exit(1))
                // sails.log('Error ---->', err)
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
            throw new Error('Failed to send email');
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

