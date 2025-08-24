const mongoose = require('mongoose');

const specSchema = new mongoose.Schema({
  ram: { type: String, default: "" },
  screen: { type: String, default: "" },
  storage: { type: String, default: "" },
  processor: { type: String, default: "" }
}, { _id: false });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  category: {
    type: String,
    enum: ['laptops', 'desktops', 'printers', 'monitors', 'accessories'],
    required: true
  },
  images: [{ type: String }],
  price: { type: String, required: true },
   specs: {
  type: specSchema,
  default: {},
  validate: {
    validator: function(v) {
      if (this.category !== 'accessories') {
        return v.ram && v.screen && v.storage && v.processor;
      }
      return true;
    },
    message: 'Specs fields are required for non-accessories products'
  }
}
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
