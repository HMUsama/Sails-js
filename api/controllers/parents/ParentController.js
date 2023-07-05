

module.exports = {

    addParentDetails: async function (req, res) {
        try {
            const { playerName, age, gender, } = req.body;
            // sails.log('addParentDetails---->', req.body)

            const addDetails = await Parent.create({ playerName, age, gender, }).fetch();

            return res.json({ message: 'Add Parent Details successfully.', Parent: addDetails });

        } catch (error) {
            return res.serverError(error);
        }
    }

};


