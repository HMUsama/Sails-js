

module.exports = {

    addParentDetails: async function (req, res) {
        try {
            const { playerName, age, gender, } = req.body;
            sails.log('addParentDetails---->', req)

            // const addDetails = await Parent.create({ playerName, age, gender, parentalProof }).fetch();

            // return res.json({ message: 'Add Parent Details successfully.', Parent: addDetails });

        } catch (error) {
            return res.serverError(error);
        }
    }

};


