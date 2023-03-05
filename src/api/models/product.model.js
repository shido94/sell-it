const mongoose = require("mongoose");
const { Schema } = mongoose;
const { toJSON, paginate } = require("./plugins");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const productSchema = Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    purchasedYear: {
      type: String,
    },
    distanceDriven: {
      type: String,
    },
    offeredAmount: {
      type: String,
    },
    acceptedAmount: {
      type: String,
    },
    // actionStatus => 1-created, 2-rejected, 3-accepted, 4-counter
    orderStatus: {
      type: Number,
      default: 1,
    },
    bidStatus: {
      type: Number,
      default: 1,
    },
    pickedUpDate: {
      type: Date,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pickupAddress: {
      type: String,
    },
    images: [
      {
        uri: {
          type: String,
        },
        isDefault: {
          type: Boolean,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);
productSchema.plugin(aggregatePaginate);

/**
 * @typedef Product
 */
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
