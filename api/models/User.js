module.exports = {
    attributes: {
        username: {
            type: 'string',
        },
        email: {
            type: 'string',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        // Other attributes and associations 
    },
};
