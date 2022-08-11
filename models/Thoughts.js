// Here we will use mongoose to get the data we are requesting.

const { Schema, model, Types } = require("mongoose");

// This is where we will use the moment object to set the time and date.  This example (MMM DD, YYYY [at] hh:mm a) will show the time date like this.  Jan 1, 1070 10:23: AM
const moment = require("moment");

// This is where the data we are requesting will be read from.
const ThoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    // This will verify our information and use the reactions schema to validate our data.
    reactions: [ReactionsSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// This will give us a total count of all the reactions.
ThoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// This is where we will create a thoughts model.  It can be done with the thoughts schema.
const Thoughts = model("Thoughts", ThoughtsSchema);

// This will tell node.js which bits of code to export from a given file so the other files are allowed access to the exported code.
module.exports = Thoughts;
