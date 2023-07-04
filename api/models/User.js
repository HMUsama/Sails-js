module.exports = {
    attributes: {
        username: {
            type: 'string',
            required: true,
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
        // role: 'string',
        // required: true,
    },
};
