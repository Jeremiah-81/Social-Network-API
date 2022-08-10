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

// 
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// 
const Users = model('Users', UsersSchema);

// 
module.exports = Users;