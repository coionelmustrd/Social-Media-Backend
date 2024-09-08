const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: String,
      required: true,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      //required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => timestamp
    },
    userName: {
      type: Date,
      required: true,
    },
});

module.exports = reactionSchema;