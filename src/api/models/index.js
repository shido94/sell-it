const User = (module.exports.User = require('./user.model'));
const Category = (module.exports.Category = require('./category.model'));
const Product = (module.exports.Product = require('./product.model'));

const collections = {
  User,
  Category,
  Product,
};

module.exports = collections;
