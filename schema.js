const mongoose = require("mongoose");
let Timestamps = require("mongoose-timestamp");
const Collection = mongoose.model("Collection", DBschema);
const { Schema } = mongoose;

const DBschema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },

  name: {
    type: String,
  },

  desc: {
    type: String,
  },

  SKU: {
    type: String,
  },

  category_id: {
    type: Number,
  },

  inventory_id: {
    type: Number,
  },

  price: {
    type: Number,
  },

  discount_id: {
    type: Number,
  },

  created_at: {
    type: Collection.createdAt,
  },
  modified_at: {
    type: Collection.updatedAt,
  },
  deleted_at: {
    type: Collection.deletedAt,
  },
});

const db = mongoose.model("data", DBschema);
module.exports = db;
