const { Schema, model } = require('mongoose')

const Comments = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post',
    required: true
  }
}, { timestamps: true })

module.exports = model('comments', Comments)