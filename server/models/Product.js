// require mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

// declare schema for product in mongodb
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

// Set model = to mongoose schema
const Product = mongoose.model('Product', productSchema);

// export model
module.exports = Product;
