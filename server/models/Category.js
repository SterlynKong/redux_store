// require mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

// declare schema for Category in mongodb
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

// Set model = to mongoose schema
const Category = mongoose.model('Category', categorySchema);

// export model
module.exports = Category;
