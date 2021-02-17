// require all models and export from central place
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');


// export all models
module.exports = { User, Product, Category, Order };
