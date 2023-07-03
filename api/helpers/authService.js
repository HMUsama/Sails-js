// const bcrypt = require('bcryptjs');

// module.exports = {
//     // const AuthService = {
// generateResetToken: async function (user) {
//     // Generate a unique reset token for the user
//     const resetToken = ''; /* Generate a token here */

//     // Save the reset token to the user model or a separate reset token model
//     user.resetToken = resetToken;
//     await user.save();

//     return resetToken;
//     },

//     // hashPassword: async function (password) {
//     //     // Generate a hashed password using bcrypt
//     //     const hashedPassword = await bcrypt.hash(password, 10);
//     //     return hashedPassword;
//     // },

//     // verifyPassword: async function (password, hashedPassword) {
//     //     // Compare the provided password with the hashed password
//     //     const isMatch = await bcrypt.compare(password, hashedPassword);
//     //     return isMatch;
//     // },

//     // generateAccessToken: function (user) {
//     //     // Generate an access token (e.g., JWT) for the user
//     //     const accessToken = ''; /* Generate an access token here */
//     //     return accessToken;
//     // },
//     // } 
// }
// module.exports = AuthService;

module.exports = {

    fn: async function ({ user }) {
        // Generate a unique reset token for the user
        const resetToken =  /* Generate a token here */

            // Save the reset token to the user model or a separate reset token model
            user.resetToken = resetToken;
        console.log('token=====>', user.resetToken);
        // await user.save();

        return resetToken;

    }
}


