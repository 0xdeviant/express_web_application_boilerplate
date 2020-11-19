import mongoose from 'mongoose';

let posts_schema = mongoose.Schema({
  text: String,
  createdAt: Date
})

export default posts_schema;