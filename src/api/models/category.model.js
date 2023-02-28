const mongoose = require('mongoose');
const { Schema } = mongoose;
const { toJSON, paginate } = require('./plugins');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const categorySchema = Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    categoryEnum: {
      type: Number,
      required: true,
    },
    logo: {
      type: String,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);
categorySchema.plugin(aggregatePaginate);

/**
 * @typedef Category
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
