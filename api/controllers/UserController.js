const bcrypt = require('bcryptjs');


module.exports = {

    signup: async function (req, res) {
        try {
            const { username, email, password } = req.body;
            console.log('signup=====>', req.body);
            // Check if the email is already registered
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: 'Email is already registered.' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user record
            const newUser = await User.create({ username, email, password: hashedPassword }).fetch();

            return res.json({ message: 'Signup successful.', user: newUser });
        } catch (error) {
            return res.serverError(error);
        }
    },

    login: async function (req, res) {
        try {
            console.log('=====>', req.body);
            const { email, password } = req.body;
            // console.log(email, password);

            //   Find the user by email
            const user = await User.findOne({ email });
            console.log('==user===>', user);

            // If user is not found, return an error
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password.' });
            }

            // Compare the provided password with the stored password hash
            const isPasswordValid = await bcrypt.compare(password, user.password);

            // If passwords don't match, return an error
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password.' });
            }

            // Store the user ID in the session to maintain login state
            req.session.userId = user.id;

            return res.json({ message: 'Login successful.', user });
        } catch (error) {
            return res.serverError(error);
        }
    },
    logout: (req, res) => {
        // req.session.destroy(function(err) {
        //     if (err) {
        //       return res.serverError(err);
        //     }

        //     // Clear authentication-related properties
        //     delete req.session.userId;
        //     delete req.user;

        //     return res.ok({ message: 'Logout successful.' });
        //   });
    },
    updateUser: async function (req, res) {
        try {
            let userId = req.params.id; // Assuming you pass the user ID as a URL parameter
            const { username, email, password } = req.body;
            // Find the user by ID
            let user = await User.findOne({ id: userId });
            console.log('User=====>', user);
            // If user is not found, return an error
            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            // Update the user attributes
            user.username = username;
            user.email = email;
            user.password = password;


            // Save the updated user
            // console.log('User Save=====>', user);
            // console.log('User Save=====>', user.save());
            // user = new User({});
            // const updatedUser = await user.save()
            const updatedUser = await User.updateOne(userId).set(user);
            // const updatedUser = await User.updateOne({ id: userId })
            // .set({ user });
            // console.log('updatedUser=====>', updatedUser);
            // console.log('updatedUser=====>', User.updateOne(user))
            // .exec(function (err, usr) {
            //     console.log('User Update---->', err)
            // });

            return res.json({ message: 'User updated successfully.', user: updatedUser });
        } catch (error) {
            console.error('Error ------->', error);
            return res.serverError(error);
        }
    },
};
