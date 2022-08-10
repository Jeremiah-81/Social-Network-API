// Here we will use mongoose to get the data we are requesting.
const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // This is a regular expression that we can use to verify what we are looking for.  In this case it will be an email address.
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
    }
)

// This will give us a total count of all our friends.
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// This is where we will create a users model.  It can be done with the users schema
const Users = model('Users', UsersSchema);

// This will tell node.js which bits of code to export from a given file so the other files are allowed access to the exported code.
module.exports = Users;