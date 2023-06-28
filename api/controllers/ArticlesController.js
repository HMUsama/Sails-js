

module.exports = {
  getAllUsers: async function(req, res) {
    try {
      const users = await User.find();

      return res.json(users);
    } catch (error) {
      return res.serverError(error);
    }
  },
};


