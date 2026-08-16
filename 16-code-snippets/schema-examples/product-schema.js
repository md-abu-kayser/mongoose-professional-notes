const productSchema = new mongoose.Schema({
  name: String,
  price: { type: Number, min: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  inStock: { type: Boolean, default: true },
});
