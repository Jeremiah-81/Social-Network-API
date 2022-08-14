// Here we will use mongoose to get the data we are requesting.
const { Schema } = require("mongoose");

// This is where the data we are requesting will be read from.
const ReactionsSchema = new Schema(
  {
    // This is where we will create a custom ID for each user.
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    // This is where we will create and use our timestamp we made using the framework wrapper moment.js.
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// This will tell node.js which bits of code to export from a given file so the other files are allowed access to the exported code.
module.exports = ReactionsSchema;
