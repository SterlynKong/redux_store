// require mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

// declare schema for Order in mongodb
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

// Set model = to mongoose schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
